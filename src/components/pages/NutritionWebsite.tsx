"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { pageview } from "@/lib/gtag";

const NutritionWebsite = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    pageview(window.location.pathname);
  }, []);

  const restaurants = [
    {
      name: "Everything!",
      description: "All items Nutrition Guide",
      image: "/images/all.png",
      pdfFile: "all.pdf",
      link: "generic",
    },
    {
      name: "Starbucks Menu Guide",
      description: "Complete Starbucks Nutrition Breakdown",
      image: "/images/starbucks.png",
      pdfFile: "starbucks.pdf",
      link: "starbucks",
    },
    {
      name: "McDonalds Menu Guide",
      description: "Full McDonalds Menu Nutrition Information",
      image: "/images/mcd.png",
      pdfFile: "mcdonalds.pdf",
      link: "mcdonalds",
    },
    {
      name: "Create your own subway",
      description: "Subway Nutrition Guide",
      image: "/images/sub.png",
      pdfFile: "subway.pdf",
      link: "subway",
    },
    {
      name: "California Burrito",
      description: "California Burrito Nutrition Guide",
      image: "/images/cali.png",
      pdfFile: "california-burrito.pdf",
      link: "california-burrito",
    },
    {
      name: "Pizza Hut Nutrition",
      description: "Pizza Hut Nutrition Guide",
      image: "/images/pizza-hut.png",
      pdfFile: "pizza-hut.pdf",
      link: "pizza-hut",
    },
    {
      name: "KFC Menu Breakdown",
      description: "KFC Menu Nutrition Guide",
      image: "/images/kfc.png",
      pdfFile: "kfc.pdf",
      link: "kfc",
    },
    {
      name: "Taco Bell Guide",
      description: "Taco Bell Nutrition Information",
      image: "/images/taco-bell.png",
      pdfFile: "taco-bell.pdf",
      link: "taco-bell",
    },
    {
      name: "Burger King",
      description: "Burger King Nutrition Guide",
      image: "/images/burger-king.png",
      pdfFile: "burger-king.pdf",
      link: "burger-king",
    },
    {
      name: "Dominos Pizza Guide",
      description: "Dominos Pizza Menu Nutrition",
      image: "/images/domino.png",
      pdfFile: "dominoes.pdf",
      link: "dominoes",
    },
    {
      name: "Faasos Menu Guide",
      description: "Faasos Menu Nutrition Guide",
      image: "/images/faasos.png",
      pdfFile: "faasos.pdf",
      link: "faasos",
    },
    {
      name: "Wow! Momo Analysis",
      description: "Wow! Momo Nutrition Guide",
      image: "/images/wow-momo.png",
      pdfFile: "wow-momo.pdf",
      link: "wow-momos",
    },
  ];

  // Filter restaurants based on search query
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Fast Food & General Nutrition Guides
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
            Your trusted companion for making smarter dining choices. We provide
            detailed nutrition breakdowns for popular restaurant chains across
            India, helping you stay on track with your health goals while
            enjoying your favorite meals. No restrictions, just informed
            decisions.
          </p>
        </div>
      </div>

      {/* Search Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 align-center flex items-center justify-center">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-fit h-64 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                <a
                  href={`/${restaurant.link}`}
                  className="inline-block bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300"
                >
                  View
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
