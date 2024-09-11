import React from 'react';

type Step1Props = {
  onNext: () => void;
};

export const Step1: React.FC<Step1Props> = ({ onNext }) => {
  return (
    <div>
      <h2>Step 1</h2>
      <button onClick={onNext} className="bg-green-500 text-white px-6 py-3 rounded-lg">
        Next
      </button>
    </div>
  );
};
