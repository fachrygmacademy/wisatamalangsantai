import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
    }),
});

const doctors = defineCollection({
  loader: glob({ base: "./src/content/doctors", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      specialty: z.string(),
      description: z.string(),
      experience: z.string().optional(),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      image: image(),
      featured: z.boolean().default(false),
      socials: z
        .object({
          linkedin: z.string().url().optional(),
          twitter: z.string().url().optional(),
          facebook: z.string().url().optional(),
        })
        .optional(),
    }),
});

const kulinerCollection = defineCollection({
  type: 'content', // atau 'data' jika menggunakan JSON/YAML
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.enum(['Legendaris', 'Cafe & Nongkrong', 'Makanan Berat', 'Jajanan', 'Oleh-oleh']),
    priceRange: z.string(), // Contoh: "Rp 15.000 - Rp 35.000"
    location: z.string(),   // Contoh: "Jl. Stasiun Kota Baru, Malang"
    rating: z.number().min(1).max(5),
    featured: z.boolean().default(false),
    publishDate: z.date(),
  }),
});

const destinasiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(), // Bisa menggunakan /img/waterfall.jpg atau /img/jatimpark.jpg
    category: z.enum([
      'Wisata Alam', 
      'Taman Hiburan', 
      'Wisata Sejarah', 
      'Wisata Edukasi', 
      'Pusat Oleh-oleh'
    ]),
    location: z.string(),   // Contoh: "Batu, Malang Raya"
    ticketPrice: z.string(),// Contoh: "Rp 35.000 / orang"
    openHours: z.string(),  // Contoh: "08:00 - 17:00 WIB"
    rating: z.number().min(1).max(5),
    featured: z.boolean().default(false),
    publishDate: z.date(),
  }),
});

export const collections = {
  blog,
  services,
  doctors,
  'kuliner': kulinerCollection,
  'destinasi': destinasiCollection,
};
