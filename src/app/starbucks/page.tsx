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
import { Coffee } from "lucide-react";
import {menuData} from '../../data/starbucks'

const sizesInfo = [
  { 
    name: "Short", 
    volume: "237ml (8 fl oz)",
    icon: "☕",
    color: "bg-amber-50 border-amber-200"
  },
  { 
    name: "Tall", 
    volume: "354ml (12 fl oz)",
    icon: "☕",
    color: "bg-amber-100 border-amber-300"
  },
  { 
    name: "Grande", 
    volume: "473ml (16 fl oz)",
    icon: "☕",
    color: "bg-amber-200 border-amber-400"
  },
  { 
    name: "Venti", 
    volume: "591ml (20 fl oz)",
    icon: "☕",
    color: "bg-amber-300 border-amber-500"
  }
];

const NutritionTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = menuData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="w-full bg-white">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="flex items-center gap-2">
          <Coffee className="h-6 w-6" />
          <CardTitle className="text-xl md:text-2xl">Starbucks Nutrition Information</CardTitle>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2">
          {sizesInfo.map((size) => (
            <div 
              key={size.name} 
              className={`relative overflow-hidden rounded-xl border-2 ${size.color} 
                         transition-all duration-300 hover:scale-105 cursor-pointer
                         shadow-md`}
            >
              <div className="p-2 md:p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl">{size.icon}</span>
                  <span className="font-bold text-sm md:text-xl text-green-900">{size.name}</span>
                </div>
                <div className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-green-800">{size.volume}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="relative">
            <Input
              placeholder="Search beverages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm pl-10 border-2 border-green-800 focus:border-green-900 focus:ring-green-900"
            />
            <span className="absolute left-3 top-2.5 text-green-800">
              <Coffee className="h-5 w-5" />
            </span>
          </div>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-green-800 text-white hover:bg-green-800/90">
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
                  className="hover:bg-green-50 transition-colors duration-200"
                >
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="font-medium text-green-800">
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

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-gray-200 p-4 hover:bg-green-50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-green-900">{item.name}</h3>
                <span className="text-sm text-green-800 font-medium">{item.servingSize}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-600">Calories</div>
                  <div className="font-bold text-green-900">{item.calories}</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-600">Protein</div>
                  <div className="font-bold text-green-900">{item.protein}g</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-600">Carbs</div>
                  <div className="font-bold text-green-900">{item.carbs}g</div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Fat</span>
                  <span className="font-bold text-green-900">{item.fat}g</span>
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