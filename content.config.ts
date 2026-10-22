// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      contents: z.array(
        z.object({
          title: z.string().optional(),
          paragraph: z.string(),
        }),
      ),
      author: z.string(),
      role: z.string().optional(),
      authorImage: z.string(),
      authorImageAlt: z.string(),
      pubDate: z.date(),
      cardImage: z.string(),
      cardImageAlt: z.string(),
      readTime: z.number(),
      tags: z.array(z.string()).optional(),
      categories: z
        .array(
          z.enum([
            "Pilot News",
            "International Aviation",
            "Aviation Safety",
            "Community",
            "Aviation Training",
            "Pilot Training and Certification",
            "Career Change",
            "Aircraft Guides",
            "Pilot Guides",
            "Commercial Pilot",
            "Flight Training",
            "Pilot Career Guides",
            "Uncategorized",
            "Pilot Mindset",
            "Pilot's Way of Life",
            "Design",
            "Flight School Comparison",
            "Private Pilot Flight School",
            "Aviation Technology",
          ]),
        )
        .optional(),
    }),
});

const pilotTraining = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/pilot-training",
  }),
  schema: () =>
    z.object({
      siteTitle: z.string(),
      siteDescription: z.string().length(155),
      siteKeywords: z.string(),
      city: z.string(),
      stateShort: z.string(),
      stateLong: z.string(),
      keyPlace1: z.string(),
      keyPlace2: z.string(),
      distance: z.string(),
      headlines: z.array(z.string()),
      header: z.object({
        upperHeader: z.string(),
        title: z.string(),
        description: z.string(),
        buttons: z.array(
          z
            .object({
              text: z.string(),
              href: z.string(),
              style: z.string().optional(),
            })
            .optional(),
        ),
      }),
      whyUs: z.object({
        upperHeading: z.string(),
        title: z.string(),
        description: z.string(),
        descriptions: z.array(z.string()),
        bullets: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
        buttons: z.array(
          z.object({
            text: z.string(),
            href: z.string(),
            style: z.string().optional(),
          }),
        ),
      }),
      advantages: z.object({
        upperHeading: z.string(),
        title: z.string(),
        description: z.string(),
        descriptions: z.array(z.string()),
        bullets: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
        buttons: z.array(
          z.object({
            text: z.string(),
            href: z.string(),
            style: z.string().optional(),
          }),
        ),
        advantages: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            bullets: z.array(
              z.object({
                title: z.string(),
                description: z.string(),
              }),
            ),
          }),
        ),
      }),
      benefits: z.object({
        upperHeading: z.string(),
        title: z.string(),
        description: z.string(),
        descriptions: z.array(z.string()),
        benefits: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            bullets: z.array(
              z.object({
                icon: z.string(),
                title: z.string(),
                description: z.string(),
              }),
            ),
          }),
        ),
      }), faqs: z.object({
        upperHeading: z.string(),
        title: z.string(),
        items: z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        ),
      }).optional(),
      ctas: z.array(
        z.object({
          upperHeading: z.string(),
          title: z.string(),
          description: z.string(),
          button: z.object({
            href: z.string(),
            text: z.string(),
            style: z.string().optional(),
          }),
        }),
      ),
    }),
});

const faqsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    upperHeading: z.string().optional(),
    title: z.string(),
    paragraphs: z.array(z.string()).default([]),
    ctaUrl: z.string().optional(),
    ctaTitle: z.string().optional(),
    categories: z
      .array(
        z.object({
          id: z.string(),
          name: z.string(),
        }),
      )
      .optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        categoryId: z.string().optional(),
      }),
    ),
  }),
});

const aviationGuides = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/aviation-guides",
  }),
  schema: () =>
    z.object({
      siteTitle: z.string(),
      siteDescription: z.string(),
      siteKeywords: z.string().optional(),
      header: z.object({
        image: z
          .object({
            src: z.string(),
            alt: z.string().optional(),
          })
          .optional(),
        upperHeader: z.string().optional(),
        title: z.string(),
        description: z.string().optional(),
        buttons: z
          .array(
            z.object({
              text: z.string(),
              href: z.string(),
              style: z.string().optional(),
            }),
          )
          .optional(),
      }),
      program: z
        .object({
          overview: z
            .object({
              image: z
                .object({
                  src: z.string(),
                  alt: z.string().optional(),
                })
                .optional(),
              upperHeader: z.string().optional(),
              title: z.string().optional(),
              description: z.string().optional(),
              targetAudience: z
                .object({
                  title: z.string().optional(),
                  points: z.array(z.string()).optional(),
                })
                .optional(),
              programStructureTitle: z.string().optional(),
              requirementsTitle: z.string().optional(),
              requirements: z.array(z.string()).optional(),
              includedTitle: z.string().optional(),
              included: z.array(z.string()).optional(),
            })
            .optional(),
          advantages: z
            .object({
              upperHeader: z.string().optional(),
              title: z.string().optional(),
              description: z.string().optional(),
              bullets: z
                .array(
                  z.object({
                    title: z.string().optional(),
                    description: z.string().optional(),
                    icon: z.string().optional(),
                  }),
                )
                .optional(),
            })
            .optional(),
        })
        .optional(),
      cta: z
        .object({
          image: z
            .object({
              src: z.string(),
              alt: z.string().optional(),
            })
            .optional(),
          title: z.string().optional(),
          description: z.string().optional(),
          descriptions: z.array(z.string()).optional(),
          button: z
            .object({
              text: z.string(),
              href: z.string(),
            })
            .optional(),
        })
        .optional(),
      ctas: z
        .object({
          ctaPrivatePilot: z
            .object({
              image: z
                .object({
                  src: z.string(),
                  alt: z.string().optional(),
                })
                .optional(),
              title: z.string().optional(),
              description: z.string().optional(),
              descriptions: z.array(z.string()).optional(),
              button: z
                .object({
                  text: z.string(),
                  href: z.string(),
                })
                .optional(),
            })
            .optional(),
          ctaDiscoveryFlight: z
            .object({
              image: z
                .object({
                  src: z.string(),
                  alt: z.string().optional(),
                })
                .optional(),
              title: z.string().optional(),
              description: z.string().optional(),
              descriptions: z.array(z.string()).optional(),
              button: z
                .object({
                  text: z.string(),
                  href: z.string(),
                })
                .optional(),
            })
            .optional(),
        })
        .optional(),
      faqs: z
        .object({
          upperHeading: z.string().optional(),
          title: z.string().optional(),
          paragraphs: z.array(z.string()).optional(),
          categories: z
            .array(
              z.object({
                id: z.string(),
                name: z.string(),
              }),
            )
            .optional(),
          faqs: z
            .array(
              z.object({
                question: z.string(),
                answer: z.string(),
                categoryId: z.string().optional(),
              }),
            )
            .optional(),
          ctaUrl: z.string().optional(),
          ctaTitle: z.string().optional(),
          btnClass: z.string().optional(),
        })
        .optional(),
      textIcons: z
        .object({
          upperHeader: z.string().optional(),
          title: z.string().optional(),
          description: z.string().optional(),
          descriptions: z.array(z.string()).optional(),
          bullets: z
            .array(
              z.object({
                icon: z.string().optional(),
                title: z.string().optional(),
                description: z.string().optional(),
              }),
            )
            .optional(),
          button: z
            .object({
              text: z.string().optional(),
              href: z.string().optional(),
            })
            .optional(),
        })
        .optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  "pilot-training": pilotTraining,
  faqs: faqsCollection,
  "aviation-guides": aviationGuides,
};
