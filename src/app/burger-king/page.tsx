

"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Beef } from "lucide-react";

const menuData = [
  {
    "name": "Crispy Veg",
    "servingSize": "138g",
    "calories": 426.7,
    "protein": 8.4,
    "carbs": 52.0,
    "fat": 20.6
  },
  {
    "name": "BK Veggie",
    "servingSize": "137g",
    "calories": 404.1,
    "protein": 8.6,
    "carbs": 53.2,
    "fat": 17.4
  },
  {
    "name": "Veg Chilli Cheese",
    "servingSize": "149g",
    "calories": 422.6,
    "protein": 11.6,
    "carbs": 50.6,
    "fat": 19.3
  },
  {
    "name": "Paneer King",
    "servingSize": "165g",
    "calories": 525.8,
    "protein": 14.0,
    "carbs": 67.1,
    "fat": 22.4
  },
  {
    "name": "Veg Supreme",
    "servingSize": "147g",
    "calories": 374.4,
    "protein": 11.5,
    "carbs": 45.1,
    "fat": 16.5
  },
  {
    "name": "Veg Whopper",
    "servingSize": "296g",
    "calories": 749.0,
    "protein": 16.0,
    "carbs": 100.6,
    "fat": 31.4
  },
  {
    "name": "Veg Wrap",
    "servingSize": "155g",
    "calories": 422.4,
    "protein": 8.2,
    "carbs": 58.7,
    "fat": 17.2
  },
  {
    "name": "BK Grill",
    "servingSize": "118g",
    "calories": 316.1,
    "protein": 14.5,
    "carbs": 34.9,
    "fat": 13.1
  },
  {
    "name": "Chicken Tandoori Grill",
    "servingSize": "159g",
    "calories": 389.7,
    "protein": 22.4,
    "carbs": 39.1,
    "fat": 16.0
  },
  {
    "name": "Chicken Chilli Cheese",
    "servingSize": "155g",
    "calories": 401.0,
    "protein": 16.5,
    "carbs": 47.3,
    "fat": 16.2
  },
  {
    "name": "Chicken Whopper",
    "servingSize": "287g",
    "calories": 662.0,
    "protein": 38.8,
    "carbs": 60.3,
    "fat": 29.8
  },
  {
    "name": "Mutton Whopper",
    "servingSize": "287g",
    "calories": 624.2,
    "protein": 30.4,
    "carbs": 71.0,
    "fat": 24.3
  },
  {
    "name": "Chicken Fries (5 Pcs)",
    "servingSize": "65g",
    "calories": 206.0,
    "protein": 10.9,
    "carbs": 19.9,
    "fat": 9.2
  },
  {
    "name": "Chicken Wings Fried (4Pcs)",
    "servingSize": "155g",
    "calories": 332.8,
    "protein": 35.2,
    "carbs": 1.8,
    "fat": 20.5
  },
  {
    "name": "Veg Strips (5 Pcs)",
    "servingSize": "87g",
    "calories": 228.5,
    "protein": 4.5,
    "carbs": 27.9,
    "fat": 10.9
  },
  {
    "name": "Hash Brown",
    "servingSize": "60g",
    "calories": 158.2,
    "protein": 1.7,
    "carbs": 19.7,
    "fat": 8.1
  },
  {
    "name": "Fries Regular",
    "servingSize": "74g",
    "calories": 263.9,
    "protein": 4.4,
    "carbs": 37.7,
    "fat": 10.6
  },
  {
    "name": "Medium Fries",
    "servingSize": "114g",
    "calories": 406.6,
    "protein": 6.8,
    "carbs": 58.1,
    "fat": 16.3
  },
  {
    "name": "King Fries",
    "servingSize": "150g",
    "calories": 535.0,
    "protein": 8.9,
    "carbs": 76.5,
    "fat": 21.5
  },
  {
    "name": "Cheesy Fries",
    "servingSize": "154g",
    "calories": 460.9,
    "protein": 8.1,
    "carbs": 56.2,
    "fat": 22.6
  }
];

const categoryColors = {
  "Veg": "text-green-600",
  "Non-Veg": "text-red-600"
};

const NutritionTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = menuData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isVeg = (name) => {
    const nonVegExceptions = [
      'chicken fries',
      'cheesy chicken fries'
    ];
    
    if (nonVegExceptions.some(item => 
        name.toLowerCase().includes(item.toLowerCase()))) {
        return false;
    }
    
    return name.toLowerCase().includes('veg') || 
           name.toLowerCase().includes('paneer') ||
           name.toLowerCase().includes('fries') ||
           name.toLowerCase().includes('hash brown');
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-[#ED7801] to-[#FF9B3F] text-white">
        <div className="flex items-center gap-2">
          <Beef className="h-6 w-6" />
          <CardTitle className="text-xl md:text-2xl">Burger King Nutrition Information</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Input
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm pl-10 border-2 border-orange-400 focus:border-orange-500 focus:ring-orange-500"
            />
            <span className="absolute left-3 top-2.5 text-orange-500">
              <Beef className="h-5 w-5" />
            </span>
          </div>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-[#ED7801] text-white">
                <th className="text-left p-4 font-medium">Item</th>
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
                  className="hover:bg-orange-50 transition-colors duration-200 border-t border-gray-200"
                >
                  <td className={`p-4 font-medium ${isVeg(item.name) ? categoryColors["Veg"] : categoryColors["Non-Veg"]}`}>
                    {item.name}
                  </td>
                  <td className="p-4 font-medium text-orange-800">
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
              className="rounded-lg border-2 border-gray-200 p-4 hover:bg-orange-50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className={`font-bold ${isVeg(item.name) ? categoryColors["Veg"] : categoryColors["Non-Veg"]}`}>
                  {item.name}
                </h3>
                <span className="text-sm text-orange-800 font-medium">{item.servingSize}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <div className="text-xs text-gray-600">Calories</div>
                  <div className="font-bold text-orange-900">{item.calories}</div>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <div className="text-xs text-gray-600">Protein</div>
                  <div className="font-bold text-orange-900">{item.protein}g</div>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <div className="text-xs text-gray-600">Carbs</div>
                  <div className="font-bold text-orange-900">{item.carbs}g</div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Fat</span>
                  <span className="font-bold text-orange-900">{item.fat}g</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-600"></span>
            <span>Vegetarian</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600"></span>
            <span>Non-Vegetarian</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionTable;