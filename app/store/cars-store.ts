import { create } from "zustand";
export type CarType = {
  id: number;
  make: string;
  model: string;
  year: number;
};
interface CarsState {
  cars: CarType[];
  isInitialized: boolean;
  fetchCars: () => Promise<void>;
  initializeCars: (cars: CarType[]) => void;
  addCar: (car: CarType) => void;
  updateCar: (car: CarType) => void;
  deleteCar: (id: number) => void;
}

export const useCarsStore = create<CarsState>(set => ({
  cars: [],
  isInitialized: false,
  fetchCars: async () => {
    const response = await fetch("/api/cars");
    if (!response.ok) {
      throw new Error("Failed to fetch cars");
    }
    const data = await response.json();
    set({ cars: data, isInitialized: true });
  },
  initializeCars: (cars: CarType[]) => set({ cars, isInitialized: true }),
  addCar: (car: CarType) => set(state => ({ cars: [...state.cars, car] })),
  updateCar: (car: CarType) =>
    set(state => ({
      cars: state.cars.map(c => (c.id === car.id ? { ...c, ...car } : c)),
    })),
  deleteCar: (id: number) =>
    set(state => ({ cars: state.cars.filter(car => car.id !== id) })),
}));
