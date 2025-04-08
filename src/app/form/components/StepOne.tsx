// StepOne.tsx
'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
                <input {...register('fullName')} />
                {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Phone</label>
                <input {...register('phone')} />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <button type="submit">Next</button>
        </form>
    </div>
   
  );
}
