import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  slug: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const PriceDownT6 = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: Product[] = await res.json();
  const top6 = data.toSorted((a, b) => a.change.pct - b.change.pct).slice(0, 6);
  console.log(top6);
  return (
    <div>
      <span className="flex gap-3 pt-7 pb-3">
        <p className="text-green-600">▼</p>
        <h2 className="text-xl font-bold">আজ দাম কমেছে</h2>
      </span>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {top6.map((p) => (
          <Link href={`/product/${p.slug}`} key={p.id}>
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PriceDownT6;
