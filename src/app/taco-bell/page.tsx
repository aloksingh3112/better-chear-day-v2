"use client";
import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils, Filter } from "lucide-react";

const isVegetarian = (name) => {
  const lowerName = name.toLowerCase();

  // If it explicitly says "non veg", it's non-vegetarian
  if (
    lowerName.includes("non veg") ||
    lowerName.includes("non-veg") ||
    lowerName.includes("nonvegetarian") ||
    lowerName.includes("non-vegetarian") ||
    lowerName.includes("nonveg")
  ) {
    return false;
  }

  // Known non-vegetarian keywords
  const nonVegKeywords = ["chicken", "kebab"];
  if (nonVegKeywords.some((keyword) => lowerName.includes(keyword))) {
    return false;
  }

  // Known vegetarian categories
  const vegCategories = [
    "veg",
    "lemon-ade",
    "mango chilli twist",
    "peach ginger zing",
    "cold coffee",
    "thick shake",
    "fries",
    "nachos",
    "sauce",
  ];

  return vegCategories.some((category) => lowerName.includes(category));
};
// Transforming the raw data to a more usable format
const transformMenuData = (rawData) => {
  return rawData
    .filter((item) => item[""] && item[""] !== "Product name") // Filter out header row
    .map((item) => ({
      name: item[""],
      servingSize: item.__2,
      calories: Number(item.__3),
      protein: Number(item.__4),
      carbs: Number(item.__5),
      totalSugar: Number(item.__6),
      addedSugar: Number(item.__7),
      fat: Number(item.__8),
      satFat: Number(item.__9),
      transFat: Number(item.__10),
      cholesterol: Number(item.__11),
      sodium: Number(item.__12),
      isVeg: isVegetarian(item[""]),
    }));
};

