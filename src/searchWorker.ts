// import { menuDataRaw } from "./data/mcd";
// import { menuDataRaw as menuDataRawBurkerKing } from "./data/burger-king";
// import genericData from "./data/genericDataSet";
// import { menuData } from "./data/starbucks";
// import { data } from "./data/california-burrito";

// export const initializeSearchWorker = () => {
//   const worker = new Worker(new URL("./sw.ts", import.meta.url));

//   // Initialize worker with data
//   worker.postMessage({
//     type: "INIT_DATA",
//     source: "menuDataRaw",
//     data: menuDataRaw,
//   });
//   worker.postMessage({
//     type: "INIT_DATA",
//     source: "burgerKing",
//     data: menuDataRawBurkerKing,
//   });
//   worker.postMessage({ type: "INIT_DATA", source: "riceBowls", data: data });
//   worker.postMessage({
//     type: "INIT_DATA",
//     source: "genericFood",
//     data: genericData,
//   });
//   worker.postMessage({
//     type: "INIT_DATA",
//     source: "starbucks",
//     data: menuData,
//   });

//   return worker;
// };
