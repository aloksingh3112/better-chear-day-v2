"use client";
import React, { useState, useMemo, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle, Search, X } from "lucide-react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { menuDataRaw } from "@/data/mcd";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const processMenuData = (rawData) => {
  return rawData
    .filter(
      (item) =>
        item["Menu Items"] &&
        !item["Menu Items"].includes("MENU") &&
        !item["Menu Items"].includes("contribution") &&
        !item["Menu Items"].includes("An average") &&
        !item["Menu Items"].includes("RDA")
    )
    .map((item) => ({
      name: item["Menu Items"],
      servingSize: item["Per Serve Size"],
      calories: parseFloat(item["Energy (kCal)"]) || 0,
      protein: parseFloat(item['"Protein (g)"']) || 0,
      carbs: parseFloat(item["Total carbohydrate (g)"]) || 0,
      fat: parseFloat(item['"Total fat (g)"']) || 0,
      sodium: parseFloat(item['"Sodium (mg)"']) || 0,
    }));
};

const NutritionTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);
  const [error, setError] = useState(true);

  const menuData = useMemo(() => processMenuData(menuDataRaw), []);
  const filteredData = useMemo(
    () =>
      menuData.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      ),
    [menuData, debouncedSearch]
  );

  return (
    <div className="w-full max-w-3xl mx-auto bg-white">
      {/* Header */}
      <div className="bg-[#DA291C] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-white text-xl font-medium">
            McDonald's Nutrition Information
          </h1>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full pl-12 pr-4 py-2.5 rounded-full border-2 border-[#FFC72C] focus:outline-none focus:border-[#FFC72C]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Nutrition Items */}
      <div className="px-4 pb-4 space-y-7 ">
        {filteredData.map((item, index) => (
          <div key={index} className="mb-6 border p-4 rounded-xl">
            {/* Item Name and Weight */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    item.name.toLowerCase().includes("veg")
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />
                <span className="text-gray-700">{item.name}</span>
              </div>
              <span className="text-gray-400 text-sm">{item.servingSize}</span>
            </div>

            {/* Calories and Protein */}
            <div className="  mb-2">
              <div className="bg-red-50/30 p-3 flex items-center justify-between">
                <div className="text-gray-600 text-sm">Calories</div>
                <div className="text-[#DA291C] text-2xl font-bold">
                  {item.calories}
                </div>
              </div>
            </div>

            {/* Carbs, Fat, Sodium */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-red-50/30 p-3">
                <div className="text-gray-600 text-sm">Carbs</div>
                <div className="text-[#DA291C] text-2xl font-bold">
                  {item.carbs}g
                </div>
              </div>
              <div className="bg-red-50/30 p-3">
                <div className="text-gray-600 text-sm">Fat</div>
                <div className="text-[#DA291C] text-2xl font-bold">
                  {item.fat}g
                </div>
              </div>
              <div className="bg-red-50/30 p-3">
                <div className="text-gray-600 text-sm">Sodium</div>
                <div className="text-[#DA291C] text-2xl font-bold">
                  {item.protein}mg
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="px-4 pb-4">
        <div className=" gap-4 mb-4">
          <div className=" items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span>Vegetarian</span>
          </div>
          <div className=" items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span>Non-Vegetarian</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          Values are based on standard product formulations. Variations may
          occur due to differences in suppliers, ingredient substitutions,
          recipe revisions, and/or preparation methods.
        </p>
      </div>
    </div>
  );
};

export default NutritionTable;
