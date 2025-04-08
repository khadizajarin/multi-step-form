"use client";
import { useState, useEffect } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import FormSummary from './components/FormSummary';
import { StepOneData } from './components/StepOne';
import { StepTwoData } from './components/StepTwo';
import { StepThreeData } from './components/StepThree';
import Button from './ui/Button';

export default function FormPage() {
  const [step, setStep] = useState(1);
  
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Initialize formData with the shape of each step's data
  const [formData, setFormData] = useState<StepOneData & StepTwoData & StepThreeData>({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zip: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  // Update the dark mode class when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', JSON.stringify(true));  // Save dark mode preference
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', JSON.stringify(false));  // Save light mode preference
    }
  }, [darkMode]);

  const nextStep = (data: any) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Submitted:", formData);
    // optional: trigger mutation via React Query
  };

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
}

  return (
    <div className="max-w-xl mx-auto px-4 pt-4 w-full bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors rounded-lg">
      {/* Dark Mode Toggle */}
      <Button
        className="p-2 rounded bg-blue-500 text-white dark:bg-gray-700 dark:text-white mb-4"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </Button>

      {step === 1 && <StepOne onNext={nextStep} defaultValues={formData} />}
      {step === 2 && <StepTwo onNext={nextStep} onBack={prevStep} defaultValues={formData} />}
      {step === 3 && <StepThree onNext={nextStep} onBack={prevStep} defaultValues={formData} />}
      {step === 4 && <FormSummary data={formData} onBack={prevStep} onSubmit={handleSubmit} />}
    </div>
  );
}
