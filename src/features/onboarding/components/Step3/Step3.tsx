import React from 'react';
import { Link } from 'react-router-dom';

type Step3Props = {
  onPrev: () => void;
};

export const Step3: React.FC<Step3Props> = ({ onPrev }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>Step 3</h2>
      <h3>Explore 100+ Styles</h3>
      <video className="h-[550px] w-[250px]" controls>
        <source src="/videos/240515_web2web_video3_v01.mp4" type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
      <div className="flex justify-between">
        <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg mr-4">
          Back
        </button>
        <Link to="/">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg">Complete</button>
        </Link>
      </div>
    </div>
  );
};
