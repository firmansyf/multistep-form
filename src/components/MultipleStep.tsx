"use client"

import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

interface FormData {
  name?: string;
  gender?: string;
  description?: string;
  title?: string;
}

const MultistepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} />}
      <div className="mt-4 flex justify-between">
        {step > 1 && <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Previous</button>}
        {step < 2 && <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Next</button>}
        {step === 2 && <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Submit</button>}
      </div>
    </form>
  );
};

export default MultistepForm;
