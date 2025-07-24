import Button from "@/app/components/Button";
import CarsList from "@/app/components/CarsList";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main entry point of the application.</p>
      <Button />
      <CarsList />
    </div>
  );
}
