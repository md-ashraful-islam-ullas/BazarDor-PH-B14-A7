import PriceDownT6 from "@/components/PriceDownT6";
import PriceHikeT6 from "@/components/PriceHikeT6";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 py-4 sm:px-6 sm:py-6">
        <PriceHikeT6 />
        <PriceDownT6 />
      </div>
    </div>
  );
}
