import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    experience: z.array(z.object({
      company: z.string(),
      role: z.string(),
      dates: z.string(),
      summary: z.string(),
    })).optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.iso.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    abstract: z.string(),
    citationAuthors: z.string(),
    citationPublication: z.string(),
    externalUrl: z.url().optional(),
    order: z.number().int(),
  }),
});

export const collections = { pages, notes, papers };
