'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
        <Input {...register('username')} />
        {errors.username && <p className='text-red-700 mt-1 text-xs'>{errors.username.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <Input
          type="password"
          {...register('password')}
          showPasswordToggle // Add the toggle feature
        />
        {errors.password && <p className='text-red-700 mt-1 text-xs'>{errors.password.message}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <Input
          type="password"
          {...register('confirmPassword')}
          showPasswordToggle // Add the toggle feature
        />
        {errors.confirmPassword && <p className='text-red-700 mt-1 text-xs'>{errors.confirmPassword.message}</p>}
      </div>
      <div className='flex space-x-4'>
        <Button type="button" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
        </Button>

        <Button type="submit" className="flex items-center gap-2">
            Next
            <ArrowRight className="w-4 h-4" />
    </Button>

      </div>
    </form>
  );
}
