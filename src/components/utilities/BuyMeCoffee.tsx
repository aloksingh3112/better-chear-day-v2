import React from 'react';
import { Coffee } from 'lucide-react';

const BuyMeCoffeeButton = () => {
  return (
    <a
      href="https://buymeacoffee.com/bettercheatday"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:from-pink-600 hover:to-pink-700"
    >
      <Coffee 
        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" 
        strokeWidth={2.5}
      />
      <span className="font-medium">Buy me a coffee</span>
    </a>
  );
};

export default BuyMeCoffeeButton;