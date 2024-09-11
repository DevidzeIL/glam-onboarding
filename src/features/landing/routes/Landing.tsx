import React from 'react';
import { Link } from 'react-router-dom';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Welcome to Glam Onboarding!</h1>
      <Link to="/onboarding">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Get Started</button>
      </Link>
    </div>
  );
};
