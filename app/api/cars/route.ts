import { NextResponse } from "next/server";

const cars = [
  { id: 1, make: "Toyota", model: "Corolla", year: 2020 },
  { id: 2, make: "Honda", model: "Civic", year: 2019 },
  { id: 3, make: "Ford", model: "Focus", year: 2018 },
];

export async function GET() {
  return NextResponse.json(cars);
}
