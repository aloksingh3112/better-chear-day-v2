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
    }
  ]
};

// Add more pizza data for each crust type...

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
          <CardTitle className="text-2xl">Dominos Pizza Nutrition Information</CardTitle>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
          {crustInfo.map((crust) => (
            <div 
              key={crust.key} 
              onClick={() => setSelectedCrust(crust.key)}
              className={`relative overflow-hidden rounded-xl border-2 ${crust.color} 
                         transition-all duration-300 hover:scale-105 cursor-pointer
                         ${selectedCrust === crust.key ? 'ring-2 ring-blue-600 scale-105' : ''}
                         shadow-md`}
            >
              <div className="p-4">
                <div className="font-bold text-blue-900">{crust.name}</div>
                <div className="mt-1 text-sm text-blue-800">{crust.description}</div>
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
        
        <div className="rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#006491] text-white hover:bg-[#006491]/90">
                <TableHead className="w-[30%] text-white">Pizza</TableHead>
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
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <TableCell className={`font-medium ${isVeg(item.name) ? "text-green-600" : "text-red-600"}`}>
                    {item.name}
                  </TableCell>
                  <TableCell className="font-medium text-blue-800">
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
