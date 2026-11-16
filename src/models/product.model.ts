import { z } from 'zod';

export const ProductSchema = z.object({
    id: z.string().min(1, { message: 'ID is required' }),
    name: z.string().min(1, { message: 'Name is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    price: z.number().positive({ message: 'Price must be a positive number' })
});

export type Product = z.infer<typeof ProductSchema>;