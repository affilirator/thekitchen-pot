import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    updateDate: z.string().optional(),
    author: z.object({
      name: z.string(),
      image: z.string(),
      bio: z.string(),
      expertise: z.array(z.string())
    }),
    rating: z.number().min(0).max(10),
    category: z.string(),
    image: z.string().url(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    product: z.object({
      name: z.string(),
      brand: z.string(),
      image: z.string().url(),
      price: z.number(),
      sku: z.string(),
      specifications: z.array(z.object({
        category: z.string(),
        items: z.array(z.object({
          label: z.string(),
          value: z.string()
        }))
      }))
    })
  })
});

export const collections = {
  reviews
};