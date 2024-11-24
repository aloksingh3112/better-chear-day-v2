'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pizza, Search, AlertCircle } from "lucide-react";
import { pizzaHutData } from '@/data/pizza-hut';



const isVeg = (name) => {
    if (!name) return false;
    const lowerName = name.toLowerCase();
    return lowerName.includes('margherita') ||
        lowerName.includes('veggie') ||
        lowerName.includes('garden');
};

const NutritionTable = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = pizzaHutData.filter(item =>
        item?.Products ? item.Products.toLowerCase().includes(searchTerm.toLowerCase()) : false
    );

    return (
        <Card className="w-full bg-white">
            <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-[#EE3124]/90 to-[#FF4436]/90">
                <div className="flex items-center gap-4">
                    <div className="bg-white/95 p-3 rounded-xl shadow-lg">
                        <Pizza className="h-8 w-8 text-[#EE3124]" />
                    </div>
                    <div className="space-y-1">
                        <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                            Pizza Hut
                        </CardTitle>
                        <p className="text-red-100/80">Nutrition Information</p>
                    </div>
                </div>

                {/* Search Box */}
                <div className="mt-6">
                    <div className="relative max-w-md">
                        <Input
                            placeholder="Search menu items..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-white/95 border-0 focus:ring-2 focus:ring-red-300 shadow-lg placeholder:text-gray-400 h-11 text-base"
                        />
                        <span className="absolute left-3 top-3 text-red-400">
                            <Search className="h-5 w-5" />
                        </span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-8">
                {/* Desktop Table View */}
                <div className="hidden md:block">
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="bg-gradient-to-r from-[#EE3124]/5 to-red-50 px-6 py-4 text-left">
                                            <div className="text-sm font-semibold text-gray-900">Item</div>
                                        </th>
                                        <th className="bg-gradient-to-r from-[#EE3124]/5 to-red-50 px-4 py-4 text-left">
                                            <div className="text-sm font-semibold text-gray-900">Weight</div>
                                        </th>
                                        <th className="bg-gradient-to-r from-[#EE3124]/5 to-red-50 px-4 py-4 text-left">
                                            <div className="text-sm font-semibold text-gray-900">Slices</div>
                                        </th>
                                        <th className="bg-gradient-to-r from-[#EE3124]/5 to-red-50 px-4 py-4 text-right">
                                            <div className="text-sm font-semibold text-gray-900">Energy</div>
                                        </th>
                                        <th className="bg-gradient-to-r from-[#EE3124]/5 to-red-50 px-4 py-4 text-right">
                                            <div className="text-sm font-semibold text-gray-900">Protein</div>
                                        </th>
                                        <th className="bg-gradient-to-r from-[#EE3124]/5 to-red-50 px-4 py-4 text-right">
                                            <div className="text-sm font-semibold text-gray-900">Carbs</div>
                                        </th>
                                        <th className="bg-gradient-to-r from-[#EE3124]/5 to-red-50 px-4 py-4 text-right">
                                            <div className="text-sm font-semibold text-gray-900">Fat</div>
                                        </th>
                                        <th className="bg-gradient-to-r from-[#EE3124]/5 to-red-50 px-4 py-4 text-right">
                                            <div className="text-sm font-semibold text-gray-900">Sodium</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredData.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="group hover:bg-red-50/50 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-2 h-2 rounded-full ${isVeg(item.Products) ? "bg-green-500" : "bg-red-500"}`} />
                                                    <span className="font-medium text-gray-900">{item.Products}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-gray-700">{item["Net Weight (g)"]} g</div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-gray-700">{item["No of Slices/Pizza"]}</div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-right font-medium text-gray-900">
                                                    {item["Energy (kcal"]} kcal
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-right text-gray-700">{item["Protein (g)"]} g</div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-right text-gray-700">{item["Carbohydrate (g)"]} g</div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-right text-gray-700">{item["Total Fat(g)"]} g</div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-right text-gray-700">{item["Sodium (mg)"]} mg</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Allergen Information Row */}
                        {/* {filteredData.map((item, index) => (
                            <div key={index} className="bg-red-50/30 px-6 py-3 border-t border-red-100/50">
                                <div className="flex items-start gap-2">
                                    <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-600">
                                        {item["Allergen\nInformation"]}
                                    </p>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>

                {/* Mobile Card View - Keeping the same as before */}
                <div className="md:hidden space-y-4">
                    {filteredData.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-gray-200 p-4 hover:bg-red-50 transition-colors duration-200 shadow-sm"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${isVeg(item.Products) ? "bg-green-500" : "bg-red-500"}`} />
                                        <h3 className="font-bold text-gray-900">{item.Products}</h3>
                                    </div>
                                    <div className="flex gap-2 mt-1">
                                        <span className="text-sm text-gray-600">
                                            {item["Net Weight (g)"]}g
                                        </span>
                                        <span className="text-sm text-gray-600">
                                            {item["No of Slices/Pizza"]} slices
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-red-100 px-3 py-1 rounded-full">
                                    <span className="text-red-600 font-bold">
                                        {item["Energy (kcal)"]}
                                    </span>
                                    <span className="text-red-500 text-sm ml-1">kcal</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <div className="text-center p-2 bg-red-50 rounded-lg">
                                    <div className="text-xs text-gray-600">Protein</div>
                                    <div className="font-bold text-gray-900">
                                        {item["Protein (g)"]}g
                                    </div>
                                </div>
                                <div className="text-center p-2 bg-red-50 rounded-lg">
                                    <div className="text-xs text-gray-600">Carbs</div>
                                    <div className="font-bold text-gray-900">
                                        {item["Carbohydrate (g)"]}g
                                    </div>
                                </div>
                                <div className="text-center p-2 bg-red-50 rounded-lg">
                                    <div className="text-xs text-gray-600">Fat</div>
                                    <div className="font-bold text-gray-900">
                                        {item["Total Fat(g)"]}g
                                    </div>
                                </div>
                            </div>

                            {/* Allergen Information */}
                            <div className="mt-4 pt-3 border-t border-gray-200">
                                <div className="flex items-start gap-2">
                                    <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-600">
                                        {item["Allergen\nInformation"]}
                                    </p>
                                </div>
                            </div>

                            {/* Detailed Nutrition */}
                            <div className="mt-4 pt-3 border-t border-gray-200 grid grid-cols-2 gap-3">
                                <div>
                                    <div className="text-sm text-gray-600">Saturated Fat</div>
                                    <div className="font-medium text-gray-900">{item["Saturated Fat (g)"]}g</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">Trans Fat</div>
                                    <div className="font-medium text-gray-900">{item["Transfat (g)"]}g</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">Dietary Fiber</div>
                                    <div className="font-medium text-gray-900">{item["Dietary Fibre (g)"]}g</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">Cholesterol</div>
                                    <div className="font-medium text-gray-900">{item["Cholesterol (mg)"]}mg</div>
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



