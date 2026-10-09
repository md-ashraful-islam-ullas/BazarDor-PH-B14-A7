"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { IProduct } from "@/types/product";

interface ProductListProps {
  products: IProduct[];
}

const SortedAllProducts = ({ products }: ProductListProps) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...products];

  if (sortBy === "low") {
    sortedProducts.sort((a, b) => a.today - b.today);
  } else if (sortBy === "high") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <>
      <div className="flex items-center justify-between pb-3">
        <div>
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-[15px] font-medium">
            সাজান:
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border px-3 py-2 text-sm"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <Link href={`/product/${product.slug}`} key={product.id}><ProductCard  product={product} /></Link>
        ))}
      </div>
    </>
  );
};

export default SortedAllProducts;