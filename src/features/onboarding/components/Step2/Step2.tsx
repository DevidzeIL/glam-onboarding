import React from 'react';

type Step2Props = {
  onNext: () => void;
  onPrev: () => void;
};

export const Step2: React.FC<Step2Props> = ({ onNext, onPrev }) => {
  return (
    <div>
      <h2>Step 2</h2>
      <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg mr-4">
        Back
      </button>
      <button onClick={onNext} className="bg-blue-500 text-white px-6 py-3 rounded-lg">
        Next
      </button>
    </div>
  );
};
