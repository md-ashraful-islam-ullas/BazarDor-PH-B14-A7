import React from "react";
import ProductCard from "./ProductCard";
interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const PriceHikeT6 = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: Product[] = await res.json();
  const top6 = data.toSorted((a, b) => b.change.pct - a.change.pct).slice(0, 6);
  console.log(top6);
  return (
    <div>
      <span className="flex gap-3 pt-7 pb-3">
        <p className="text-red-500">▲</p>
        <h2 className="text-xl font-bold">আজ দাম বেড়েছে</h2>
      </span>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {top6.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default PriceHikeT6;
