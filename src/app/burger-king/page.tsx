"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Beef } from "lucide-react";

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

const menuDataRaw = [
  {
    "Burger King India": "S.No.",
    "": "Product",
    __1: "Avg Portion\nsize gm",
    __2: "Energy",
    __3: "Carbohydra\nte gm",
    __4: "Sugar gm",
    __5: "Fat gm",
    __6: "Saturated\nFat gm",
    __7: "Trans Fatty\nAcids gm",
    __8: "Protein\ngm",
    __9: "Soduim\nContent mg",
  },
  {
    "Burger King India": 1,
    "": "Crispy veg",
    __1: 138,
    __2: 426.7,
    __3: 52,
    __4: 6.2,
    __5: 20.6,
    __6: 7.2,
    __7: 0,
    __8: 8.4,
    __9: 700,
  },
  {
    "Burger King India": 2,
    "": "BK veggie",
    __1: 137,
    __2: 404.1,
    __3: 53.2,
    __4: 5,
    __5: 17.4,
    __6: 5.9,
    __7: 0,
    __8: 8.6,
    __9: 600,
  },
  {
    "Burger King India": 3,
    "": "Veg Chilli Cheese",
    __1: 149,
    __2: 422.6,
    __3: 50.6,
    __4: 5.1,
    __5: 19.3,
    __6: 8.1,
    __7: 0,
    __8: 11.6,
    __9: 1000,
  },
  {
    "Burger King India": 4,
    "": "Paneer king",
    __1: 165,
    __2: 525.8,
    __3: 67.1,
    __4: 6.9,
    __5: 22.4,
    __6: 10.4,
    __7: 0,
    __8: 14,
    __9: 1400,
  },
  {
    "Burger King India": 5,
    "": "Veg Supreme",
    __1: 147,
    __2: 374.4,
    __3: 45.1,
    __4: 6.6,
    __5: 16.5,
    __6: 5,
    __7: 0,
    __8: 11.5,
    __9: 1400,
  },
  {
    "Burger King India": 6,
    "": "Veg Whopper",
    __1: 296,
    __2: 749,
    __3: 100.6,
    __4: 8.3,
    __5: 31.4,
    __6: 11,
    __7: 0,
    __8: 16,
    __9: 1600,
  },
  {
    "Burger King India": 7,
    "": "Veg Wrap",
    __1: 155,
    __2: 422.4,
    __3: 58.7,
    __4: 5.4,
    __5: 17.2,
    __6: 6.6,
    __7: 0,
    __8: 8.2,
    __9: 682,
  },
  {
    "Burger King India": 8,
    "": "BK Grill",
    __1: 118,
    __2: 316.1,
    __3: 34.9,
    __4: 3.5,
    __5: 13.1,
    __6: 5.9,
    __7: 0,
    __8: 14.5,
    __9: 800,
  },
  {
    "Burger King India": 9,
    "": "Chicken Tandoori Grill",
    __1: 159,
    __2: 389.7,
    __3: 39.1,
    __4: 6.8,
    __5: 16,
    __6: 3.6,
    __7: 0,
    __8: 22.4,
    __9: 890,
  },
  {
    "Burger King India": 10,
    "": "Chicken Chilli Cheese",
    __1: 155,
    __2: 401,
    __3: 47.3,
    __4: 7.2,
    __5: 16.2,
    __6: 7.5,
    __7: 0,
    __8: 16.5,
    __9: 900,
  },
  {
    "Burger King India": 11,
    "": "Crispy chicken supereme",
    __1: 121,
    __2: 336.4,
    __3: 32.3,
    __4: 3.7,
    __5: 19,
    __6: 5.9,
    __7: 0,
    __8: 9.2,
    __9: 600,
  },
  {
    "Burger King India": 12,
    "": "Crispy chicken",
    __1: 116,
    __2: 345.2,
    __3: 39,
    __4: 4.5,
    __5: 15.5,
    __6: 7.1,
    __7: 0,
    __8: 12.4,
    __9: 600,
  },
  {
    "Burger King India": 13,
    "": "Spicy crispy chicken",
    __1: 116,
    __2: 322,
    __3: 36.5,
    __4: 7,
    __5: 14.2,
    __6: 5.1,
    __7: 0,
    __8: 12.1,
    __9: 700,
  },
  {
    "Burger King India": 14,
    "": "Chicken whopper",
    __1: 287,
    __2: 662,
    __3: 60.3,
    __4: 7.4,
    __5: 29.8,
    __6: 8.6,
    __7: 0,
    __8: 38.8,
    __9: 1400,
  },
  {
    "Burger King India": 15,
    "": "Mutton Whopper",
    __1: 287,
    __2: 624.2,
    __3: 71,
    __4: 10.8,
    __5: 24.3,
    __6: 12.5,
    __7: 0,
    __8: 30.4,
    __9: 1200,
  },
  {
    "Burger King India": 16,
    "": "Fiery chicken (South)",
    __1: 226,
    __2: 400,
    __3: 61.7,
    __4: 7.5,
    __5: 16.2,
    __6: 9.5,
    __7: 0,
    __8: 22.9,
    __9: 1100,
  },
  {
    "Burger King India": 17,
    "": "Fiery chicken (North & West)",
    __1: 226,
    __2: 449,
    __3: 35.1,
    __4: 6.8,
    __5: 20.8,
    __6: 10.3,
    __7: 0,
    __8: 30.3,
    __9: 678,
  },
  {
    "Burger King India": 18,
    "": "King Egg",
    __1: 130,
    __2: 314.6,
    __3: 21.3,
    __4: 5.3,
    __5: 20.6,
    __6: 6.5,
    __7: 0,
    __8: 11.6,
    __9: 500,
  },
  {
    "Burger King India": 19,
    "": "Egg Overloaded",
    __1: 204,
    __2: 495.7,
    __3: 58.8,
    __4: 3.3,
    __5: 22.2,
    __6: 9.4,
    __7: 0,
    __8: 15.6,
    __9: 1000,
  },
  {
    "Burger King India": 20,
    "": "Egg Supreme",
    __1: 136,
    __2: 328.2,
    __3: 35.3,
    __4: 4,
    __5: 15.5,
    __6: 5.6,
    __7: 0,
    __8: 11.1,
    __9: 500,
  },
  {
    "Burger King India": 21,
    "": "Egg Wrap",
    __1: 163,
    __2: 395.3,
    __3: 45.8,
    __4: 0.8,
    __5: 19.2,
    __6: 7.7,
    __7: 0,
    __8: 9.8,
    __9: 685,
  },
  {
    "Burger King India": 22,
    "": "Juicy Keema Wrap",
    __1: 147,
    __2: 349.4,
    __3: 46.9,
    __4: 0.7,
    __5: 19.3,
    __6: 6.9,
    __7: 0,
    __8: 10.4,
    __9: 1176,
  },
  {
    "Burger King India": 23,
    "": "Chicken Fries 5 Pcs",
    __1: 65,
    __2: 206,
    __3: 19.9,
    __4: 2,
    __5: 9.2,
    __6: 4.4,
    __7: 0,
    __8: 10.9,
    __9: 500,
  },
  {
    "Burger King India": 24,
    "": "Chicken wings Fried ( 2Pcs)",
    __1: 78,
    __2: 167.5,
    __3: 0.9,
    __4: 0,
    __5: 10.3,
    __6: 4,
    __7: 0,
    __8: 17.7,
    __9: 450,
  },
  {
    "Burger King India": 25,
    "": "Chicken wings Fried ( 4Pcs)",
    __1: 155,
    __2: 332.8,
    __3: 1.8,
    __4: 0,
    __5: 20.5,
    __6: 8,
    __7: 0,
    __8: 35.2,
    __9: 894,
  },
  {
    "Burger King India": 26,
    "": "Chicken wings Fried ( 8Pcs)",
    __1: 310,
    __2: 665.7,
    __3: 3.6,
    __4: 0,
    __5: 41.1,
    __6: 15.9,
    __7: 0,
    __8: 70.4,
    __9: 1789,
  },
  {
    "Burger King India": 27,
    "": "Chicken wings Fried ( 15Pcs)",
    __1: 570,
    __2: 1224,
    __3: 6.6,
    __4: 0,
    __5: 75.5,
    __6: 29.3,
    __7: 0,
    __8: 129.4,
    __9: 3289,
  },
  {
    "Burger King India": 28,
    "": "Chicken wings Grilled ( 2Pcs)",
    __1: 65,
    __2: 167.5,
    __3: 18.1,
    __4: 0,
    __5: 4.4,
    __6: 1.3,
    __7: 0,
    __8: 13.8,
    __9: 500,
  },
  {
    "Burger King India": 29,
    "": "Chicken wings Grilled ( 4Pcs)",
    __1: 130,
    __2: 335,
    __3: 36.2,
    __4: 0,
    __5: 8.8,
    __6: 2.6,
    __7: 0,
    __8: 27.7,
    __9: 1100,
  },
  {
    "Burger King India": 30,
    "": "Chicken wings Grilled ( 8Pcs)",
    __1: 260,
    __2: 669.9,
    __3: 72.4,
    __4: 0,
    __5: 17.7,
    __6: 5.2,
    __7: 0,
    __8: 55.4,
    __9: 2100,
  },
  {
    "Burger King India": 31,
    "": "Chicken wings Grilled ( 15Pcs)",
    __1: 495,
    __2: 1275.5,
    __3: 137.8,
    __4: 0,
    __5: 33.6,
    __6: 9.9,
    __7: 0,
    __8: 105.4,
    __9: 4100,
  },
  {
    "Burger King India": 32,
    "": "Mixed Wings - 15  Pcs (10+5) (Fried+ Grilled)",
    __1: 552.5,
    __2: 1243.3,
    __3: 91.4,
    __4: 0,
    __5: 47.5,
    __6: 16.4,
    __7: 0,
    __8: 112.2,
    __9: 3587,
  },
  {
    "Burger King India": 33,
    "": "Mixed Wings - 15  Pcs (5+10)( Grilled +Fried)",
    __1: 520,
    __2: 1249.8,
    __3: 49.1,
    __4: 0,
    __5: 62.5,
    __6: 23.2,
    __7: 0,
    __8: 122.5,
    __9: 3481,
  },
  {
    "Burger King India": 34,
    "": "Fried Chicken - 1 Pc",
    __1: 139,
    __2: 454.6,
    __3: 19.4,
    __4: 0,
    __5: 28.8,
    __6: 11.9,
    __7: 0,
    __8: 29.5,
    __9: 862,
  },
  {
    "Burger King India": 35,
    "": "Fried Chicken - 2 Pc",
    __1: 278,
    __2: 909.2,
    __3: 38.7,
    __4: 0,
    __5: 57.6,
    __6: 23.9,
    __7: 0,
    __8: 59,
    __9: 1724,
  },
  {
    "Burger King India": 36,
    "": "Fried Chicken - 4 Pc",
    __1: 556,
    __2: 1818.3,
    __3: 77.5,
    __4: 0,
    __5: 115.2,
    __6: 47.8,
    __7: 0,
    __8: 117.9,
    __9: 3447,
  },
  {
    "Burger King India": 37,
    "": "Fried Chicken - 5 Pc",
    __1: 695,
    __2: 2272.9,
    __3: 96.8,
    __4: 0,
    __5: 144,
    __6: 59.7,
    __7: 0,
    __8: 147.4,
    __9: 4309,
  },
  {
    "Burger King India": 38,
    "": "Fried Chicken - 6 Pc",
    __1: 834,
    __2: 2727.5,
    __3: 116.2,
    __4: 0,
    __5: 172.8,
    __6: 71.6,
    __7: 0,
    __8: 176.9,
    __9: 5171,
  },
  {
    "Burger King India": 39,
    "": "Fried Chicken - 8 Pc",
    __1: 1112,
    __2: 3636.7,
    __3: 154.9,
    __4: 0,
    __5: 230.4,
    __6: 95.5,
    __7: 0,
    __8: 235.9,
    __9: 6894,
  },
  {
    "Burger King India": 40,
    "": "Veg strips 5 Pcs",
    __1: 87,
    __2: 228.5,
    __3: 27.9,
    __4: 3.2,
    __5: 10.9,
    __6: 5.2,
    __7: 0,
    __8: 4.5,
    __9: 335,
  },
  {
    "Burger King India": 41,
    "": "Hash Brown",
    __1: 60,
    __2: 158.2,
    __3: 19.7,
    __4: 1,
    __5: 8.1,
    __6: 3.9,
    __7: 0,
    __8: 1.7,
    __9: 500,
  },
  {
    "Burger King India": 42,
    "": "Fries Regular",
    __1: 74,
    __2: 263.9,
    __3: 37.7,
    __4: 0.9,
    __5: 10.6,
    __6: 4.9,
    __7: 0,
    __8: 4.4,
    __9: 200,
  },
  {
    "Burger King India": 43,
    "": "Medium Fries",
    __1: 114,
    __2: 406.6,
    __3: 58.1,
    __4: 1.4,
    __5: 16.3,
    __6: 7.5,
    __7: 0,
    __8: 6.8,
    __9: 256,
  },
  {
    "Burger King India": 44,
    "": "King fries",
    __1: 150,
    __2: 535,
    __3: 76.5,
    __4: 1.8,
    __5: 21.5,
    __6: 9.9,
    __7: 0,
    __8: 8.9,
    __9: 400,
  },
  {
    "Burger King India": 45,
    "": "Cheesy fries",
    __1: 154,
    __2: 460.9,
    __3: 56.2,
    __4: 6.4,
    __5: 22.6,
    __6: 8.7,
    __7: 0,
    __8: 8.1,
    __9: 600,
  },
  {
    "Burger King India": 46,
    "": "cheesey chicken fries",
    __1: 194,
    __2: 585.9,
    __3: 64.6,
    __4: 1,
    __5: 32,
    __6: 10.2,
    __7: 0,
    __8: 9.9,
    __9: 1024,
  },
  {
    "Burger King India": 47,
    "": "Americano",
    __1: "150ML",
    __2: 24.3,
    __3: 4.3,
    __4: 0,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 1.3,
    __9: 4605,
  },
  {
    "Burger King India": 48,
    "": "Cappuccino",
    __1: "150ML",
    __2: 66.7,
    __3: 16.6,
    __4: 16.6,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: 0,
  },
  {
    "Burger King India": 49,
    "": "Latte",
    __1: "150ML",
    __2: 63.7,
    __3: 15.9,
    __4: 15.9,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: 0,
  },
  {
    "Burger King India": 50,
    "": "Coffee Frappe",
    __1: "275ML",
    __2: 295,
    __3: 44.1,
    __4: 29.2,
    __5: 10,
    __6: 6.3,
    __7: 0,
    __8: 7.1,
    __9: 0,
  },
  {
    "Burger King India": 51,
    "": "7 UP Regular",
    __1: "300ML",
    __2: 153.9,
    __3: 38.4,
    __4: 38.4,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 52,
    "": "7 UP Medium",
    __1: "450ML",
    __2: 230.8,
    __3: 57.5,
    __4: 57.5,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 53,
    "": "7 UP King",
    __1: "550ML",
    __2: 282.1,
    __3: 70.3,
    __4: 70.3,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 54,
    "": "Mirinda Regular",
    __1: "300ML",
    __2: 167.1,
    __3: 42,
    __4: 42,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 55,
    "": "Mirinda Medium",
    __1: "450ML",
    __2: 250.7,
    __3: 63,
    __4: 63,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 56,
    "": "Mirinda King",
    __1: "550ML",
    __2: 306.4,
    __3: 77,
    __4: 77,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 57,
    "": "Pepsi Regular",
    __1: "300ML",
    __2: 131.8,
    __3: 33,
    __4: 33,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 58,
    "": "Pepsi Medium",
    __1: "450ML",
    __2: 197.7,
    __3: 49.5,
    __4: 49.5,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 59,
    "": "Pepsi King",
    __1: "550ML",
    __2: 241.6,
    __3: 60.5,
    __4: 60.5,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 60,
    "": "Pepsi Float",
    __1: "275ML",
    __2: 172.7,
    __3: 34.8,
    __4: 25.5,
    __5: 2.5,
    __6: 2,
    __7: 0,
    __8: 2.8,
    __9: "NA",
  },
  {
    "Burger King India": 61,
    "": "Mirinda Float",
    __1: "275ML",
    __2: 213.2,
    __3: 33.6,
    __4: 32.9,
    __5: 6.7,
    __6: 4.3,
    __7: 0,
    __8: 4.7,
    __9: "NA",
  },
  {
    "Burger King India": 62,
    "": "Ice tea Regular",
    __1: "300ML",
    __2: 108.1,
    __3: 26.6,
    __4: 23.9,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 63,
    "": "Ice tea Medium",
    __1: "450ML",
    __2: 162.2,
    __3: 40,
    __4: 35.9,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 64,
    "": "Ice tea Large",
    __1: "550ML",
    __2: 198.2,
    __3: 48.8,
    __4: 43.9,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 65,
    "": "Limey Fizz",
    __1: "300ML",
    __2: 211.4,
    __3: 52.4,
    __4: 43.9,
    __5: 0,
    __6: 0,
    __7: 0,
    __8: 0,
    __9: 100,
  },
  {
    "Burger King India": 66,
    "": "Tomato Ketchup",
    __1: 8,
    __2: 14.2,
    __3: 3.5,
    __4: 3.1,
    __5: 0.1,
    __6: 0,
    __7: 0,
    __8: 0.1,
    __9: 100,
  },
  {
    "Burger King India": 67,
    "": "Vanilla Softie",
    __1: 90,
    __2: 94.1,
    __3: 16.7,
    __4: 12.1,
    __5: 2.1,
    __6: 1.6,
    __7: 0,
    __8: 0,
    __9: "NA",
  },
  {
    "Burger King India": 68,
    "": "Choco Dip Softie",
    __1: 105,
    __2: 204.7,
    __3: 29,
    __4: 16.4,
    __5: 8.5,
    __6: 6.4,
    __7: 0,
    __8: 3,
    __9: "NA",
  },
  {
    "Burger King India": 69,
    "": "BK Sundae- Mango",
    __1: 85,
    __2: 108.1,
    __3: 17.9,
    __4: 3.5,
    __5: 3.1,
    __6: 2.1,
    __7: 0,
    __8: 2.3,
    __9: "NA",
  },
  {
    "Burger King India": 70,
    "": "BK Sundae - Strawberry",
    __1: 85,
    __2: 130.6,
    __3: 24.6,
    __4: 20.1,
    __5: 2.8,
    __6: 2.1,
    __7: 0,
    __8: 1.9,
    __9: "NA",
  },
  {
    "Burger King India": 71,
    "": "BK Sundae - Chocolate",
    __1: 85,
    __2: 134.3,
    __3: 24.2,
    __4: 20,
    __5: 2.9,
    __6: 2.2,
    __7: 0,
    __8: 3.2,
    __9: "NA",
  },
  {
    "Burger King India": 72,
    "": "BK Sundae-Black currant",
    __1: 90,
    __2: 208.8,
    __3: 31,
    __4: 20.7,
    __5: 8,
    __6: 5,
    __7: 0,
    __8: 3.2,
    __9: 100,
  },
  {
    "Burger King India": 73,
    "": "BK Sundae- Cookie crunch",
    __1: 105,
    __2: 213.3,
    __3: 38,
    __4: 23.5,
    __5: 4.5,
    __6: 3,
    __7: 0,
    __8: 5.1,
    __9: "NA",
  },
  {
    "Burger King India": 74,
    "": "Strawberry Smoothie",
    __1: "275ML",
    __2: 446.6,
    __3: 72.3,
    __4: 49.4,
    __5: 11,
    __6: 8.2,
    __7: 0,
    __8: 26.8,
    __9: "NA",
  },
  {
    "Burger King India": 75,
    "": "Black currnat Smoothie",
    __1: "275ML",
    __2: 465.6,
    __3: 86.1,
    __4: 71.1,
    __5: 8.7,
    __6: 7.2,
    __7: 0,
    __8: 13.8,
    __9: "NA",
  },
  {
    "Burger King India": 76,
    "": "Thick Shake- Chocholate",
    __1: "275ML",
    __2: 417.3,
    __3: 75.7,
    __4: 59.7,
    __5: 8.5,
    __6: 6.4,
    __7: 0,
    __8: 9.5,
    __9: "NA",
  },
  {
    "Burger King India": 77,
    "": "Thick Shake-Mango",
    __1: "275ML",
    __2: 340,
    __3: 57,
    __4: 46.8,
    __5: 9.6,
    __6: 7.1,
    __7: 0,
    __8: 6.5,
    __9: "NA",
  },
  {
    "Burger King India": 78,
    "": "Thick Shake- Strawberry",
    __1: "275ML",
    __2: 385.3,
    __3: 67.9,
    __4: 50.1,
    __5: 9.7,
    __6: 7.4,
    __7: 0,
    __8: 6.5,
    __9: "NA",
  },
  {
    "Burger King India": 79,
    "": "King Shake- Cookie crumble",
    __1: "275ML",
    __2: 542.1,
    __3: 92.7,
    __4: 59.4,
    __5: 15.2,
    __6: 8.8,
    __7: 0.1,
    __8: 11.9,
    __9: "NA",
  },
  {
    "Burger King India": 80,
    "": "King Shake- Black currant",
    __1: "275ML",
    __2: 447.5,
    __3: 76.5,
    __4: 57.2,
    __5: 13,
    __6: 6.4,
    __7: 0.1,
    __8: 14,
    __9: "NA",
  },
  {
    "Burger King India":
      "The nutrition analysis is done by internationally recognized, NABL accredited and ISO 17025 certified laboratory and information provided by Burger King India suppliers. It is based on standard product formulations per serving. Variations in serve sizes, preparation process, sources of supply including seasonal changes/geographical/ weather conditions may impact nutritional values of the menu items. The data provided here is approximate and indicative. The data is being provided with the intent to help customers make informed choices at Burger King India. The data here is subject to change at any time without prior notice. This information is current as of Sept-19.\n* Proprietry products: Vanilla Softie,Choco Dip softie,Strawberry Sundae and Chocolate Sundae, Mango sundae, Black currant sande, Strawberry, Black currant Smoothie, Straberry shake, black currant shake, Mango shake, Chocolate shake, cookie crumble shake",
    "": "",
    __1: "",
    __2: "",
    __3: "",
    __4: "",
    __5: "",
    __6: "",
    __7: "",
    __8: "",
    __9: "",
  },
];

export default NutritionTable;
