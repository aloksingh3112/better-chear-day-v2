"use client";

import React, { useState, useMemo, useCallback } from "react";
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
import { Search, Leaf } from "lucide-react";
import { useVirtualizer } from "@tanstack/react-virtual";
import debounce from "lodash/debounce";
import genericData from "@/data/genericDataSet";

const NutritionDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  const nutritionData = useMemo(
    () =>
      genericData.map((item) => ({
        ...item,
        food_calories: parseFloat(item.food_calories) || 0,
        food_carbs: parseFloat(item.food_carbs) || 0,
        food_fats: parseFloat(item.food_fats) || 0,
        food_protein: parseFloat(item.food_protein) || 0,
      })),
    []
  );

  const debouncedSearch = useCallback(
    debounce((value) => {
      setDebouncedTerm(value);
    }, 300),
    []
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  const filteredData = useMemo(
    () =>
      nutritionData.filter((item) =>
        item.food_item.toLowerCase().includes(debouncedTerm.toLowerCase())
      ),
    [nutritionData, debouncedTerm]
  );

  const parentRef = React.useRef();

  const rowVirtualizer = useVirtualizer({
    count: filteredData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 200,
    overscan: 5,
  });

  const nutritionCards = [
    {
      title: "Calories",
      icon: "⚡",
      color: "bg-teal-50 border-teal-200",
      textColor: "text-teal-900",
      description: "Daily energy",
    },
    {
      title: "Protein",
      icon: "💪",
      color: "bg-cyan-50 border-cyan-200",
      textColor: "text-cyan-900",
      description: "Muscle support",
    },
    {
      title: "Carbs",
      icon: "🌾",
      color: "bg-sky-50 border-sky-200",
      textColor: "text-sky-900",
      description: "Fuel source",
    },
    {
      title: "Fats",
      icon: "🫒",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-900",
      description: "Vital nutrients",
    },
  ];

  const TableRows = useCallback(
    ({ start, end }) => (
      <>
        {filteredData.slice(start, end).map((item, index) => (
          <TableRow
            key={start + index}
            className="hover:bg-teal-50/50 transition-colors duration-200"
          >
            <TableCell className="font-medium text-teal-900">
              {item.food_item}
            </TableCell>
            <TableCell className="text-teal-800">{item.serving_size}</TableCell>
            <TableCell className="text-right">{item.food_calories}</TableCell>
            <TableCell className="text-right">{item.food_protein}</TableCell>
            <TableCell className="text-right">{item.food_carbs}</TableCell>
            <TableCell className="text-right">{item.food_fats}</TableCell>
          </TableRow>
        ))}
      </>
    ),
    [filteredData]
  );

  return (
    <Card className="w-full bg-gradient-to-br from-white to-teal-50/30">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6" />
          <CardTitle className="text-xl md:text-2xl font-light">
            Nutritional Insights
          </CardTitle>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 p-2">
          {nutritionCards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-hidden rounded-2xl border ${card.color} 
                         transition-all duration-300 hover:scale-105 cursor-pointer
                         shadow-lg backdrop-blur-sm`}
            >
              <div className="p-3 md:p-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl md:text-3xl">{card.icon}</span>
                  <span
                    className={`font-medium text-sm md:text-base ${card.textColor}`}
                  >
                    {card.title}
                  </span>
                </div>
                <div className="mt-2 text-xs md:text-sm text-gray-600">
                  {card.description}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-8">
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Input
              placeholder="Search foods..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 border-2 border-teal-600/20 focus:border-teal-600 focus:ring-teal-600 
                         rounded-xl shadow-sm bg-white/80 backdrop-blur-sm"
            />
            <span className="absolute left-3 top-2.5 text-teal-600">
              <Search className="h-5 w-5" />
            </span>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border border-gray-200 overflow-hidden shadow-xl bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-teal-900 to-cyan-900 hover:from-teal-800 hover:to-cyan-800">
                <TableHead className="w-[30%] text-white font-medium">
                  Food Item
                </TableHead>
                <TableHead className="w-[15%] text-white font-medium">
                  Serving
                </TableHead>
                <TableHead className="text-right text-white font-medium">
                  Calories
                </TableHead>
                <TableHead className="text-right text-white font-medium">
                  Protein (g)
                </TableHead>
                <TableHead className="text-right text-white font-medium">
                  Carbs (g)
                </TableHead>
                <TableHead className="text-right text-white font-medium">
                  Fats (g)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRows start={0} end={filteredData.length} />
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View with Virtual Scrolling */}
        <div ref={parentRef} className="md:hidden h-[600px] overflow-auto">
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const item = filteredData[virtualRow.index];
              return (
                <div
                  key={virtualRow.index}
                  data-index={virtualRow.index}
                  ref={rowVirtualizer.measureElement}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {/* Your existing card content */}
                  <div className="py-4 ">
                    <div className="w-full rounded-xl border border-gray-200/80 p-4 bg-white">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-medium text-teal-900">
                          {item.food_item}
                        </h3>
                        <span className="text-sm text-teal-800 bg-teal-50 px-2 py-1 rounded-lg">
                          {item.serving_size}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center p-2 bg-gradient-to-br from-teal-50 to-white rounded-lg border border-teal-100">
                          <div className="text-sm text-teal-600">Protein</div>
                          <div className="font-medium text-teal-900">
                            {item.food_protein}g
                          </div>
                        </div>
                        <div className="text-center p-2 bg-gradient-to-br from-cyan-50 to-white rounded-lg border border-cyan-100">
                          <div className="text-sm text-cyan-600">Carbs</div>
                          <div className="font-medium text-cyan-900">
                            {item.food_carbs}g
                          </div>
                        </div>
                        <div className="text-center p-2 bg-gradient-to-br from-sky-50 to-white rounded-lg border border-sky-100">
                          <div className="text-sm text-sky-600">Fats</div>
                          <div className="font-medium text-sky-900">
                            {item.food_fats}g
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-teal-600">
                            Total Energy
                          </span>
                          <span className="font-medium text-teal-900 bg-teal-50 px-3 py-1 rounded-lg">
                            {item.food_calories} cal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionDatabase;
