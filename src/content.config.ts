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
      heroImage: z.string().optional(),
      heroImageAlt: z.string().optional(),
      summary: z.array(z.string()).min(1),
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
    }),
});

export const collections = { investigations };
