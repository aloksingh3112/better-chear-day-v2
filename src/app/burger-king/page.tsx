"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Beef } from "lucide-react";
import { menuDataRaw } from "@/data/burger-king";

const processMenuData = (rawData) => {
  // Skip the header row and the last row (disclaimer)
  return rawData
    .slice(1, -1)
    .filter(
      (item) =>
        item[""] &&
        !item[""].toLowerCase().includes("float") &&
        !item[""].toLowerCase().includes("shake") &&
        !item[""].toLowerCase().includes("sundae") &&
        !item[""].toLowerCase().includes("smoothie") &&
        !item[""].toLowerCase().includes("tea") &&
        !item[""].toLowerCase().includes("pepsi") &&
        !item[""].toLowerCase().includes("mirinda") &&
        !item[""].toLowerCase().includes("7 up") &&
        !item[""].toLowerCase().includes("coffee") &&
        !item[""].toLowerCase().includes("cappuccino") &&
        !item[""].toLowerCase().includes("latte") &&
        !item[""].toLowerCase().includes("ketchup")
    )
    .map((item) => ({
      name: item[""],
      servingSize: item["__1"],
      calories: item["__2"],
      protein: item["__8"],
      carbs: item["__3"],
      fat: item["__5"],
    }));
};

const NutritionTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const menuData = processMenuData(menuDataRaw);

  const filteredData = menuData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isVeg = (name) => {
    return (
      name.toLowerCase().includes("veg") ||
      name.toLowerCase().includes("paneer") ||
      name.toLowerCase().includes("hash brown") ||
      (name.toLowerCase().includes("fries") &&
        !name.toLowerCase().includes("chicken"))
    );
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-[#ED7801] to-[#FF9B3F] text-white">
        <div className="flex items-center gap-2">
          <Beef className="h-6 w-6" />
          <CardTitle className="text-xl md:text-2xl">
            Burger King Nutrition Information
          </CardTitle>
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
                  <td
                    className={`p-4 font-medium ${isVeg(item.name) ? categoryColors["Veg"] : categoryColors["Non-Veg"]}`}
                  >
                    {item.name}
                  </td>
                  <td className="p-4 font-medium text-orange-800">
                    {item.servingSize} g
                  </td>
                  <td className="p-4 text-right">
                    {Number(item.calories).toFixed(1)}
                  </td>
                  <td className="p-4 text-right">
                    {Number(item.protein).toFixed(1)}
                  </td>
                  <td className="p-4 text-right">
                    {Number(item.carbs).toFixed(1)}
                  </td>
                  <td className="p-4 text-right">
                    {Number(item.fat).toFixed(1)}
                  </td>
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
                <h3
                  className={`font-bold ${isVeg(item.name) ? categoryColors["Veg"] : categoryColors["Non-Veg"]}`}
                >
                  {item.name}
                </h3>
                <span className="text-sm text-orange-800 font-medium">
                  {item.servingSize}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <div className="text-xs text-gray-600">Calories</div>
                  <div className="font-bold text-orange-900">
                    {Number(item.calories).toFixed(1)}
                  </div>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <div className="text-xs text-gray-600">Protein</div>
                  <div className="font-bold text-orange-900">
                    {Number(item.protein).toFixed(1)}g
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <div className="text-xs text-gray-600">Carbs</div>
                  <div className="font-bold text-orange-900">
                    {Number(item.carbs).toFixed(1)}g
                  </div>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <div className="text-xs text-gray-600">Fat</div>
                  <div className="font-bold text-orange-900">
                    {Number(item.fat).toFixed(1)}g
                  </div>
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

const categoryColors = {
  Veg: "text-green-600",
  "Non-Veg": "text-red-600",
};

export default NutritionTable;
