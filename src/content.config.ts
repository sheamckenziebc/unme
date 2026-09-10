import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sourceSchema = z.object({
  title: z.string(),
  organization: z.string(),
  documentType: z.string(),
  publishedDate: z.coerce.date().optional(),
  url: z.url(),
  archiveUrl: z.url().optional(),
  note: z.string().optional(),
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
  title: z.string().min(1).max(100),
  organization: z.string().min(1).max(120),
  description: z.string().min(1).max(240),
  url: z.url(),
  verifiedDate: z.coerce.date(),
});

const investigations = defineCollection({
  loader: glob({
    base: "./src/content/investigations",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z
    .object({
      title: z.string(),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      description: z.string(),
      publishedDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      authors: z.array(z.string()).min(1),
      jurisdiction: z.string(),
      topics: z.array(z.string()).min(1),
      organizations: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      demonstration: z.boolean().default(false),
      heroImage: z.string().optional(),
      heroImageAlt: z.string().optional(),
      summary: z.array(z.string().min(1).max(180)).min(2).max(4),
      actions: z.array(actionSchema).default([]),
      sources: z.array(sourceSchema).default([]),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(),
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
        data.draft ||
        data.demonstration ||
        (data.actions.length > 0 &&
          data.actions.some((action) => action.category === "contact")),
      {
        message:
          "Published investigations require civic actions, including an official contact route.",
        path: ["actions"],
      },
    ),
});

export const collections = { investigations };
