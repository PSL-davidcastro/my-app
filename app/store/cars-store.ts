import { create } from "zustand";
export type CarType = {
  id: number;
  make: string;
  model: string;
  year: number;
};
interface CarsState {
  cars: CarType[];
  fetchCars: () => Promise<void>;
}

export const useCarsStore = create<CarsState>(set => ({
  cars: [],
  fetchCars: async () => {
    const response = await fetch("/api/cars");
    if (!response.ok) {
      throw new Error("Failed to fetch cars");
    }
    const data = await response.json();
    set({ cars: data });
  },
}));
