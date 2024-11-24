// // sw.ts
// const datasets = {
//   menuDataRaw: [],
//   burgerKing: [],
//   riceBowls: [],
//   genericFood: [],
//   starbucks: [],
// };

// interface FoodItem {
//   name: string;
//   calories: number;
//   protein: number;
//   fat: number;
//   carbs: number;
//   source: string;
// }

// // Normalize data from different sources into a common format
// function normalizeData(data: any, source: string): FoodItem[] {
//   switch (source) {
//     case "menuDataRaw":
//       return data
//         .filter(
//           (item: any) =>
//             item["Menu Items"] && !item["Menu Items"].includes("percentage")
//         )
//         .map((item: any) => ({
//           name: item["Menu Items"],
//           calories: parseFloat(item["Energy (kCal)"]) || 0,
//           protein: parseFloat(item['"Protein (g)"']) || 0,
//           fat: parseFloat(item['"Total fat (g)"']) || 0,
//           carbs: parseFloat(item["Total carbohydrate (g)"]) || 0,
//           source: "McDonald's India",
//         }));

//     case "burgerKing":
//       return data
//         .filter(
//           (item: any) =>
//             item[""] && item[""].length > 0 && item[""] !== "Product"
//         )
//         .map((item: any) => ({
//           name: item[""],
//           calories: parseFloat(item.__2) || 0,
//           protein: parseFloat(item.__8) || 0,
//           fat: parseFloat(item.__5) || 0,
//           carbs: parseFloat(item.__3) || 0,
//           source: "Burger King India",
//         }));

//     case "riceBowls":
//       return data
//         .filter(
//           (item: any) => item["ITEMS"] && !item["ITEMS"].includes("RICE  BOWLS")
//         )
//         .map((item: any) => ({
//           name: item["ITEMS"],
//           calories: parseFloat(item["TOTAL CALORIES\n(Kcal)"]) || 0,
//           protein: parseFloat(item["PROTEIN\n(g)"]) || 0,
//           fat: parseFloat(item["TOTAL FAT\n(g)"]) || 0,
//           carbs: parseFloat(item["TOTAL CARBS\n(g)"]) || 0,
//           source: "Rice Bowls",
//         }));

//     case "genericFood":
//       return data.map((item: any) => ({
//         name: item.food_item,
//         calories: parseFloat(item.food_calories) || 0,
//         protein: parseFloat(item.food_protein) || 0,
//         fat: parseFloat(item.food_fats) || 0,
//         carbs: parseFloat(item.food_carbs) || 0,
//         source: "Generic Foods",
//       }));

//     case "starbucks":
//       return data.map((item: any) => ({
//         name: item.Product,
//         calories: parseFloat(item["Energy (Kcal)"]) || 0,
//         protein: parseFloat(item["Protein (g)"]) || 0,
//         fat: parseFloat(item["Total Fat (g)"]) || 0,
//         carbs: parseFloat(item["Carbohydrate (g)"]) || 0,
//         source: "Starbucks",
//       }));

//     default:
//       return [];
//   }
// }

// // Search function that runs on the service worker
// function searchItems(
//   query: string,
//   filters: {
//     minCalories: number;
//     maxCalories: number;
//     minProtein: number;
//     maxProtein: number;
//     minFat: number;
//     maxFat: number;
//     minCarbs: number;
//     maxCarbs: number;
//   }
// ): FoodItem[] {
//   const allItems: FoodItem[] = Object.entries(datasets).flatMap(
//     ([source, data]) => normalizeData(data, source)
//   );

//   return allItems.filter((item) => {
//     const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
//     const matchesCalories =
//       item.calories >= filters.minCalories &&
//       item.calories <= filters.maxCalories;
//     const matchesProtein =
//       item.protein >= filters.minProtein && item.protein <= filters.maxProtein;
//     const matchesFat = item.fat >= filters.minFat && item.fat <= filters.maxFat;
//     const matchesCarbs =
//       item.carbs >= filters.minCarbs && item.carbs <= filters.maxCarbs;

//     return (
//       matchesQuery &&
//       matchesCalories &&
//       matchesProtein &&
//       matchesFat &&
//       matchesCarbs
//     );
//   });
// }

// // Service worker message handling
// self.addEventListener("message", (event) => {
//   if (event.data.type === "INIT_DATA") {
//     datasets[event.data.source] = event.data.data;
//   }

//   if (event.data.type === "SEARCH") {
//     const results = searchItems(event.data.query, event.data.filters);
//     self.postMessage({ type: "SEARCH_RESULTS", results });
//   }
// });
