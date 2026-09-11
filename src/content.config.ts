import { existsSync } from "node:fs";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const repositoryRoot = new URL("../", import.meta.url);
const httpUrl = z.url().refine(
  (value) => {
    const protocol = new URL(value).protocol;
    return protocol === "http:" || protocol === "https:";
  },
  { message: "URL must use HTTP or HTTPS." },
);

const sourceSchema = z.object({
  title: z.string().trim().min(1).max(180),
  organization: z.string().trim().min(1).max(160),
  documentType: z.string().trim().min(1).max(100),
  publishedDate: z.coerce.date().optional(),
  url: httpUrl,
  archiveUrl: httpUrl.optional(),
  note: z.string().trim().min(1).max(360).optional(),
});

const actionSchema = z.object({
  category: z.enum([
    "contact",
    "petition",
    "records",
    "oversight",
    "meeting",
    "other",
  ]),
  title: z.string().trim().min(1).max(100),
  organization: z.string().trim().min(1).max(120),
  description: z.string().trim().min(1).max(240),
  url: httpUrl,
  verifiedDate: z.coerce.date(),
});

const publicationReviewSchema = z.object({
  caseFile: z
    .string()
    .regex(/^docs\/case-files\/[a-z0-9]+(?:-[a-z0-9]+)*\.md$/),
  approvedBy: z.string().trim().min(1).max(120),
  approvedDate: z.coerce.date(),
  decision: z.literal("publish"),
  rightOfReply: z.enum(["completed", "not-applicable", "documented-exception"]),
  fairnessReview: z.enum(["completed", "documented-exception"]),
  finalFactCheck: z.literal("completed"),
});

const ledgerSchema = z.object({
  status: z.enum([
    "action-underway",
    "recommendations-accepted",
    "partially-implemented",
    "recommendations-ignored",
    "money-repaid",
    "official-resigned",
    "no-action",
    "under-investigation",
    "unresolved",
  ]),
  label: z.string().trim().min(1).max(80),
  summary: z.string().trim().min(1).max(240),
  checkedDate: z.coerce.date(),
});

const investigations = defineCollection({
  loader: glob({
    base: "./src/content/investigations",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z
    .object({
      title: z.string().trim().min(1).max(180),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      format: z.enum(["dossier", "brief"]).default("dossier"),
      description: z.string().trim().min(1).max(280),
      publishedDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      authors: z.array(z.string().trim().min(1).max(120)).min(1).max(8),
      jurisdiction: z.string().trim().min(1).max(120),
      topics: z.array(z.string().trim().min(1).max(80)).min(1).max(12),
      organizations: z
        .array(z.string().trim().min(1).max(180))
        .max(30)
        .default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      demonstration: z.boolean().default(false),
      heroImage: z.string().trim().min(1).optional(),
      heroImageAlt: z.string().trim().min(1).max(240).optional(),
      summary: z.array(z.string().trim().min(1).max(180)).min(2).max(4),
      actions: z.array(actionSchema).default([]),
      publicationReview: publicationReviewSchema.optional(),
      ledger: ledgerSchema.optional(),
      sources: z.array(sourceSchema).default([]),
      seo: z
        .object({
          title: z.string().trim().min(1).max(100).optional(),
          description: z.string().trim().min(1).max(280).optional(),
          image: z.string().trim().min(1).optional(),
        })
        .optional(),
    })
    .refine((data) => !data.heroImage || Boolean(data.heroImageAlt), {
      message: "heroImageAlt is required whenever heroImage is present.",
      path: ["heroImageAlt"],
    })
    .refine(
      (data) => !data.updatedDate || data.updatedDate >= data.publishedDate,
      {
        message: "updatedDate cannot be earlier than publishedDate.",
        path: ["updatedDate"],
      },
    )
    .refine(
      (data) =>
        data.draft || data.demonstration || data.publishedDate <= new Date(),
      {
        message:
          "A production investigation cannot be public before its publishedDate.",
        path: ["publishedDate"],
      },
    )
    .refine(
      (data) =>
        data.draft ||
        data.demonstration ||
        data.actions.every((action) => action.verifiedDate <= new Date()),
      {
        message: "Published civic-action checks cannot be future-dated.",
        path: ["actions"],
      },
    )
    .refine(
      (data) =>
        data.draft ||
        data.demonstration ||
        !data.publicationReview ||
        data.publicationReview.approvedDate <= new Date(),
      {
        message: "Publication approval cannot be future-dated.",
        path: ["publicationReview", "approvedDate"],
      },
    )
    .refine(
      (data) =>
        data.draft ||
        data.demonstration ||
        !data.ledger ||
        data.ledger.checkedDate <= new Date(),
      {
        message: "Ledger status checks cannot be future-dated.",
        path: ["ledger", "checkedDate"],
      },
    )
    .refine(
      (data) =>
        data.draft ||
        data.demonstration ||
        (data.actions.length > 0 &&
          data.actions.some((action) => action.category === "contact")),
      {
        message:
          "Published investigations require civic actions, including an official contact route.",
        path: ["actions"],
      },
    )
    .refine(
      (data) => data.draft || data.demonstration || data.publicationReview,
      {
        message:
          "Published investigations require a documented publication review and editor approval.",
        path: ["publicationReview"],
      },
    )
    .refine((data) => data.draft || data.demonstration || data.ledger, {
      message: "Published investigations require a current Ledger status.",
      path: ["ledger"],
    })
    .refine(
      (data) => data.draft || data.demonstration || data.sources.length > 0,
      {
        message: "Published investigations require at least one source record.",
        path: ["sources"],
      },
    )
    .refine(
      (data) =>
        new Set(data.sources.map((source) => source.url)).size ===
        data.sources.length,
      {
        message: "Source URLs must be unique within an investigation.",
        path: ["sources"],
      },
    )
    .refine(
      (data) =>
        new Set(data.actions.map((action) => action.url)).size ===
        data.actions.length,
      {
        message: "Civic-action URLs must be unique within an investigation.",
        path: ["actions"],
      },
    )
    .refine(
      (data) =>
        data.draft ||
        data.demonstration ||
        (data.publicationReview &&
          data.publicationReview.caseFile.endsWith(`/${data.slug}.md`) &&
          existsSync(new URL(data.publicationReview.caseFile, repositoryRoot))),
      {
        message:
          "publicationReview.caseFile must exist and match the investigation slug.",
        path: ["publicationReview", "caseFile"],
      },
    ),
});

export const collections = { investigations };
