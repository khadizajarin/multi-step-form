// /form/schemas/stepTwoSchema.ts
import { z } from 'zod';

export const stepTwoSchema = z.object({
  street: z.string().min(1, 'Street Address is required'),
  city: z.string().min(1, 'City is required'),
  zip: z
    .string()
    .min(5, 'Zip Code must be at least 5 digits')
    .regex(/^\d+$/, 'Zip Code must be numeric'),
});

export type StepTwoData = z.infer<typeof stepTwoSchema>;
