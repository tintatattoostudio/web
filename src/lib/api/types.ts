import { z } from "zod";

export const LocalesSchema = z.enum(["sl", "en"]);
export type Locales = z.infer<typeof LocalesSchema>;

export const QASchema = z.object({
  question: z.string(),
  answer: z.string(),
});
export type QA = z.infer<typeof QASchema>;

export const FAQSectionSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
  qa: z.array(QASchema),
});
export type FAQSection = z.infer<typeof FAQSectionSchema>;

export const FAQSchema = z.object({
  data: z.object({
    attributes: z.object({
      locale: LocalesSchema,
      section: z.array(FAQSectionSchema),
    }),
  }),
});
export type FAQ = z.infer<typeof FAQSchema>;

export const WebSegmentSchema = z.object({
  title: z.string(),
  content: z.string(),
});
export type WebSegment = z.infer<typeof WebSegmentSchema>;

export const CareSchema = z.object({
  title: z.string(),
  locale: LocalesSchema,
  sections: z.array(WebSegmentSchema),
});
export type Care = z.infer<typeof CareSchema>;

export const CareBaseSchema = z.object({
  data: z.object({
    attributes: CareSchema,
  }),
});
export type CareBase = z.infer<typeof CareBaseSchema>;

export const InstructionsSchema = z.object({
  title: z.string(),
  content: z.string(),
  locale: LocalesSchema,
  segments: z.array(WebSegmentSchema),
});
export type Instructions = z.infer<typeof InstructionsSchema>;

export const InstructionsBaseSchema = z.object({
  data: z.object({
    attributes: InstructionsSchema,
  }),
});
export type InstructionsBase = z.infer<typeof InstructionsBaseSchema>;

export const LandingSchema = z.object({
  aboutTitle: z.string(),
  aboutContent: z.string(),
  artistsTitle: z.string(),
  artistsContent: z.string(),
  locale: LocalesSchema,
});
export type Landing = z.infer<typeof LandingSchema>;

export const LandingBaseSchema = z.object({
  data: z.object({
    attributes: LandingSchema,
  }),
});
export type LandingBase = z.infer<typeof LandingBaseSchema>;

export const StrapiImageSchema = z.object({
  id: z.number(),
  attributes: z.object({
    url: z.string(),
    formats: z.object({
      thumbnail: z.object({
        url: z.string(),
      }),
    }),
  }),
});
export type StrapiImage = z.infer<typeof StrapiImageSchema>;

export const ArtistSchema = z.object({
  attributes: z.object({
    artist: z.string(),
    name: z.string(),
    bio: z.string(),
    styles: z.string(),
    pfp: z.object({
      data: StrapiImageSchema,
    }),
    images: z
      .object({
        data: z.array(StrapiImageSchema),
      })
      .optional(),
    locales: LocalesSchema,
  }),
});
export type Artist = z.infer<typeof ArtistSchema>;