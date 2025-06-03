import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const profile = defineCollection({
  loader: glob({ base: "./src/data/profile", pattern: "**/[^_]*.md" }),
  schema: z.object({
    name: z.string(),
    summary: z.object({
      es: z.string(),
      en: z.string(),
    }),
    contact: z.array(z.string()),
  }),
});

const experiencies = defineCollection({
  loader: glob({ base: "./src/data/experiences", pattern: "**/[^_]*.md" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    url: z.string().optional(),
  }),
});

const skills = defineCollection({
  loader: glob({ base: "./src/data/skills", pattern: "**/[^_]*.md" }),
  schema: z.object({
    title: z.object({
      en: z.string(),
      es: z.string(),
    }),
    order: z.number(),
  }),
});

const education = defineCollection({
  loader: glob({ base: "./src/data/education", pattern: "**/[^_]*.md" }),
  schema: z.object({
    title: z.object({
      es: z.string(),
      en: z.string(),
    }),
    institution: z.string(),
    url: z.string(),
    startYear: z.number().int(),
    endYear: z.number().int(),
  }),
});

const certifications = defineCollection({
  loader: glob({ base: "./src/data/certifications", pattern: "**/[^_]*.md" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    url: z.string().optional(),
  }),
});

export const collections = { profile, experiencies, skills, education, certifications };
