import {defineCollection, z } from "astro:content";

const dogs = defineCollection({
  schema: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    state: z.string(),
    size: z.string(),
    pedigree: z.string(),
    birthDate: z.string(),
    gender: z.string(),
    img: z.object({
      profile: z.string(),
      gallery: z.array(z.string()),
    }),
  })
})

export const collections = { dogs }