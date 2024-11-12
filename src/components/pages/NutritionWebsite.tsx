import React from 'react';
import { Search } from 'lucide-react';

const NutritionWebsite = () => {
  const restaurants = [
    {
      name: "Starbucks Menu Guide",
      description: "Complete Starbucks Nutrition Breakdown",
      image: "/images/starbucks.png",
      pdfFile: "starbucks.pdf"
    },
    {
      name: "McDonalds Menu Guide",
      description: "Full McDonalds Menu Nutrition Information",
      image: "/images/mcd.png",
      pdfFile: "mcdonalds.pdf"
    },
    {
      name: "Pizza Hut Nutrition",
      description: "Pizza Hut Nutrition Guide",
      image: "/images/pizza-hut.png",
      pdfFile: "pizza-hut.pdf"
    },
    {
      name: "KFC Menu Breakdown",
      description: "KFC Menu Nutrition Guide",
      image: "/images/kfc.png",
      pdfFile: "kfc.pdf"
    },
    {
      name: "Taco Bell Guide",
      description: "Taco Bell Nutrition Information",
      image: "/images/taco-bell.png",
      pdfFile: "taco-bell.pdf"
    },
    {
      name: "Burger King",
      description: "Burger King Nutrition Guide",
      image: "/images/burger-king.png",
      pdfFile: "burger-king.pdf"
    },
    {
      name: "Dominos Pizza Guide",
      description: "Dominos Pizza Menu Nutrition",
      image: "/images/domino.png",
      pdfFile: "dominoes.pdf"
    },
    {
      name: "Faasos Menu Guide",
      description: "Faasos Menu Nutrition Guide",
      image: "/images/faasos.png",
      pdfFile: "faasos.pdf"
    },
    {
      name: "Wow! Momo Analysis",
      description: "Wow! Momo Nutrition Guide",
      image: "/images/wow-momo.png",
      pdfFile: "wow-momo.pdf"
    }
  ];

  return (
    <>
           {/* Hero Section */}
           <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Fast Food & General Nutrition Guides
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
          Your trusted companion for making smarter dining choices. We provide detailed nutrition breakdowns for popular restaurant chains across India, helping you stay on track with your health goals while enjoying your favorite meals. No restrictions, just informed decisions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 align-center flex items-center justify-center">
                <img 
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-fit h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {restaurant.description}
                </p>
                <a 
                  href={`/guides/${restaurant.pdfFile}`}
                  className="inline-block bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300"
                >
                  Download Guide
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
  );
};

export default NutritionWebsite;