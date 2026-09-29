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
    eyebrow: z.string().default("Note"),
    draft: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    kind: z.string(),
    venue: z.string(),
    summary: z.string(),
    abstract: z.string(),
    citationAuthors: z.string(),
    citationPublication: z.string(),
    logo: z.string(),
    logoAlt: z.string(),
    externalUrl: z.url().optional(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).default([]),
    visual: z.number().int().min(1).max(5).default(1),
    order: z.number().int(),
  }),
});

export const collections = { pages, notes, papers };
