// 🟦 نبدأ Zustand من الصفر 🔥
// 1️⃣ التثبيت
// npm install zustand



// 2️⃣ أول Store بسيط (من غير فلسفة)

// 📁 store/useCounterStore.ts

import { create } from "zustand";

// type CounterState = {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
// };

export const useCounterStore = create((set) => ({
  count: 0,

  increment: () =>
    set((state) => ({ count: state.count + 1 })),

  decrement: () =>
    set((state) => ({ count: state.count - 1 })),
}))




// 3️⃣ نستخدمه في Component
"use client";

import { useCounterStore } from "@/store/useCounterStore";

export default function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}


// 🚀 خلصنا!
// لا Provider
// لا Context
// لا Boilerplate