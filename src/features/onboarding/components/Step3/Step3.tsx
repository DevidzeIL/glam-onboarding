import React from 'react';
import { Link } from 'react-router-dom';

type Step3Props = {
  onPrev: () => void;
};

export const Step3: React.FC<Step3Props> = ({ onPrev }) => {
  return (
    <div>
      <h2>Step 3</h2>
      <button onClick={onPrev} className="bg-gray-500 text-white px-6 py-3 rounded-lg mr-4">
        Back
      </button>
      <Link to="/">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg">Complete</button>
      </Link>
    </div>
  );
};
