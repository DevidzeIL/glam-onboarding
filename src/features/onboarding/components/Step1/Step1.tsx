import React from 'react';

type Step1Props = {
  onNext: () => void;
};

export const Step1: React.FC<Step1Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>Step 1</h2>
      <h3>Welcome to Glam!</h3>
      <video className="h-[550px] w-[250px]" controls>
        <source src="/videos/240515_web2web_video1_v04.mp4" type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      <div className="flex justify-between">
        <button onClick={onNext} className="bg-green-500 text-white px-6 py-3 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};
