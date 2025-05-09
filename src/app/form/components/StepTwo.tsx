// /form/stepTwo.tsx
'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { ArrowLeft, ArrowRight } from "lucide-react";

// Step Two schema
export const stepTwoSchema = z.object({
  street: z.string().min(1, 'Street Address is required'),
  city: z.string().min(1, 'City is required'),
  zip: z
    .string()
    .min(5, 'Zip Code must be at least 5 digits')
    .regex(/^\d+$/, 'Zip Code must be numeric'),
});

export type StepTwoData = z.infer<typeof stepTwoSchema>;

type Props = {
  defaultValues: StepTwoData;
  onNext: (data: StepTwoData) => void;
  onBack: () => void;
};

export default function StepTwo({ defaultValues, onNext, onBack }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<StepTwoData>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues,
  });

  const onSubmit = (data: StepTwoData) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
      <div>
        <label>Street Address</label>
        <Input {...register('street')} />
        {errors.street && <p className='text-red-700 mt-1 text-xs'>{errors.street.message}</p>}
      </div>
      <div>
        <label>City</label>
        <Input {...register('city')} />
        {errors.city && <p className='text-red-700 mt-1 text-xs'>{errors.city.message}</p>}
      </div>
      <div>
        <label>Zip Code</label>
        <Input {...register('zip')} />
        {errors.zip && <p className='text-red-700 mt-1 text-xs'>{errors.zip.message}</p>}
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
