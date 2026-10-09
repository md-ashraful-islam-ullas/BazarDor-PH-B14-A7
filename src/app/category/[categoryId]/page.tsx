import { Suspense } from "react";
import { notFound } from "next/navigation";
import SortedAllProducts from "@/components/SortedAllProducts";
import { IProduct } from "@/types/product";
import { cacheLife } from "next/cache";
import Loading from "@/app/loading";

interface ICategory {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}

const API = "https://api.api-store.workers.dev/api/bazardor";

export async function generateStaticParams() {
  const res = await fetch(`${API}/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: ICategory[] = await res.json();

  return categories.map((category) => ({
    categoryId: category.slug,
  }));
}

async function getCategoryData(categoryId: string) {
  "use cache";
  cacheLife("hours");

  const [categoryRes, productsRes] = await Promise.all([
    fetch(`${API}/categories/${categoryId}`),
    fetch(`${API}/products`),
  ]);

  // The requested category doesn't exist.
  if (!categoryRes.ok) {
    return null;
  }

  const category: ICategory = await categoryRes.json();

  // Handle APIs that return HTTP 200 with invalid category data.
  if (!category?.id || !category?.slug) {
    return null;
  }

  if (!productsRes.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: IProduct[] = await productsRes.json();

  return {
    category,
    products: products.filter(
      (product) => product.category === category.id
    ),
  };
}

async function CategoryContent({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const data = await getCategoryData(categoryId);

  if (!data) {
    notFound();
  }

  const { category, products } = data;

  return (
    <>
      <div className="my-4 flex items-center gap-4 rounded-3xl border border-gray-200 bg-white/70 px-5 py-5 shadow-sm">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
          {category.icon}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-blue-950">
            {category.nameBn}
          </h1>

          <p className="text-sm text-gray-600">
            {products.length.toLocaleString("bn-BD")}
            টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <SortedAllProducts products={products} />
    </>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  return (
    <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-6">
      <Suspense fallback={<Loading />}>
        <CategoryContent params={params} />
      </Suspense>
    </div>
  );
}

