import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const principleSchema = z.object({
  num: z.string(),
  title: z.string(),
  body: z.string(),
});

const captionSchema = z.object({
  label: z.string(),
  body: z.string(),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guides' }),
  schema: ({ image }) =>
    z.object({
      number: z.string(),
      eyebrow: z.string(),
      titleHtml: z.string(),
      lede: z.array(z.string()).min(1),
      meta: z.object({
        difficulty: z.string(),
        time: z.string(),
        tools: z.string(),
        output: z.string(),
      }),
      intro: z.object({
        label: z.string().default('Before you start'),
        headingHtml: z.string(),
        principles: z.array(principleSchema).length(3),
        glossaryTerms: z.array(z.string()).default([]),
      }),
      caseStudy: z.object({
        kicker: z.string(),
        creditHtml: z.string(),
        before: image(),
        after: image(),
        beforeAlt: z.string(),
        afterAlt: z.string(),
        captions: z.array(captionSchema),
      }),
      steps: z
        .array(
          z.object({
            id: z.string(),
            num: z.string(),
            title: z.string(),
            kicker: z.string(),
          })
        )
        .min(1),
      closing: z.object({
        headingHtml: z.string(),
        bodyHtml: z.array(z.string()).min(1),
      }),
      footer: z.object({
        label: z.string(),
        tools: z.string(),
      }),
      publishedAt: z.coerce.date(),
    }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      theme: z.string(),
      tagline: z.string(),
      stack: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      publishedAt: z.coerce.date(),
    }),
});

export const collections = { guides, work };
