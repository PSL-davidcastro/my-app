import Button from "./components/Button";
import CarsList from "./components/CarsList";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CarHub
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover and explore our amazing collection of vehicles. Your
            perfect car is just one click away.
          </p>
          <Button />
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
          <CarsList />
        </div>
      </section>
    </div>
  );
}
