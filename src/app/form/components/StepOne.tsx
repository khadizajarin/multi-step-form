// StepOne.tsx
'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { ArrowRight } from "lucide-react";

// Define the schema for Step 1
export const stepOneSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

export type StepOneData = z.infer<typeof stepOneSchema>;

type Props = {
  onNext: (data: StepOneData) => void;
  defaultValues: StepOneData;  // Add defaultValues here
};

export default function StepOne({ onNext, defaultValues }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<StepOneData>({
    resolver: zodResolver(stepOneSchema),
    defaultValues,
  });

  const onSubmit = (data: StepOneData) => {
    onNext(data);
  };

  return (
    <div className=''>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
            <div>
                <label>Full Name</label>
                <Input {...register('fullName')} />
                {errors.fullName && <p className='text-red-700 mt-1 text-xs'>{errors.fullName.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <Input {...register('email')} />
                {errors.email && <p className='text-red-700 mt-1 text-xs'>{errors.email.message}</p>}
            </div>
            <div>
                <label>Phone</label>
                <Input {...register('phone')} />
                {errors.phone && <p className='text-red-700 mt-1 text-xs'>{errors.phone.message}</p>}
            </div>
            <Button type="submit" className="flex items-center gap-2">
                Next
                <ArrowRight className="w-4 h-4" />
            </Button>

        </form>
    </div>
   
  );
}
