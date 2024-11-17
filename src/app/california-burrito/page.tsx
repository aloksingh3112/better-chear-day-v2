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

const CATEGORIES = [
  { id: "rice-bowl", name: "Rice Bowl", icon: Wheat },
  { id: "burrito", name: "Burrito", icon: Sandwich },
  { id: "nachos", name: "Nachos", icon: Pizza },
  { id: "tacos", name: "Tacos", icon: Sandwich },
  { id: "salad", name: "Salad", icon: Salad },
  { id: "extras", name: "Extras", icon: Plus },
];

const data = [
  {
    ITEMS: "RICE  BOWLS",
    "TOTAL CALORIES\n(Kcal)": "",
    "TOTAL FAT\n(g)": "",
    "PROTEIN\n(g)": "",
    "TOTAL CARBS\n(g)": "",
  },
  {
    ITEMS: "BBQ Chicken Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 719,
    "TOTAL FAT\n(g)": 20,
    "PROTEIN\n(g)": 41,
    "TOTAL CARBS\n(g)": 98,
  },
  {
    ITEMS: "Crispy Peri Peri Chicken Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 749,
    "TOTAL FAT\n(g)": 28,
    "PROTEIN\n(g)": 40,
    "TOTAL CARBS\n(g)": 104,
  },
  {
    ITEMS: "Chili Chipotle Chicken Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 725,
    "TOTAL FAT\n(g)": 20,
    "PROTEIN\n(g)": 42,
    "TOTAL CARBS\n(g)": 98,
  },
  {
    ITEMS: "Mexican Paneer Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 792,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 36,
    "TOTAL CARBS\n(g)": 98,
  },
  {
    ITEMS: "BBQ Paneer Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 792,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 36,
    "TOTAL CARBS\n(g)": 99,
  },
  {
    ITEMS: "Peri Peri Potato Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 735,
    "TOTAL FAT\n(g)": 25,
    "PROTEIN\n(g)": 24,
    "TOTAL CARBS\n(g)": 114,
  },
  {
    ITEMS: "Crispy Mushroom Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 748,
    "TOTAL FAT\n(g)": 27,
    "PROTEIN\n(g)": 28,
    "TOTAL CARBS\n(g)": 108,
  },
  {
    ITEMS: "Mixed Veg Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 682,
    "TOTAL FAT\n(g)": 16,
    "PROTEIN\n(g)": 26,
    "TOTAL CARBS\n(g)": 115,
  },
  {
    ITEMS: "Fajita Veg Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 582,
    "TOTAL FAT\n(g)": 23,
    "PROTEIN\n(g)": 24,
    "TOTAL CARBS\n(g)": 103,
  },
  {
    ITEMS: "Mini BBQ Chicken Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 570,
    "TOTAL FAT\n(g)": 15,
    "PROTEIN\n(g)": 36,
    "TOTAL CARBS\n(g)": 77,
  },
  {
    ITEMS: "Mini Crispy Peri Peri Chicken Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 600,
    "TOTAL FAT\n(g)": 23,
    "PROTEIN\n(g)": 35,
    "TOTAL CARBS\n(g)": 83,
  },
  {
    ITEMS: "Mini Chili Chipotle Chicken Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 577,
    "TOTAL FAT\n(g)": 16,
    "PROTEIN\n(g)": 37,
    "TOTAL CARBS\n(g)": 77,
  },
  {
    ITEMS: "Mini Mexican Paneer Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 644,
    "TOTAL FAT\n(g)": 27,
    "PROTEIN\n(g)": 31,
    "TOTAL CARBS\n(g)": 77,
  },
  {
    ITEMS: "Mini BBQ Paneer Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 792,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 36,
    "TOTAL CARBS\n(g)": 99,
  },
  {
    ITEMS: "Mini Peri Peri Potato Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 587,
    "TOTAL FAT\n(g)": 21,
    "PROTEIN\n(g)": 19,
    "TOTAL CARBS\n(g)": 93,
  },
  {
    ITEMS: "Mini Crispy Mushroom Bowl",
    "TOTAL CALORIES\n(Kcal)": 792,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 36,
    "TOTAL CARBS\n(g)": 99,
  },
  {
    ITEMS: "Mini Mixed Veg Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 533,
    "TOTAL FAT\n(g)": 12,
    "PROTEIN\n(g)": 21,
    "TOTAL CARBS\n(g)": 94,
  },
  {
    ITEMS: "Mini Fajita Veg Rice Bowl",
    "TOTAL CALORIES\n(Kcal)": 540,
    "TOTAL FAT\n(g)": 20,
    "PROTEIN\n(g)": 22,
    "TOTAL CARBS\n(g)": 97,
  },
  {
    ITEMS: "BURRITOS",
    "TOTAL CALORIES\n(Kcal)": "",
    "TOTAL FAT\n(g)": "",
    "PROTEIN\n(g)": "",
    "TOTAL CARBS\n(g)": "",
  },
  {
    ITEMS: "BBQ Chicken Burrito",
    "TOTAL CALORIES\n(Kcal)": 793,
    "TOTAL FAT\n(g)": 24,
    "PROTEIN\n(g)": 43,
    "TOTAL CARBS\n(g)": 105,
  },
  {
    ITEMS: "Crispy Peri Peri Chicken Burrito",
    "TOTAL CALORIES\n(Kcal)": 823,
    "TOTAL FAT\n(g)": 32,
    "PROTEIN\n(g)": 42,
    "TOTAL CARBS\n(g)": 111,
  },
  {
    ITEMS: "Chili Chipotle Chicken Burrito",
    "TOTAL CALORIES\n(Kcal)": 800,
    "TOTAL FAT\n(g)": 25,
    "PROTEIN\n(g)": 44,
    "TOTAL CARBS\n(g)": 104,
  },
  {
    ITEMS: "Mexican Paneer Burrito",
    "TOTAL CALORIES\n(Kcal)": 867,
    "TOTAL FAT\n(g)": 35,
    "PROTEIN\n(g)": 38,
    "TOTAL CARBS\n(g)": 105,
  },
  {
    ITEMS: "BBQ Paneer Burrito",
    "TOTAL CALORIES\n(Kcal)": 656,
    "TOTAL FAT\n(g)": 41,
    "PROTEIN\n(g)": 41,
    "TOTAL CARBS\n(g)": 115,
  },
  {
    ITEMS: "Peri Peri Potato Burrito",
    "TOTAL CALORIES\n(Kcal)": 810,
    "TOTAL FAT\n(g)": 29,
    "PROTEIN\n(g)": 26,
    "TOTAL CARBS\n(g)": 121,
  },
  {
    ITEMS: "Crispy Mushroom Burrito",
    "TOTAL CALORIES\n(Kcal)": 816,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 26,
    "TOTAL CARBS\n(g)": 115,
  },
  {
    ITEMS: "Mixed Veg Burrito",
    "TOTAL CALORIES\n(Kcal)": 756,
    "TOTAL FAT\n(g)": 20,
    "PROTEIN\n(g)": 28,
    "TOTAL CARBS\n(g)": 122,
  },
  {
    ITEMS: "Fajita Veg Burrito",
    "TOTAL CALORIES\n(Kcal)": 654,
    "TOTAL FAT\n(g)": 25,
    "PROTEIN\n(g)": 26,
    "TOTAL CARBS\n(g)": 109,
  },
  {
    ITEMS: "BBQ Mini Chicken Burrito",
    "TOTAL CALORIES\n(Kcal)": 677,
    "TOTAL FAT\n(g)": 19,
    "PROTEIN\n(g)": 39,
    "TOTAL CARBS\n(g)": 92,
  },
  {
    ITEMS: "Mini Crispy Peri Peri Chicken Burrito",
    "TOTAL CALORIES\n(Kcal)": 707,
    "TOTAL FAT\n(g)": 27,
    "PROTEIN\n(g)": 38,
    "TOTAL CARBS\n(g)": 98,
  },
  {
    ITEMS: "Mini Chili Chipotle Chicken Burrito",
    "TOTAL CALORIES\n(Kcal)": 683,
    "TOTAL FAT\n(g)": 20,
    "PROTEIN\n(g)": 39,
    "TOTAL CARBS\n(g)": 92,
  },
  {
    ITEMS: "Mini Mexican Paneer Burrito",
    "TOTAL CALORIES\n(Kcal)": 750,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 33,
    "TOTAL CARBS\n(g)": 92,
  },
  {
    ITEMS: "Mini BBQ Paneer Burrito",
    "TOTAL CALORIES\n(Kcal)": 750,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 33,
    "TOTAL CARBS\n(g)": 93,
  },
  {
    ITEMS: "Mini Peri Peri Potato Burrito",
    "TOTAL CALORIES\n(Kcal)": 693,
    "TOTAL FAT\n(g)": 25,
    "PROTEIN\n(g)": 22,
    "TOTAL CARBS\n(g)": 108,
  },
  {
    ITEMS: "Mini Crispy Mushroom Burrito",
    "TOTAL CALORIES\n(Kcal)": 700,
    "TOTAL FAT\n(g)": 26,
    "PROTEIN\n(g)": 22,
    "TOTAL CARBS\n(g)": 102,
  },
  {
    ITEMS: "Mini Mixed Veg Burrito",
    "TOTAL CALORIES\n(Kcal)": 640,
    "TOTAL FAT\n(g)": 16,
    "PROTEIN\n(g)": 24,
    "TOTAL CARBS\n(g)": 109,
  },
  {
    ITEMS: "Mini Fajita Veg Burrito",
    "TOTAL CALORIES\n(Kcal)": 540,
    "TOTAL FAT\n(g)": 21,
    "PROTEIN\n(g)": 22,
    "TOTAL CARBS\n(g)": 97,
  },
  {
    ITEMS: "NACHOS",
    "TOTAL CALORIES\n(Kcal)": "",
    "TOTAL FAT\n(g)": "",
    "PROTEIN\n(g)": "",
    "TOTAL CARBS\n(g)": "",
  },
  {
    ITEMS: "BBQ Chicken Nachos",
    "TOTAL CALORIES\n(Kcal)": 745,
    "TOTAL FAT\n(g)": 29,
    "PROTEIN\n(g)": 39,
    "TOTAL CARBS\n(g)": 81,
  },
  {
    ITEMS: "Crispy Peri Peri Chicken Nachos",
    "TOTAL CALORIES\n(Kcal)": 775,
    "TOTAL FAT\n(g)": 37,
    "PROTEIN\n(g)": 38,
    "TOTAL CARBS\n(g)": 87,
  },
  {
    ITEMS: "Chili Chipotle Chicken Nachos",
    "TOTAL CALORIES\n(Kcal)": 751,
    "TOTAL FAT\n(g)": 29,
    "PROTEIN\n(g)": 39,
    "TOTAL CARBS\n(g)": 80,
  },
  {
    ITEMS: "Mexican Paneer Nachos",
    "TOTAL CALORIES\n(Kcal)": 818,
    "TOTAL FAT\n(g)": 40,
    "PROTEIN\n(g)": 33,
    "TOTAL CARBS\n(g)": 81,
  },
  {
    ITEMS: "BBQ Paneer Nachos",
    "TOTAL CALORIES\n(Kcal)": 818,
    "TOTAL FAT\n(g)": 40,
    "PROTEIN\n(g)": 33,
    "TOTAL CARBS\n(g)": 82,
  },
  {
    ITEMS: "Peri Peri Potato Nachos",
    "TOTAL CALORIES\n(Kcal)": 761,
    "TOTAL FAT\n(g)": 34,
    "PROTEIN\n(g)": 22,
    "TOTAL CARBS\n(g)": 97,
  },
  {
    ITEMS: "Crispy Mushroom Nachos",
    "TOTAL CALORIES\n(Kcal)": 768,
    "TOTAL FAT\n(g)": 35,
    "PROTEIN\n(g)": 22,
    "TOTAL CARBS\n(g)": 91,
  },
  {
    ITEMS: "Mixed Veg Nachos",
    "TOTAL CALORIES\n(Kcal)": 708,
    "TOTAL FAT\n(g)": 25,
    "PROTEIN\n(g)": 24,
    "TOTAL CARBS\n(g)": 98,
  },
  {
    ITEMS: "Fajita Veg Nachos",
    "TOTAL CALORIES\n(Kcal)": 608,
    "TOTAL FAT\n(g)": 25,
    "PROTEIN\n(g)": 22,
    "TOTAL CARBS\n(g)": 85,
  },
  {
    ITEMS: "Mini BBQ Chicken Nachos",
    "TOTAL CALORIES\n(Kcal)": 601,
    "TOTAL FAT\n(g)": 23,
    "PROTEIN\n(g)": 35,
    "TOTAL CARBS\n(g)": 65,
  },
  {
    ITEMS: "Mini Crispy Peri Peri Chicken Nachos",
    "TOTAL CALORIES\n(Kcal)": 631,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 34,
    "TOTAL CARBS\n(g)": 71,
  },
  {
    ITEMS: "Mini Chili Chipotle Chicken Nachos",
    "TOTAL CALORIES\n(Kcal)": 608,
    "TOTAL FAT\n(g)": 23,
    "PROTEIN\n(g)": 35,
    "TOTAL CARBS\n(g)": 64,
  },
  {
    ITEMS: "Mini Mexican Paneer Nachos",
    "TOTAL CALORIES\n(Kcal)": 675,
    "TOTAL FAT\n(g)": 34,
    "PROTEIN\n(g)": 29,
    "TOTAL CARBS\n(g)": 65,
  },
  {
    ITEMS: "Mini BBQ Paneer Nachos",
    "TOTAL CALORIES\n(Kcal)": 675,
    "TOTAL FAT\n(g)": 34,
    "PROTEIN\n(g)": 29,
    "TOTAL CARBS\n(g)": 65,
  },
  {
    ITEMS: "Mini Peri Peri Potato Nachos",
    "TOTAL CALORIES\n(Kcal)": 618,
    "TOTAL FAT\n(g)": 28,
    "PROTEIN\n(g)": 18,
    "TOTAL CARBS\n(g)": 80,
  },
  {
    ITEMS: "Mini Crispy Mushroom Nachos",
    "TOTAL CALORIES\n(Kcal)": 624,
    "TOTAL FAT\n(g)": 29,
    "PROTEIN\n(g)": 18,
    "TOTAL CARBS\n(g)": 74,
  },
  {
    ITEMS: "Mini Mixed Veg Nachos",
    "TOTAL CALORIES\n(Kcal)": 564,
    "TOTAL FAT\n(g)": 19,
    "PROTEIN\n(g)": 20,
    "TOTAL CARBS\n(g)": 81,
  },
  {
    ITEMS: "Mini Fajita Veg Nachos",
    "TOTAL CALORIES\n(Kcal)": 464,
    "TOTAL FAT\n(g)": 20,
    "PROTEIN\n(g)": 17,
    "TOTAL CARBS\n(g)": 69,
  },
  {
    ITEMS: "SALAD",
    "TOTAL CALORIES\n(Kcal)": "",
    "TOTAL FAT\n(g)": "",
    "PROTEIN\n(g)": "",
    "TOTAL CARBS\n(g)": "",
  },
  {
    ITEMS: "BBQ Chicken Salad",
    "TOTAL CALORIES\n(Kcal)": 459,
    "TOTAL FAT\n(g)": 15,
    "PROTEIN\n(g)": 35,
    "TOTAL CARBS\n(g)": 50,
  },
  {
    ITEMS: "Crispy Peri Peri Chicken Salad",
    "TOTAL CALORIES\n(Kcal)": 489,
    "TOTAL FAT\n(g)": 23,
    "PROTEIN\n(g)": 34,
    "TOTAL CARBS\n(g)": 56,
  },
  {
    ITEMS: "Chili Chipotle Chicken Salad",
    "TOTAL CALORIES\n(Kcal)": 466,
    "TOTAL FAT\n(g)": 16,
    "PROTEIN\n(g)": 35,
    "TOTAL CARBS\n(g)": 49,
  },
  {
    ITEMS: "Mexican Paneer Salad",
    "TOTAL CALORIES\n(Kcal)": 533,
    "TOTAL FAT\n(g)": 27,
    "PROTEIN\n(g)": 29,
    "TOTAL CARBS\n(g)": 50,
  },
  {
    ITEMS: "BBQ Paneer Salad",
    "TOTAL CALORIES\n(Kcal)": 533,
    "TOTAL FAT\n(g)": 27,
    "PROTEIN\n(g)": 29,
    "TOTAL CARBS\n(g)": 51,
  },
  {
    ITEMS: "Peri Peri Potato Salad",
    "TOTAL CALORIES\n(Kcal)": 476,
    "TOTAL FAT\n(g)": 21,
    "PROTEIN\n(g)": 18,
    "TOTAL CARBS\n(g)": 65,
  },
  {
    ITEMS: "Crispy Mushroom Salad",
    "TOTAL CALORIES\n(Kcal)": 482,
    "TOTAL FAT\n(g)": 22,
    "PROTEIN\n(g)": 18,
    "TOTAL CARBS\n(g)": 59,
  },
  {
    ITEMS: "Mixed Veg Salad",
    "TOTAL CALORIES\n(Kcal)": 422,
    "TOTAL FAT\n(g)": 12,
    "PROTEIN\n(g)": 20,
    "TOTAL CARBS\n(g)": 67,
  },
  {
    ITEMS: "Fajita Veg Salad",
    "TOTAL CALORIES\n(Kcal)": 322,
    "TOTAL FAT\n(g)": 18,
    "PROTEIN\n(g)": 18,
    "TOTAL CARBS\n(g)": 54,
  },
  {
    ITEMS: "Mini BBQ Chicken Salad",
    "TOTAL CALORIES\n(Kcal)": 362,
    "TOTAL FAT\n(g)": 12,
    "PROTEIN\n(g)": 31,
    "TOTAL CARBS\n(g)": 38,
  },
  {
    ITEMS: "Mini Crispy Peri Peri Chicken Salad",
    "TOTAL CALORIES\n(Kcal)": 392,
    "TOTAL FAT\n(g)": 20,
    "PROTEIN\n(g)": 30,
    "TOTAL CARBS\n(g)": 45,
  },
  {
    ITEMS: "Mini Chili Chipotle Chicken Salad",
    "TOTAL CALORIES\n(Kcal)": 369,
    "TOTAL FAT\n(g)": 12,
    "PROTEIN\n(g)": 32,
    "TOTAL CARBS\n(g)": 38,
  },
  {
    ITEMS: "Mini Mexican Paneer Salad",
    "TOTAL CALORIES\n(Kcal)": 436,
    "TOTAL FAT\n(g)": 23,
    "PROTEIN\n(g)": 26,
    "TOTAL CARBS\n(g)": 38,
  },
  {
    ITEMS: "Mini BBQ Paneer Salad",
    "TOTAL CALORIES\n(Kcal)": 436,
    "TOTAL FAT\n(g)": 23,
    "PROTEIN\n(g)": 26,
    "TOTAL CARBS\n(g)": 39,
  },
  {
    ITEMS: "Mini Peri Peri Potato Salad",
    "TOTAL CALORIES\n(Kcal)": 379,
    "TOTAL FAT\n(g)": 18,
    "PROTEIN\n(g)": 14,
    "TOTAL CARBS\n(g)": 54,
  },
  {
    ITEMS: "Mini Crispy Mushroom Salad",
    "TOTAL CALORIES\n(Kcal)": 385,
    "TOTAL FAT\n(g)": 17,
    "PROTEIN\n(g)": 14,
    "TOTAL CARBS\n(g)": 48,
  },
  {
    ITEMS: "Mini Mixed Veg Salad",
    "TOTAL CALORIES\n(Kcal)": 325,
    "TOTAL FAT\n(g)": 8,
    "PROTEIN\n(g)": 16,
    "TOTAL CARBS\n(g)": 55,
  },
  {
    ITEMS: "Mini Fajita Veg Salad",
    "TOTAL CALORIES\n(Kcal)": 255,
    "TOTAL FAT\n(g)": 15,
    "PROTEIN\n(g)": 14,
    "TOTAL CARBS\n(g)": 43,
  },
  {
    ITEMS: "TACOS",
    "TOTAL CALORIES\n(Kcal)": "",
    "TOTAL FAT\n(g)": "",
    "PROTEIN\n(g)": "",
    "TOTAL CARBS\n(g)": "",
  },
  {
    ITEMS: "BBQ Chicken Tacos",
    "TOTAL CALORIES\n(Kcal)": 738,
    "TOTAL FAT\n(g)": 23,
    "PROTEIN\n(g)": 40,
    "TOTAL CARBS\n(g)": 95,
  },
  {
    ITEMS: "BBQ Chicken Tacos -Crunchy",
    "TOTAL CALORIES\n(Kcal)": 852,
    "TOTAL FAT\n(g)": 30,
    "PROTEIN\n(g)": 42,
    "TOTAL CARBS\n(g)": 101,
  },
  {
    ITEMS: "Crispy Peri Peri Chicken Tacos",
    "TOTAL CALORIES\n(Kcal)": 768,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 39,
    "TOTAL CARBS\n(g)": 101,
  },
  {
    ITEMS: "Crispy Peri Peri Chicken Tacos - Crunchy",
    "TOTAL CALORIES\n(Kcal)": 882,
    "TOTAL FAT\n(g)": 39,
    "PROTEIN\n(g)": 41,
    "TOTAL CARBS\n(g)": 107,
  },
  {
    ITEMS: "Chili Chipotle Chicken Tacos",
    "TOTAL CALORIES\n(Kcal)": 745,
    "TOTAL FAT\n(g)": 24,
    "PROTEIN\n(g)": 41,
    "TOTAL CARBS\n(g)": 94,
  },
  {
    ITEMS: "Chili Chipotle Chicken Tacos - Crunchy",
    "TOTAL CALORIES\n(Kcal)": 859,
    "TOTAL FAT\n(g)": 31,
    "PROTEIN\n(g)": 42,
    "TOTAL CARBS\n(g)": 100,
  },
  {
    ITEMS: "Mexican Paneer Tacos",
    "TOTAL CALORIES\n(Kcal)": 812,
    "TOTAL FAT\n(g)": 34,
    "PROTEIN\n(g)": 35,
    "TOTAL CARBS\n(g)": 95,
  },
  {
    ITEMS: "Mexican Paneer Tacos - Crunchy",
    "TOTAL CALORIES\n(Kcal)": 926,
    "TOTAL FAT\n(g)": 42,
    "PROTEIN\n(g)": 36,
    "TOTAL CARBS\n(g)": 101,
  },
  {
    ITEMS: "BBQ Paneer Tacos",
    "TOTAL CALORIES\n(Kcal)": 812,
    "TOTAL FAT\n(g)": 34,
    "PROTEIN\n(g)": 35,
    "TOTAL CARBS\n(g)": 96,
  },
  {
    ITEMS: "BBQ Paneer Tacos - Crunchy",
    "TOTAL CALORIES\n(Kcal)": 926,
    "TOTAL FAT\n(g)": 42,
    "PROTEIN\n(g)": 36,
    "TOTAL CARBS\n(g)": 102,
  },
  {
    ITEMS: "Peri Peri Potato Tacos",
    "TOTAL CALORIES\n(Kcal)": 755,
    "TOTAL FAT\n(g)": 28,
    "PROTEIN\n(g)": 23,
    "TOTAL CARBS\n(g)": 111,
  },
  {
    ITEMS: "Peri Peri Potato Tacos - Crunchy",
    "TOTAL CALORIES\n(Kcal)": 869,
    "TOTAL FAT\n(g)": 36,
    "PROTEIN\n(g)": 25,
    "TOTAL CARBS\n(g)": 117,
  },
  {
    ITEMS: "Crispy Mushroom Tacos",
    "TOTAL CALORIES\n(Kcal)": 761,
    "TOTAL FAT\n(g)": 30,
    "PROTEIN\n(g)": 23,
    "TOTAL CARBS\n(g)": 105,
  },
  {
    ITEMS: "Crispy Mushroom Tacos - Crunchy",
    "TOTAL CALORIES\n(Kcal)": 875,
    "TOTAL FAT\n(g)": 37,
    "PROTEIN\n(g)": 25,
    "TOTAL CARBS\n(g)": 111,
  },
  {
    ITEMS: "Mixed Veg Tacos",
    "TOTAL CALORIES\n(Kcal)": 701,
    "TOTAL FAT\n(g)": 19,
    "PROTEIN\n(g)": 25,
    "TOTAL CARBS\n(g)": 112,
  },
  {
    ITEMS: "Mixed Veg Tacos - Crunchy",
    "TOTAL CALORIES\n(Kcal)": 815,
    "TOTAL FAT\n(g)": 27,
    "PROTEIN\n(g)": 27,
    "TOTAL CARBS\n(g)": 118,
  },
  {
    ITEMS: "Fajita VegTacos",
    "TOTAL CALORIES\n(Kcal)": 601,
    "TOTAL FAT\n(g)": 21,
    "PROTEIN\n(g)": 23,
    "TOTAL CARBS\n(g)": 99,
  },
  {
    ITEMS: "Fajita VegTacos - Crunchy",
    "TOTAL CALORIES\n(Kcal)": 715,
    "TOTAL FAT\n(g)": 18,
    "PROTEIN\n(g)": 25,
    "TOTAL CARBS\n(g)": 105,
  },
  {
    ITEMS: "EXTRAS",
    "TOTAL CALORIES\n(Kcal)": "",
    "TOTAL FAT\n(g)": "",
    "PROTEIN\n(g)": "",
    "TOTAL CARBS\n(g)": "",
  },
  {
    ITEMS: "Extra BBQ Chicken",
    "TOTAL CALORIES\n(Kcal)": 137,
    "TOTAL FAT\n(g)": 5,
    "PROTEIN\n(g)": 19,
    "TOTAL CARBS\n(g)": 3,
  },
  {
    ITEMS: "Extra Mexican Paneer",
    "TOTAL CALORIES\n(Kcal)": 211,
    "TOTAL FAT\n(g)": 17,
    "PROTEIN\n(g)": 13,
    "TOTAL CARBS\n(g)": 3,
  },
  {
    ITEMS: "Extra BBQ Paneer",
    "TOTAL CALORIES\n(Kcal)": 211,
    "TOTAL FAT\n(g)": 17,
    "PROTEIN\n(g)": 13,
    "TOTAL CARBS\n(g)": 4,
  },
  {
    ITEMS: "Extra Crispy Mushroom",
    "TOTAL CALORIES\n(Kcal)": 161,
    "TOTAL FAT\n(g)": 12,
    "PROTEIN\n(g)": 2,
    "TOTAL CARBS\n(g)": 13,
  },
  {
    ITEMS: "Extra Crispy PeriPeri Chicken",
    "TOTAL CALORIES\n(Kcal)": 167,
    "TOTAL FAT\n(g)": 13,
    "PROTEIN\n(g)": 18,
    "TOTAL CARBS\n(g)": 9,
  },
  {
    ITEMS: "Extra Chili Chipotle Chicken",
    "TOTAL CALORIES\n(Kcal)": 144,
    "TOTAL FAT\n(g)": 6,
    "PROTEIN\n(g)": 19,
    "TOTAL CARBS\n(g)": 3,
  },
  {
    ITEMS: "Extra Potato",
    "TOTAL CALORIES\n(Kcal)": 154,
    "TOTAL FAT\n(g)": 11,
    "PROTEIN\n(g)": 2,
    "TOTAL CARBS\n(g)": 19,
  },
  {
    ITEMS: "Extra Cheese",
    "TOTAL CALORIES\n(Kcal)": 39,
    "TOTAL FAT\n(g)": 3,
    "PROTEIN\n(g)": 2,
    "TOTAL CARBS\n(g)": 0,
  },
  {
    ITEMS: "Extra Guac",
    "TOTAL CALORIES\n(Kcal)": 107,
    "TOTAL FAT\n(g)": 9,
    "PROTEIN\n(g)": 1,
    "TOTAL CARBS\n(g)": 5,
  },
  {
    ITEMS: "Extra HotSalsa",
    "TOTAL CALORIES\n(Kcal)": 14,
    "TOTAL FAT\n(g)": 0,
    "PROTEIN\n(g)": 1,
    "TOTAL CARBS\n(g)": 2,
  },
  {
    ITEMS: "Extra MildSalsa",
    "TOTAL CALORIES\n(Kcal)": 12,
    "TOTAL FAT\n(g)": 0,
    "PROTEIN\n(g)": 0,
    "TOTAL CARBS\n(g)": 2,
  },
  {
    ITEMS: "Extra SourCream",
    "TOTAL CALORIES\n(Kcal)": 47,
    "TOTAL FAT\n(g)": 4,
    "PROTEIN\n(g)": 2,
    "TOTAL CARBS\n(g)": 2,
  },
  {
    ITEMS: "Extra Corn",
    "TOTAL CALORIES\n(Kcal)": 29,
    "TOTAL FAT\n(g)": 0,
    "PROTEIN\n(g)": 1,
    "TOTAL CARBS\n(g)": 6,
  },
  {
    ITEMS: "Extra Jalapenos",
    "TOTAL CALORIES\n(Kcal)": 2,
    "TOTAL FAT\n(g)": 0,
    "PROTEIN\n(g)": 0,
    "TOTAL CARBS\n(g)": 0,
  },
  {
    ITEMS: "Extra Lettuce",
    "TOTAL CALORIES\n(Kcal)": 2,
    "TOTAL FAT\n(g)": 0,
    "PROTEIN\n(g)": 0,
    "TOTAL CARBS\n(g)": 0,
  },
  {
    ITEMS: "Extra 12''Tortilla",
    "TOTAL CALORIES\n(Kcal)": 235,
    "TOTAL FAT\n(g)": 7,
    "PROTEIN\n(g)": 6,
    "TOTAL CARBS\n(g)": 37,
  },
  {
    ITEMS: "Extra 10''Tortilla",
    "TOTAL CALORIES\n(Kcal)": 160,
    "TOTAL FAT\n(g)": 5,
    "PROTEIN\n(g)": 4,
    "TOTAL CARBS\n(g)": 25,
  },
  {
    ITEMS: "Extra FajitaVeg",
    "TOTAL CALORIES\n(Kcal)": 18,
    "TOTAL FAT\n(g)": 0,
    "PROTEIN\n(g)": 2,
    "TOTAL CARBS\n(g)": 4,
  },
  {
    ITEMS: "Extra MixedVeg",
    "TOTAL CALORIES\n(Kcal)": 100,
    "TOTAL FAT\n(g)": 2,
    "PROTEIN\n(g)": 4,
    "TOTAL CARBS\n(g)": 20,
  },
  {
    ITEMS: "Extra Chessy Queso",
    "TOTAL CALORIES\n(Kcal)": 107,
    "TOTAL FAT\n(g)": 8,
    "PROTEIN\n(g)": 4,
    "TOTAL CARBS\n(g)": 4,
  },
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
    <div className="w-full max-w-2xl mx-auto p-4">
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
