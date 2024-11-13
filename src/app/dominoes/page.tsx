"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

const crustInfo = [
  { 
    name: "New Hand Tossed", 
    key: "nht",
    description: "Classic crust",
    color: "bg-blue-50 border-blue-200"
  },
  { 
    name: "Fresh Pan", 
    key: "pan",
    description: "Thick crust",
    color: "bg-blue-100 border-blue-300"
  },
  { 
    name: "Thin Crust", 
    key: "thin",
    description: "Crispy thin",
    color: "bg-blue-200 border-blue-400"
  },
  { 
    name: "Cheese Burst", 
    key: "burst",
    description: "Stuffed with cheese",
    color: "bg-blue-300 border-blue-500"
  }
];

const pizzaData = {
  "nht": [
    {
      "name": "Margherita",
      "servingSize": "Regular (4 slices)",
      "calories": 688,
      "protein": 24,
      "carbs": 88,
      "fat": 26
    },
    {
      "name": "Cheese n Corn",
      "servingSize": "Regular (4 slices)",
      "calories": 709,
      "protein": 24,
      "carbs": 92,
      "fat": 26
    },
    {
      "name": "Farmhouse",
      "servingSize": "Regular (4 slices)",
      "calories": 751,
      "protein": 26,
      "carbs": 94,
      "fat": 28
    },
    {
      "name": "Pepperoni",
      "servingSize": "Regular (4 slices)",
      "calories": 788,
      "protein": 32,
      "carbs": 88,
      "fat": 32
    },
    {
      "name": "Chicken Golden Delight",
      "servingSize": "Regular (4 slices)",
      "calories": 802,
      "protein": 36,
      "carbs": 88,
      "fat": 34
    }
  ],
  "pan": [
    {
      "name": "Margherita",
      "servingSize": "Regular (4 slices)",
      "calories": 722,
      "protein": 27,
      "carbs": 88,
      "fat": 28
    },
    {
      "name": "Cheese n Corn",
      "servingSize": "Regular (4 slices)",
      "calories": 744,
      "protein": 27,
      "carbs": 93,
      "fat": 29
    },
    {
      "name": "Farmhouse",
      "servingSize": "Regular (4 slices)",
      "calories": 786,
      "protein": 29,
      "carbs": 95,
      "fat": 31
    },
    {
      "name": "Pepperoni",
      "servingSize": "Regular (4 slices)",
      "calories": 823,
      "protein": 35,
      "carbs": 89,
      "fat": 35
    },
    {
      "name": "Chicken Golden Delight",
      "servingSize": "Regular (4 slices)",
      "calories": 837,
      "protein": 39,
      "carbs": 89,
      "fat": 37
    }
  ],
  "thin": [
    {
      "name": "Margherita",
      "servingSize": "Regular (4 slices)",
      "calories": 440,
      "protein": 17,
      "carbs": 50,
      "fat": 19
    },
    {
      "name": "Cheese n Corn",
      "servingSize": "Regular (4 slices)",
      "calories": 461,
      "protein": 17,
      "carbs": 54,
      "fat": 20
    },
    {
      "name": "Farmhouse",
      "servingSize": "Regular (4 slices)",
      "calories": 503,
      "protein": 19,
      "carbs": 56,
      "fat": 22
    },
    {
      "name": "Pepperoni",
      "servingSize": "Regular (4 slices)",
      "calories": 540,
      "protein": 25,
      "carbs": 50,
      "fat": 26
    },
    {
      "name": "Chicken Golden Delight",
      "servingSize": "Regular (4 slices)",
      "calories": 554,
      "protein": 29,
      "carbs": 50,
      "fat": 28
    }
  ],
  "burst": [
    {
      "name": "Margherita",
      "servingSize": "Regular (4 slices)",
      "calories": 899,
      "protein": 31,
      "carbs": 106,
      "fat": 38
    },
    {
      "name": "Cheese n Corn",
      "servingSize": "Regular (4 slices)",
      "calories": 921,
      "protein": 32,
      "carbs": 111,
      "fat": 38
    },
    {
      "name": "Farmhouse",
      "servingSize": "Regular (4 slices)",
      "calories": 963,
      "protein": 34,
      "carbs": 113,
      "fat": 40
    },
    {
      "name": "Pepperoni",
      "servingSize": "Regular (4 slices)",
      "calories": 1000,
      "protein": 40,
      "carbs": 107,
      "fat": 44
    },
    {
      "name": "Chicken Golden Delight",
      "servingSize": "Regular (4 slices)",
      "calories": 1014,
      "protein": 44,
      "carbs": 107,
      "fat": 46
    }
  ]
};

const NutritionTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrust, setSelectedCrust] = useState('nht');

  const filteredData = pizzaData[selectedCrust].filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isVeg = (name) => {
    return !name.toLowerCase().includes('chicken') && 
           !name.toLowerCase().includes('non-veg') &&
           !name.toLowerCase().includes('pepperoni');
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-[#006491] to-[#0085C5] text-white">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6" />
          <CardTitle className="text-xl md:text-2xl">Dominos Pizza Nutrition Information</CardTitle>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2">
          {crustInfo.map((crust) => (
            <div 
              key={crust.key} 
              onClick={() => setSelectedCrust(crust.key)}
              className={`relative overflow-hidden rounded-xl border-2 ${crust.color} 
                         transition-all duration-300 hover:scale-105 cursor-pointer
                         ${selectedCrust === crust.key ? 'ring-2 ring-blue-600 scale-105' : ''}
                         shadow-md`}
            >
              <div className="p-2 md:p-4">
                <div className="font-bold text-sm md:text-base text-blue-900">{crust.name}</div>
                <div className="mt-1 text-xs md:text-sm text-blue-800">{crust.description}</div>
              </div>
              {selectedCrust === crust.key && (
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Input
              placeholder="Search pizzas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm pl-10 border-2 border-blue-400 focus:border-blue-500 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5 text-blue-500">
              <Utensils className="h-5 w-5" />
            </span>
          </div>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-[#006491] text-white">
                <th className="text-left p-4 font-medium">Pizza</th>
                <th className="text-left p-4 font-medium">Serving Size</th>
                <th className="text-right p-4 font-medium">Calories</th>
                <th className="text-right p-4 font-medium">Protein (g)</th>
                <th className="text-right p-4 font-medium">Carbs (g)</th>
                <th className="text-right p-4 font-medium">Fat (g)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr 
                  key={index}
                  className="hover:bg-blue-50 transition-colors duration-200 border-t border-gray-200"
                >
                  <td className={`p-4 font-medium ${isVeg(item.name) ? "text-green-600" : "text-red-600"}`}>
                    {item.name}
                  </td>
                  <td className="p-4 font-medium text-blue-800">
                    {item.servingSize}
                  </td>
                  <td className="p-4 text-right">{item.calories}</td>
                  <td className="p-4 text-right">{item.protein}</td>
                  <td className="p-4 text-right">{item.carbs}</td>
                  <td className="p-4 text-right">{item.fat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-gray-200 p-4 hover:bg-blue-50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className={`font-bold ${isVeg(item.name) ? "text-green-600" : "text-red-600"}`}>
                  {item.name}
                </h3>
                <span className="text-sm text-blue-800 font-medium">{item.servingSize}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-xs text-gray-600">Calories</div>
                  <div className="font-bold text-blue-900">{item.calories}</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-xs text-gray-600">Protein</div>
                  <div className="font-bold text-blue-900">{item.protein}g</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-xs text-gray-600">Carbs</div>
                  <div className="font-bold text-blue-900">{item.carbs}g</div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Fat</span>
                  <span className="font-bold text-blue-900">{item.fat}g</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionTable;