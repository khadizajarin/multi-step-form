// /form/stepThree.tsx
'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Step Three schema
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

type Props = {
  defaultValues: StepThreeData;
  onBack: () => void;
  onNext: (data: StepThreeData) => void;
};

export default function StepThree({ defaultValues, onBack, onNext }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<StepThreeData>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues,
  });

  const onSubmit = (data: StepThreeData) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
      <div>
        <label>Username</label>
        <input {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <div>
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
