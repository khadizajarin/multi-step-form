// /form/schemas/stepThreeSchema.ts
import { z } from 'zod';

export const stepThreeSchema = z
  .object({
    username: z.string().min(4, 'Username must be at least 4 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type StepThreeData = z.infer<typeof stepThreeSchema>;
