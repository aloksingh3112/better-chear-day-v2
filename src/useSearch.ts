// import { useState, useEffect } from "react";
// import { initializeSearchWorker } from "./searchWorker";

// interface SearchFilters {
//   minCalories: number;
//   maxCalories: number;
//   minProtein: number;
//   maxProtein: number;
//   minFat: number;
//   maxFat: number;
//   minCarbs: number;
//   maxCarbs: number;
// }

// export const useSearch = () => {
//   const [worker, setWorker] = useState<Worker | null>(null);
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const searchWorker = initializeSearchWorker();
//     setWorker(searchWorker);

//     searchWorker.addEventListener("message", (event) => {
//       if (event.data.type === "SEARCH_RESULTS") {
//         setResults(event.data.results);
//         setIsLoading(false);
//       }
//     });

//     return () => {
//       searchWorker.terminate();
//     };
//   }, []);

//   const search = (query: string, filters: SearchFilters) => {
//     if (!worker) return;

//     setIsLoading(true);
//     worker.postMessage({
//       type: "SEARCH",
//       query,
//       filters,
//     });
//   };

//   return { search, results, isLoading };
// };
