import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto w-full">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Milan Rai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
