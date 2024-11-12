"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

const menuData = [
  {
    "name": "Burrito Habanero - Veg",
    "servingSize": "203g",
    "calories": 407.7,
    "protein": 11.7,
    "carbs": 64.9,
    "fat": 10.7
  },
  {
    "name": "Burrito Habanero - Chicken",
    "servingSize": "218g",
    "calories": 450.4,
    "protein": 18.1,
    "carbs": 67.6,
    "fat": 11.9
  },
  {
    "name": "Naked Chicken Taco",
    "servingSize": "192g",
    "calories": 478.1,
    "protein": 18.1,
    "carbs": 50.0,
    "fat": 22.9
  },
  {
    "name": "Mini Cheese Quesadilla",
    "servingSize": "122g",
    "calories": 254.3,
    "protein": 15.7,
    "carbs": 22.6,
    "fat": 10.8
  },
  {
    "name": "Melted Cheese Quesadilla Veg",
    "servingSize": "201g",
    "calories": 489.3,
    "protein": 22.0,
    "carbs": 44.5,
    "fat": 22.6
  },
  {
    "name": "Melted Cheese Quesadilla Non Veg",
    "servingSize": "197g",
    "calories": 484.6,
    "protein": 29.2,
    "carbs": 41.4,
    "fat": 21.6
  },
  {
    "name": "Crunchy Wheat Taco Veg",
    "servingSize": "108g",
    "calories": 255.5,
    "protein": 4.3,
    "carbs": 28.7,
    "fat": 13.9
  },
  {
    "name": "Crunchy Wheat Taco Non Veg",
    "servingSize": "114g",
    "calories": 277.4,
    "protein": 9.4,
    "carbs": 27.9,
    "fat": 14.0
  },
  {
    "name": "Chicken Seekh Kebab Taco",
    "servingSize": "149g",
    "calories": 284.8,
    "protein": 10.0,
    "carbs": 29.9,
    "fat": 11.5
  },
  {
    "name": "7 Layer Burrito Veg",
    "servingSize": "352g",
    "calories": 610.7,
    "protein": 15.3,
    "carbs": 86.9,
    "fat": 21.9
  },
  {
    "name": "7 Layer Burrito Non Veg",
    "servingSize": "408g",
    "calories": 659.8,
    "protein": 30.9,
    "carbs": 86.6,
    "fat": 21.0
  },
  {
    "name": "Regular Rice Bowl Veg",
    "servingSize": "446g",
    "calories": 820.5,
    "protein": 15.5,
    "carbs": 136.0,
    "fat": 23.8
  },
  {
    "name": "Regular Rice Bowl Non Veg",
    "servingSize": "471g",
    "calories": 641.1,
    "protein": 20.5,
    "carbs": 105.8,
    "fat": 15.7
  },
  {
    "name": "Cheesy Fries",
    "servingSize": "134g",
    "calories": 316.9,
    "protein": 7.6,
    "carbs": 42.7,
    "fat": 12.8
  },
  {
    "name": "Cheesy Seasoned Nachos",
    "servingSize": "113g",
    "calories": 311.6,
    "protein": 6.9,
    "carbs": 35.6,
    "fat": 15.7
  },
  {
    "name": "Chicken Nuggets with Dip",
    "servingSize": "143g",
    "calories": 440.4,
    "protein": 15.7,
    "carbs": 27.2,
    "fat": 29.9
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
    // First check for explicit non-veg terms
    if (name.toLowerCase().includes('chicken') || 
        name.toLowerCase().includes('non veg')) {
        return false;
    }
    
    // Then check for veg terms
    return name.toLowerCase().includes('veg');
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-[#702082] to-[#8B2B93] text-white">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6" />
          <CardTitle className="text-2xl">Taco Bell Nutrition Information</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Input
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm pl-10 border-2 border-purple-400 focus:border-purple-500 focus:ring-purple-500"
            />
            <span className="absolute left-3 top-2.5 text-purple-500">
              <Utensils className="h-5 w-5" />
            </span>
          </div>
        </div>
        
        <div className="rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#702082] text-white hover:bg-[#702082]/90">
                <TableHead className="w-[30%] text-white">Item</TableHead>
                <TableHead className="w-[15%] text-white">Serving Size</TableHead>
                <TableHead className="text-right text-white">Calories</TableHead>
                <TableHead className="text-right text-white">Protein (g)</TableHead>
                <TableHead className="text-right text-white">Carbs (g)</TableHead>
                <TableHead className="text-right text-white">Fat (g)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow 
                  key={index}
                  className="hover:bg-purple-50 transition-colors duration-200"
                >
                  <TableCell className={`font-medium ${isVeg(item.name) ? categoryColors["Veg"] : categoryColors["Non-Veg"]}`}>
                    {item.name}
                  </TableCell>
                  <TableCell className="font-medium text-purple-800">
                    {item.servingSize}
                  </TableCell>
                  <TableCell className="text-right">{item.calories}</TableCell>
                  <TableCell className="text-right">{item.protein}</TableCell>
                  <TableCell className="text-right">{item.carbs}</TableCell>
                  <TableCell className="text-right">{item.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionTable;