"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Utensils,
  Flame,
  Beef,
  Salad,
  WheatOff,
  Scale,
  Pizza,
  Sandwich,
  Plus,
  Gauge,
  IceCreamBowl,
  Wheat,
} from "lucide-react";
import { data } from "@/data/california-burrito";

const CATEGORIES = [
  { id: "rice-bowl", name: "Rice Bowl", icon: Wheat },
  { id: "burrito", name: "Burrito", icon: Sandwich },
  { id: "nachos", name: "Nachos", icon: Pizza },
  { id: "tacos", name: "Tacos", icon: Sandwich },
  { id: "salad", name: "Salad", icon: Salad },
  { id: "extras", name: "Extras", icon: Plus },
];

const NutritionTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterItems = (items) => {
    return items.filter((item) => {
      if (!item["TOTAL CALORIES\n(Kcal)"]) return false;

      const matchesSearch = item.ITEMS.toLowerCase().includes(
        searchTerm.toLowerCase()
      );
      const matchesCategory =
        selectedCategory === "all" ||
        getCategoryFromItem(item.ITEMS) === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  };

  const getCategoryFromItem = (itemName) => {
    itemName = itemName.toLowerCase();
    if (itemName.includes("rice") || itemName.includes("bowl"))
      return "rice-bowl";
    if (itemName.includes("burrito")) return "burrito";
    if (itemName.includes("nachos")) return "nachos";
    if (itemName.includes("tacos")) return "tacos";
    if (itemName.includes("salad")) return "salad";
    if (itemName.includes("extra")) return "extras";
    return "other";
  };

  const isVegetarian = (itemName) => {
    return (
      itemName.toLowerCase().includes("veg") ||
      itemName.toLowerCase().includes("paneer") ||
      itemName.toLowerCase().includes("mushroom") ||
      itemName.toLowerCase().includes("potato")
    );
  };

  const getActiveItems = (category) => {
    return data.filter(
      (item) =>
        item["TOTAL CALORIES\n(Kcal)"] &&
        getCategoryFromItem(item.ITEMS) === category
    ).length;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 pt-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl mb-6 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl">
            <Utensils className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-medium">California Burrito Nutrition</h1>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="space-y-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-indigo-400" />
          <Input
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-11 border-2 border-indigo-100 focus:border-indigo-400 focus:ring-indigo-400 rounded-xl shadow-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === "all"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
            }`}
          >
            <Utensils className="h-4 w-4" />
            <span>All Items</span>
          </button>

          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
              <span className="bg-indigo-500/10 px-1.5 py-0.5 rounded-full text-xs">
                {getActiveItems(category.id)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {filterItems(data).map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 rounded-xl border-none"
          >
            <CardContent className="p-5">
              {/* Item Header with Title and Type */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg shrink-0 ${
                    isVegetarian(item.ITEMS) ? "bg-emerald-100" : "bg-amber-100"
                  }`}
                >
                  {isVegetarian(item.ITEMS) ? (
                    <Salad className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <Beef className="h-5 w-5 text-amber-600" />
                  )}
                </div>
                <div className="flex-grow">
                  <h3
                    className={`text-lg font-medium ${
                      isVegetarian(item.ITEMS)
                        ? "text-emerald-700"
                        : "text-amber-700"
                    }`}
                  >
                    {item.ITEMS}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {CATEGORIES.map(
                      (cat) =>
                        getCategoryFromItem(item.ITEMS) === cat.id && (
                          <div
                            key={cat.id}
                            className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full"
                          >
                            <cat.icon className="h-3 w-3" />
                            <span>{cat.name}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>

              {/* Nutrition Info */}
              <div className="space-y-4">
                {/* Calories Banner */}
                <div className="flex items-center justify-between bg-indigo-50 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Flame className="h-5 w-5" />
                    <span className="font-medium">Calories</span>
                  </div>
                  <div className="text-xl font-bold text-indigo-700">
                    {item["TOTAL CALORIES\n(Kcal)"]}
                  </div>
                </div>

                {/* Macros Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1.5">
                      <Beef className="h-4 w-4 text-indigo-500" />
                      <span>Protein</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {item["PROTEIN\n(g)"]}g
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1.5">
                      <Scale className="h-4 w-4 text-indigo-500" />
                      <span>Fat</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {item["TOTAL FAT\n(g)"]}g
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1.5">
                      <WheatOff className="h-4 w-4 text-indigo-500" />
                      <span>Carbs</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {item["TOTAL CARBS\n(g)"]}g
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* No Results Message */}
        {filterItems(data).length === 0 && (
          <div className="text-center py-8 px-4 rounded-xl bg-indigo-50 text-indigo-600">
            <Search className="h-10 w-10 mx-auto mb-2 text-indigo-400" />
            <p className="font-medium">
              {searchTerm
                ? `No ${selectedCategory !== "all" ? CATEGORIES.find((c) => c.id === selectedCategory)?.name + " " : ""}items found matching "${searchTerm}"`
                : `No ${selectedCategory !== "all" ? CATEGORIES.find((c) => c.id === selectedCategory)?.name + " " : ""}items available`}
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 flex gap-6 justify-center">
        <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
          <Salad className="h-4 w-4 text-emerald-600" />
          <span className="text-sm text-emerald-700 font-medium">
            Vegetarian
          </span>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
          <Beef className="h-4 w-4 text-amber-600" />
          <span className="text-sm text-amber-700 font-medium">
            Non-Vegetarian
          </span>
        </div>
      </div>
    </div>
  );
};

export default NutritionTable;