const menuData = transformMenuData([
  {
    "Nutritional and Allergens information sheet": "S.N.",
    "": "Product name",
    __1: "Serve Size",
    __2: "Quantity",
    __3: "Energy (Kcal)",
    __4: "Protein (g)",
    __5: "Carbohydrate(g)",
    __6: "Total Sugar (g)",
    __7: "Added Sugar (g)",
    __8: "Fat (g)",
    __9: "Sat Fat (g)",
    __10: "Trans Fat (g)",
    __11: "Cholesterol (mg)",
    __12: "Sodium (mg)",
  },
  {
    "Nutritional and Allergens information sheet": 1,
    "": "Green Lemon-ade",
    __1: 1,
    __2: "330 ml",
    __3: 139.4,
    __4: 0.1,
    __5: 33.4,
    __6: 32.6,
    __7: 32,
    __8: 0,
    __9: 0,
    __10: 0,
    __11: 0,
    __12: 1057.7,
  },
  {
    "Nutritional and Allergens information sheet": 2,
    "": "Mango Chilli Twist",
    __1: 1,
    __2: "330 ml",
    __3: 148.1,
    __4: 0.1,
    __5: 35.7,
    __6: 35.7,
    __7: 33.3,
    __8: 0.2,
    __9: 0,
    __10: 0,
    __11: 0,
    __12: 180.2,
  },
  {
    "Nutritional and Allergens information sheet": 3,
    "": "Peach Ginger Zing",
    __1: 1,
    __2: "330 ml",
    __3: 141.1,
    __4: 0.1,
    __5: 34.7,
    __6: 33.4,
    __7: 31,
    __8: 0,
    __9: 0,
    __10: 0,
    __11: 0,
    __12: 13.6,
  },
  {
    "Nutritional and Allergens information sheet": 4,
    "": "Hazelnut Cold Coffee",
    __1: 1,
    __2: "330 mll",
    __3: 402.6,
    __4: 10.3,
    __5: 62.5,
    __6: 45.5,
    __7: 26.3,
    __8: 12.3,
    __9: 7.5,
    __10: 0.3,
    __11: 14.7,
    __12: 154.9,
  },
  {
    "Nutritional and Allergens information sheet": 5,
    "": "Burrito Habanero -Veg",
    __1: 1,
    __2: "203 g",
    __3: 407.7,
    __4: 11.7,
    __5: 64.9,
    __6: 8.5,
    __7: 4.4,
    __8: 10.7,
    __9: 4.1,
    __10: 0.2,
    __11: 2.9,
    __12: 1142,
  },
  {
    "Nutritional and Allergens information sheet": 6,
    "": "Burrito Habanero Chicken",
    __1: 1,
    __2: "218 g",
    __3: 450.4,
    __4: 18.1,
    __5: 67.6,
    __6: 7.4,
    __7: 4.3,
    __8: 11.9,
    __9: 4.2,
    __10: 0.1,
    __11: 14.2,
    __12: 1331.6,
  },
  {
    "Nutritional and Allergens information sheet": 9,
    "": "Naked Chicken Taco",
    __1: 1,
    __2: "192g",
    __3: 478.1,
    __4: 18.1,
    __5: 50,
    __6: 3.2,
    __7: 1.9,
    __8: 22.9,
    __9: 7.6,
    __10: 0,
    __11: 47.3,
    __12: 789.7,
  },
  {
    "Nutritional and Allergens information sheet": 12,
    "": "Mini Cheese Quesadilla Non Veg",
    __1: 1,
    __2: "122 g",
    __3: 254.3,
    __4: 15.7,
    __5: 22.6,
    __6: 3.2,
    __7: 1.6,
    __8: 10.8,
    __9: 4.5,
    __10: 0.2,
    __11: 13.4,
    __12: 793.4,
  },
  {
    "Nutritional and Allergens information sheet": 13,
    "": "Melted Cheese Quesadilla Veg",
    __1: 1,
    __2: "201 g",
    __3: 489.3,
    __4: 22,
    __5: 44.5,
    __6: 5.9,
    __7: 1.8,
    __8: 22.6,
    __9: 12.2,
    __10: 0.7,
    __11: 55.3,
    __12: 1244.9,
  },
  {
    "Nutritional and Allergens information sheet": 14,
    "": "Melted Cheese Quesadilla Non Veg",
    __1: 1,
    __2: "197 g",
    __3: 484.6,
    __4: 29.2,
    __5: 41.4,
    __6: 4.6,
    __7: 2.2,
    __8: 21.6,
    __9: 11.3,
    __10: 0.6,
    __11: 53.3,
    __12: 1487.5,
  },
  {
    "Nutritional and Allergens information sheet": 15,
    "": "Crunchy Wheat Taco Veg",
    __1: 1,
    __2: "108 g",
    __3: 255.5,
    __4: 4.3,
    __5: 28.7,
    __6: 2.7,
    __7: 1.1,
    __8: 13.9,
    __9: 5.4,
    __10: 0,
    __11: 0.3,
    __12: 641.3,
  },
  {
    "Nutritional and Allergens information sheet": 16,
    "": "Crunchy Wheat Taco Non Veg",
    __1: 1,
    __2: "114g",
    __3: 277.4,
    __4: 9.4,
    __5: 27.9,
    __6: 2,
    __7: 1.1,
    __8: 14,
    __9: 5.1,
    __10: 0,
    __11: 12.6,
    __12: 666.1,
  },
  {
    "Nutritional and Allergens information sheet": 17,
    "": "Chicken Seekh Kebab Taco",
    __1: 1,
    __2: "149g",
    __3: 284.8,
    __4: 10,
    __5: 29.9,
    __6: 3.8,
    __7: 1.2,
    __8: 11.5,
    __9: 3.9,
    __10: 0,
    __11: 10.3,
    __12: 856.8,
  },
  {
    "Nutritional and Allergens information sheet": 18,
    "": "Crunchy Taco Supreme Non Veg",
    __1: 1,
    __2: "108 g",
    __3: 240.6,
    __4: 10.2,
    __5: 21.9,
    __6: 3.6,
    __7: 3.1,
    __8: 12.2,
    __9: 3.9,
    __10: 0.1,
    __11: 18.4,
    __12: 544.2,
  },
  {
    "Nutritional and Allergens information sheet": 19,
    "": "Crunchy Taco Supreme Veg",
    __1: 1,
    __2: "102g",
    __3: 218.7,
    __4: 5.1,
    __5: 22.7,
    __6: 4.3,
    __7: 3,
    __8: 12.1,
    __9: 4.1,
    __10: 0.1,
    __11: 6.1,
    __12: 519.4,
  },
  {
    "Nutritional and Allergens information sheet": 20,
    "": "Crispy Taco Seasoned Potato",
    __1: 1,
    __2: "101g",
    __3: 237.5,
    __4: 5.3,
    __5: 33.6,
    __6: 3,
    __7: 1.5,
    __8: 9.2,
    __9: 2.7,
    __10: 0,
    __11: 0.8,
    __12: 574,
  },
  {
    "Nutritional and Allergens information sheet": 21,
    "": "Crispy Chicken Wrap",
    __1: 1,
    __2: "120g",
    __3: 292.1,
    __4: 10.6,
    __5: 29.9,
    __6: 3.1,
    __7: 0.9,
    __8: 14.5,
    __9: 5.2,
    __10: 0,
    __11: 13.7,
    __12: 705.4,
  },
  {
    "Nutritional and Allergens information sheet": 22,
    "": "Crispy Seasoned Potato Wrap",
    __1: 1,
    __2: "127 g",
    __3: 283.5,
    __4: 6.3,
    __5: 39.3,
    __6: 3.4,
    __7: 1.2,
    __8: 11.2,
    __9: 3.8,
    __10: 0,
    __11: 1.1,
    __12: 639.5,
  },
  {
    "Nutritional and Allergens information sheet": 23,
    "": "Crispy Chalupa Taco Veg",
    __1: 1,
    __2: "192g",
    __3: 476.8,
    __4: 11.8,
    __5: 47.1,
    __6: 7.4,
    __7: 4,
    __8: 25.4,
    __9: 10.4,
    __10: 0.1,
    __11: 45.6,
    __12: 965.5,
  },
  {
    "Nutritional and Allergens information sheet": 24,
    "": "Crispy Chalupa Taco Non Veg",
    __1: 1,
    __2: "211 g",
    __3: 444.9,
    __4: 21.7,
    __5: 43.1,
    __6: 3.7,
    __7: 2.5,
    __8: 20.2,
    __9: 6.4,
    __10: 0.1,
    __11: 0.1,
    __12: 1286.3,
  },
  {
    "Nutritional and Allergens information sheet": 25,
    "": "7 Layer Burrito- Non Veg",
    __1: 1,
    __2: "408  g",
    __3: 659.8,
    __4: 30.9,
    __5: 86.6,
    __6: 11.2,
    __7: 4.5,
    __8: 21,
    __9: 7.2,
    __10: 0.2,
    __11: 5.6,
    __12: 2241.1,
  },
  {
    "Nutritional and Allergens information sheet": 26,
    "": "7 Layer Burrito- Veg",
    __1: 1,
    __2: "352g",
    __3: 610.7,
    __4: 15.3,
    __5: 86.9,
    __6: 13.1,
    __7: 4.9,
    __8: 21.9,
    __9: 8.1,
    __10: 0.2,
    __11: 5.3,
    __12: 1757.1,
  },
  {
    "Nutritional and Allergens information sheet": 27,
    "": "Fiery Volcano Burrito - Veg",
    __1: 1,
    __2: "255g",
    __3: 582.7,
    __4: 17,
    __5: 77,
    __6: 10.7,
    __7: 6.1,
    __8: 22.5,
    __9: 8.3,
    __10: 0.1,
    __11: 46.6,
    __12: 1369.6,
  },
  {
    "Nutritional and Allergens information sheet": 28,
    "": "Fiery Volcano Burrito - Non Veg",
    __1: 1,
    __2: "249g",
    __3: 562,
    __4: 17.9,
    __5: 79.4,
    __6: 9.3,
    __7: 6.1,
    __8: 19,
    __9: 5.3,
    __10: 0.1,
    __11: 14.2,
    __12: 1331.3,
  },
  {
    "Nutritional and Allergens information sheet": 29,
    "": "Regular Rice Bowl - Veg",
    __1: 1,
    __2: "446g",
    __3: 820.5,
    __4: 15.5,
    __5: 136,
    __6: 3.9,
    __7: 1.1,
    __8: 23.8,
    __9: 9.7,
    __10: 0.1,
    __11: 8.5,
    __12: 1998.2,
  },
  {
    "Nutritional and Allergens information sheet": 30,
    "": "Regular Rice Bowl - Non-Veg",
    __1: 1,
    __2: "471g",
    __3: 641.1,
    __4: 20.5,
    __5: 105.8,
    __6: 4.1,
    __7: 1.7,
    __8: 15.7,
    __9: 5.9,
    __10: 0.1,
    __11: 7.6,
    __12: 2294.3,
  },
  {
    "Nutritional and Allergens information sheet": 31,
    "": "Supreme Rice Bowl  - Veg",
    __1: 1,
    __2: "527 g",
    __3: 807.6,
    __4: 24.8,
    __5: 113.3,
    __6: 6.9,
    __7: 1.1,
    __8: 27.1,
    __9: 13.8,
    __10: 0.1,
    __11: 97.8,
    __12: 2600.8,
  },
  {
    "Nutritional and Allergens information sheet": 32,
    "": "Supreme Rice Bowl - Non-Veg",
    __1: 1,
    __2: "535 g",
    __3: 728.8,
    __4: 29.2,
    __5: 112.5,
    __6: 5.8,
    __7: 2.7,
    __8: 17.5,
    __9: 6.7,
    __10: 0.2,
    __11: 8.6,
    __12: 2817.8,
  },
  {
    "Nutritional and Allergens information sheet": 33,
    "": "THICK SHAKE COOKIE CRUMBLE",
    __1: 1,
    __2: "330 ml",
    __3: 481.8,
    __4: 10.1,
    __5: 71.2,
    __6: 61.5,
    __7: 44.8,
    __8: 17.3,
    __9: 9.3,
    __10: 0.3,
    __11: 8.3,
    __12: 155.6,
  },
  {
    "Nutritional and Allergens information sheet": 34,
    "": "THICK SHAKE CHOCOLATE",
    __1: 1,
    __2: "330 ml",
    __3: 401.4,
    __4: 9.3,
    __5: 61.4,
    __6: 54.6,
    __7: 40.6,
    __8: 13,
    __9: 7.1,
    __10: 0.3,
    __11: 8.8,
    __12: 164.4,
  },
  {
    "Nutritional and Allergens information sheet": 35,
    "": "THICK SHAKE MANGO",
    __1: 1,
    __2: "330 ml",
    __3: 385.9,
    __4: 8.3,
    __5: 62,
    __6: 55.9,
    __7: 42.3,
    __8: 11.6,
    __9: 6.5,
    __10: 0.2,
    __11: 8.2,
    __12: 139.9,
  },
  {
    "Nutritional and Allergens information sheet": 36,
    "": "Cheesy Fries",
    __1: 1,
    __2: "134 g",
    __3: 316.9,
    __4: 7.6,
    __5: 42.7,
    __6: 1.7,
    __7: 0,
    __8: 12.8,
    __9: 7,
    __10: 0.1,
    __11: 9.2,
    __12: 440.8,
  },
  {
    "Nutritional and Allergens information sheet": 37,
    "": "Cheesy Seasoned Nachos",
    __1: 1,
    __2: "113 g",
    __3: 311.6,
    __4: 6.9,
    __5: 35.6,
    __6: 2.6,
    __7: 0.2,
    __8: 15.7,
    __9: 8.1,
    __10: 0.1,
    __11: 9.2,
    __12: 198.3,
  },
  {
    "Nutritional and Allergens information sheet": 38,
    "": "Value Rice Bowl Non-Veg",
    __1: 1,
    __2: "252 g",
    __3: 393.4,
    __4: 13.5,
    __5: 67.1,
    __6: 1.3,
    __7: 0.2,
    __8: 7.2,
    __9: 3.5,
    __10: 0.1,
    __11: 18.3,
    __12: 1211,
  },
  {
    "Nutritional and Allergens information sheet": 39,
    "": "Value Rice Bowl Veg",
    __1: 1,
    __2: "246 g",
    __3: 371.5,
    __4: 8.4,
    __5: 67.9,
    __6: 2,
    __7: 0.2,
    __8: 7.1,
    __9: 3.8,
    __10: 0.1,
    __11: 6,
    __12: 1186.2,
  },
  {
    "Nutritional and Allergens information sheet": 40,
    "": "Hot and Cheesy Crunch  Wrap- Non veg",
    __1: 1,
    __2: "265g",
    __3: 679,
    __4: 26.2,
    __5: 67.8,
    __6: 5.9,
    __7: 1.8,
    __8: 33.6,
    __9: 13.3,
    __10: 0.2,
    __11: 40.4,
    __12: 1683.7,
  },
  {
    "Nutritional and Allergens information sheet": 41,
    "": "Hot and Cheesy Crunch Wrap- Veg",
    __1: 1,
    __2: "252 g",
    __3: 541.5,
    __4: 23.1,
    __5: 52,
    __6: 8.9,
    __7: 1.8,
    __8: 25.6,
    __9: 13.1,
    __10: 0.2,
    __11: 98.1,
    __12: 1238.6,
  },
  {
    "Nutritional and Allergens information sheet": 49,
    "": "Chicken Nuggets with Dip",
    __1: 1,
    __2: "143 g",
    __3: 440.4,
    __4: 15.7,
    __5: 27.2,
    __6: 2.9,
    __7: 2.7,
    __8: 29.9,
    __9: 9.5,
    __10: 0,
    __11: 32.6,
    __12: 1508,
  },
  {
    "Nutritional and Allergens information sheet": 50,
    "": "Soft Taco grilled Mexican Chicken",
    __1: 1,
    __2: "127 g",
    __3: 236,
    __4: 11.1,
    __5: 27.1,
    __6: 3.8,
    __7: 1.7,
    __8: 9,
    __9: 2.3,
    __10: 0,
    __11: 13.1,
    __12: 653.5,
  },
  {
    "Nutritional and Allergens information sheet": 51,
    "": "Extra Protein - Fajita Veg",
    __1: 1,
    __2: "29 g",
    __3: 28.6,
    __4: 0.5,
    __5: 3,
    __6: 1.1,
    __7: 0.2,
    __8: 0.8,
    __9: 0.5,
    __10: 0.1,
    __11: 1,
    __12: 93.6,
  },
  {
    "Nutritional and Allergens information sheet": 52,
    "": "Extra Protein - Mexican Chicken",
    __1: 1,
    __2: "44 g",
    __3: 71.3,
    __4: 6.9,
    __5: 5.7,
    __6: 0,
    __7: 0,
    __8: 2,
    __9: 0.7,
    __10: 0,
    __11: 12.3,
    __12: 283.2,
  },
  {
    "Nutritional and Allergens information sheet": 53,
    "": "Extra Protein - Mexican Paneer",
    __1: 1,
    __2: "50 g",
    __3: 91.9,
    __4: 6,
    __5: 3.3,
    __6: 1.5,
    __7: 0,
    __8: 5.5,
    __9: 3.7,
    __10: 0,
    __11: 44.6,
    __12: 321.5,
  },
  {
    "Nutritional and Allergens information sheet": 54,
    "": "Extra Protein - Pinto Beans",
    __1: 1,
    __2: "38 g",
    __3: 49.4,
    __4: 1.9,
    __5: 6.5,
    __6: 0.8,
    __7: 0,
    __8: 1.9,
    __9: 1,
    __10: 0,
    __11: 0,
    __12: 258.4,
  },
  {
    "Nutritional and Allergens information sheet": 55,
    "": "Extra Protein -Chipotle Diced Chicken",
    __1: 1,
    __2: "54 g",
    __3: 52.5,
    __4: 8.2,
    __5: 2.9,
    __6: 0.9,
    __7: 0.8,
    __8: 0.7,
    __9: 0.2,
    __10: 0,
    __11: 0,
    __12: 430,
  },
  {
    "Nutritional and Allergens information sheet": 56,
    "": "Chocolate Sauce",
    __1: 1,
    __2: "15 g",
    __3: 42.1,
    __4: 0.4,
    __5: 9.8,
    __6: 8.8,
    __7: 8.8,
    __8: 0.2,
    __9: 0.1,
    __10: 0,
    __11: 0,
    __12: 15.6,
  },
  {
    "Nutritional and Allergens information sheet": 57,
    "": "Lava Sauce",
    __1: 1,
    __2: "30 g",
    __3: 119.2,
    __4: 0.5,
    __5: 4.7,
    __6: 2.9,
    __7: 2.7,
    __8: 10.9,
    __9: 1.9,
    __10: 0,
    __11: 1,
    __12: 420,
  },
  {
    "Nutritional and Allergens information sheet": 58,
    "": "Sour Cream Sauce",
    __1: 1,
    __2: "30 g",
    __3: 106.3,
    __4: 0.6,
    __5: 1.8,
    __6: 0.5,
    __7: 0.5,
    __8: 10.7,
    __9: 1.7,
    __10: 0,
    __11: 0,
    __12: 126,
  },
  {
    "Nutritional and Allergens information sheet": 59,
    "": "Spicy Salsa Sauce",
    __1: 1,
    __2: "30 g",
    __3: 21.9,
    __4: 0.6,
    __5: 4.2,
    __6: 2.7,
    __7: 1.8,
    __8: 0.3,
    __9: 0.2,
    __10: 0,
    __11: 0,
    __12: 240,
  },
  {
    "Nutritional and Allergens information sheet": 60,
    "": "Nacho Sauce",
    __1: 1,
    __2: "21 g",
    __3: 38.2,
    __4: 1.2,
    __5: 1.6,
    __6: 0.9,
    __7: 0,
    __8: 3,
    __9: 1.8,
    __10: 0,
    __11: 1.6,
    __12: 19.6,
  },
  {
    "Nutritional and Allergens information sheet": 61,
    "": "Cheesy Lava Taco - Nonveg with Seasoned Nachos",
    __1: 1,
    __2: "253g",
    __3: 912.2,
    __4: 17.6,
    __5: 91.4,
    __6: 7.4,
    __7: 0,
    __8: 52.9,
    __9: 18.4,
    __10: 0,
    __11: 24.7,
    __12: 1082.7,
  },
  {
    "Nutritional and Allergens information sheet": 62,
    "": "Cheesy lava Taco - Veg with Seasoned Nachos",
    __1: 1,
    __2: "236g",
    __3: 891.6,
    __4: 15.5,
    __5: 105.6,
    __6: 6.5,
    __7: 0,
    __8: 45.2,
    __9: 15.6,
    __10: 0,
    __11: 12.6,
    __12: 784.5,
  },
  {
    "Nutritional and Allergens information sheet": 63,
    "": "Molten Choco pie-4 pieces",
    __1: 1,
    __2: "144g",
    __3: 537.6,
    __4: 12.1,
    __5: 74,
    __6: 25,
    __7: 21.6,
    __8: 21.4,
    __9: 11.7,
    __10: 0,
    __11: 11.3,
    __12: 345.3,
  },
  {
    "Nutritional and Allergens information sheet": 64,
    "": "Molten Choco pie-6 pieces",
    __1: 2,
    __2: "208g",
    __3: 387.7,
    __4: 8.7,
    __5: 53.4,
    __6: 18,
    __7: 15.6,
    __8: 15.5,
    __9: 8.5,
    __10: 0,
    __11: 8.1,
    __12: 249.1,
  },
]);

const NutritionTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all"); // 'all', 'veg', 'nonveg'

  const filteredData = useMemo(() => {
    return menuData.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        filterType === "all"
          ? true
          : filterType === "veg"
            ? item.isVeg
            : !item.isVeg;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterType]);

  return (
    <Card className="w-full bg-white">
      <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-[#702082] to-[#8B2B93] text-white">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6" />
          <CardTitle className="text-xl md:text-2xl">
            Taco Bell Nutrition Information
          </CardTitle>
        </div>

        {/* Category Legend and Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-600"></span>
              <span>Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600"></span>
              <span>Non-Vegetarian</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3 py-1 rounded-full text-sm ${filterType === "all" ? "bg-white text-purple-800" : "bg-purple-800 text-white"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType("veg")}
              className={`px-3 py-1 rounded-full text-sm ${filterType === "veg" ? "bg-white text-purple-800" : "bg-purple-800 text-white"}`}
            >
              Veg
            </button>
            <button
              onClick={() => setFilterType("nonveg")}
              className={`px-3 py-1 rounded-full text-sm ${filterType === "nonveg" ? "bg-white text-purple-800" : "bg-purple-800 text-white"}`}
            >
              Non-Veg
            </button>
          </div>
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

        {/* Desktop Table View */}
        <div className="hidden md:block rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-[#702082] text-white">
                <th className="text-left p-4 font-medium">Item</th>
                <th className="text-left p-4 font-medium">Serving</th>
                <th className="text-right p-4 font-medium">Calories</th>
                <th className="text-right p-4 font-medium">Protein</th>
                <th className="text-right p-4 font-medium">Carbs</th>
                <th className="text-right p-4 font-medium">Sugar</th>
                <th className="text-right p-4 font-medium">Fat</th>
                <th className="text-right p-4 font-medium">Sodium</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-purple-50 transition-colors duration-200 border-t border-gray-200"
                >
                  <td
                    className={`p-4 font-medium ${item.isVeg ? "text-green-600" : "text-red-600"}`}
                  >
                    {item.name}
                  </td>
                  <td className="p-4 font-medium text-purple-800">
                    {item.servingSize}
                  </td>
                  <td className="p-4 text-right">{item.calories.toFixed(1)}</td>
                  <td className="p-4 text-right">{item.protein.toFixed(1)}g</td>
                  <td className="p-4 text-right">{item.carbs.toFixed(1)}g</td>
                  <td className="p-4 text-right">
                    {item.totalSugar.toFixed(1)}g
                  </td>
                  <td className="p-4 text-right">{item.fat.toFixed(1)}g</td>
                  <td className="p-4 text-right">{item.sodium.toFixed(0)}mg</td>
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
              className="rounded-lg border-2 border-gray-200 p-4 hover:bg-purple-50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3
                    className={`font-bold ${item.isVeg ? "text-green-600" : "text-red-600"}`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-sm text-purple-800 font-medium block mt-1">
                    {item.servingSize}
                  </span>
                </div>
                <div className="bg-purple-100 px-3 py-1 rounded-full">
                  <span className="text-purple-800 font-bold">
                    {item.calories.toFixed(1)}
                  </span>
                  <span className="text-purple-600 text-sm ml-1">cal</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-xs text-gray-600">Protein</div>
                  <div className="font-bold text-purple-900">
                    {item.protein.toFixed(1)}g
                  </div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-xs text-gray-600">Carbs</div>
                  <div className="font-bold text-purple-900">
                    {item.carbs.toFixed(1)}g
                  </div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-xs text-gray-600">Fat</div>
                  <div className="font-bold text-purple-900">
                    {item.fat.toFixed(1)}g
                  </div>
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
