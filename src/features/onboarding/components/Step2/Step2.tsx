import React from 'react';

type Step2Props = {
  onNext: () => void;
  onPrev: () => void;
};

export const Step2: React.FC<Step2Props> = ({ onNext, onPrev }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>Step 2</h2>
      <h3>Match your Aesthetic</h3>
      <video className="h-[550px] w-[250px]" controls>
        <source src="/videos/240515_web2web_video2_v01.mp4" type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      <div className="flex justify-between">
        <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg">
          Back
        </button>
        <button onClick={onNext} className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};
