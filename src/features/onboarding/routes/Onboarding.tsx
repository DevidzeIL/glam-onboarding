import React, { useState } from 'react';
import { Step1, Step2, Step3 } from '../components';

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-gray-50">
      {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onNext={nextStep} onPrev={prevStep} />}
      {step === 3 && <Step3 onPrev={prevStep} />}
    </div>
  );
};
