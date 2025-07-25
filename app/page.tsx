import CarsList from "./components/CarsList";
import { CarType } from "./store/cars-store";

// Server-side function to fetch cars
async function getCars(): Promise<CarType[]> {
  try {
    // In production, you'd use your full URL
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_SITE_URL
        : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/cars`, {
      // Ensure fresh data on each request
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch cars");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching cars:", error);
    // Return empty array as fallback
    return [];
  }
}

export default async function Home() {
  // Fetch cars on the server
  const initialCars = await getCars();

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CarHub
            </span>
          </h1>
        </div>
      </section>

      {/* Cars Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vehicle Collection
            </h2>
            <p className="text-lg text-gray-600">
              Browse through our carefully curated selection of quality vehicles
            </p>
          </div>
          <CarsList initialCars={initialCars} />
        </div>
      </section>
    </div>
  );
}
