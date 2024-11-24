"use client";
import React, { useState, useMemo, useRef, useCallback } from "react";
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
import { useVirtualizer } from "@tanstack/react-virtual";
import debounce from "lodash/debounce";
import { menuData } from "@/data/starbucks";

const isBeverage = (product) => {
  const beverageKeywords = [
    "Coffee",
    "Latte",
    "Tea",
    "Espresso",
    "Cappuccino",
    "Mocha",
    "Americano",
    "Frappuccino",
    "Cold Brew",
    "Refresher",
    "Chai",
    "Macchiato",
    "Drink",
    "Chocolate",
    "Hot",
  ];
  return beverageKeywords.some((keyword) =>
    product.toLowerCase().includes(keyword.toLowerCase())
  );
};

// Helper function to format serving size
const formatServingSize = (size, product) => {
  if (!size) return "-";
  if (isBeverage(product)) {
    return `${size}ml`;
  }
  return `${size}g`;
};

const sizesInfo = [
  {
    name: "Short",
    volume: "237ml (8 fl oz)",
    icon: "☕",
    color: "bg-green-50 border-green-200",
  },
  {
    name: "Tall",
    volume: "354ml (12 fl oz)",
    icon: "☕",
    color: "bg-green-100 border-green-300",
  },
  {
    name: "Grande",
    volume: "473ml (16 fl oz)",
    icon: "☕",
    color: "bg-green-200 border-green-400",
  },
  {
    name: "Venti",
    volume: "591ml (20 fl oz)",
    icon: "☕",
    color: "bg-green-300 border-green-500",
  },
];

const NutritionTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const parentRef = useRef(null);

  // Debounced search handler
  const debouncedSearch = useMemo(
    () => debounce((value) => setDebouncedSearchTerm(value), 300),
    []
  );

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return menuData.filter((item) =>
      item.Product.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  const estimateSize = useCallback(() => 48, []); // Estimate each row to be 48px tall

  const rowVirtualizer = useVirtualizer({
    count: filteredData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: estimateSize,
    overscan: 5,
  });

  return (
    <Card className="w-full bg-white">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="flex items-center gap-2">
          <Coffee className="h-6 w-6" />
          <CardTitle className="text-xl md:text-2xl">
            Starbucks Nutrition Information
          </CardTitle>
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
                  <span className="font-bold text-sm md:text-xl text-green-900">
                    {size.name}
                  </span>
                </div>
                <div className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-green-800">
                  {size.volume}
                </div>
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
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                debouncedSearch(e.target.value);
              }}
              className="max-w-sm pl-10 border-2 border-green-800 focus:border-green-900 focus:ring-green-900"
            />
            <span className="absolute left-3 top-2.5 text-green-800">
              <Coffee className="h-5 w-5" />
            </span>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <div className="relative">
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-green-800">
                <TableRow>
                  <TableHead className="w-[25%] text-white">Product</TableHead>
                  <TableHead className="w-[10%] text-white">
                    Serving Size
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Calories
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Carbs (g)
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Sugar (g)
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Protein (g)
                  </TableHead>
                  <TableHead className="text-right text-white">
                    Fat (g)
                  </TableHead>
                </TableRow>
              </TableHeader>
            </Table>

            <div
              ref={parentRef}
              className="overflow-auto"
              style={{ height: "600px" }}
            >
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
                      className="absolute top-0 left-0 w-full"
                      style={{
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <Table>
                        <TableBody>
                          <TableRow className="hover:bg-green-50 transition-colors duration-200">
                            <TableCell className="font-medium">
                              {item.Product}
                            </TableCell>
                            <TableCell className="font-medium text-green-800">
                              {formatServingSize(
                                item["Serving Size (ml)"],
                                item.Product
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              {item["Energy (Kcal)"]}
                            </TableCell>
                            <TableCell className="text-right">
                              {item["Carbohydrate (g)"]}
                            </TableCell>
                            <TableCell className="text-right">
                              {item["Total Sugar (g)"]}
                            </TableCell>
                            <TableCell className="text-right">
                              {item["Protein (g)"]}
                            </TableCell>
                            <TableCell className="text-right">
                              {item["Total Fat (g)"]}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden">
          <div
            ref={parentRef}
            className="overflow-auto"
            style={{ height: "600px" }}
          >
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
                    className="absolute top-0 left-0 w-full"
                    style={{
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <div className="rounded-lg border-2 border-gray-200 p-4 mb-4 hover:bg-green-50 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-green-900">
                          {item.Product}
                        </h3>
                        <span className="text-sm text-green-800 font-medium">
                          {formatServingSize(
                            item["Serving Size (ml)"],
                            item.Product
                          )}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600">Calories</div>
                          <div className="font-bold text-green-900">
                            {item["Energy (Kcal)"]}
                          </div>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600">Sugar</div>
                          <div className="font-bold text-green-900">
                            {item["Total Sugar (g)"]}g
                          </div>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600">Carbs</div>
                          <div className="font-bold text-green-900">
                            {item["Carbohydrate (g)"]}g
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            Total Fat
                          </span>
                          <span className="font-bold text-green-900">
                            {item["Total Fat (g)"]}g
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionTable;
