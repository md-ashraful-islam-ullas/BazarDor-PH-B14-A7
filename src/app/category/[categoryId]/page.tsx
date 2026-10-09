import { Suspense } from "react";
import SortedAllProducts from "@/components/SortedAllProducts";
import { IProduct } from "@/types/product";
import { cacheLife } from "next/cache";

interface ICategory {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}

const API = "https://api.api-store.workers.dev/api/bazardor";

export async function generateStaticParams() {
  const res = await fetch(`${API}/categories`);
  const categories: ICategory[] = await res.json();
  return categories.map((c) => ({ categoryId: c.slug }));
}

async function getCategoryData(categoryId: string) {
  "use cache";
  cacheLife("hours");

  const [categoryRes, productsRes] = await Promise.all([
    fetch(`${API}/categories/${categoryId}`),
    fetch(`${API}/products`),
  ]);

  const category: ICategory = await categoryRes.json();
  const products: IProduct[] = await productsRes.json();

  return {
    category,
    products: products.filter((p) => p.category === category.id),
  };
}

const CategoryContent = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const { category, products } = await getCategoryData(categoryId);

  return (
    <>
      <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white/70 px-5 py-5 my-4 shadow-sm">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
          {category.icon}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-blue-950">
            {category.nameBn}
          </h1>
          <p className="text-sm text-gray-600">
            {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
            পরিবর্তন
          </p>
        </div>
      </div>
      <SortedAllProducts products={products} />
    </>
  );
};

const CategoryPage = ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  return (
    <div className="max-w-7xl mx-auto px-3 py-4 sm:px-6 sm:py-6">
      <Suspense
        fallback={
          <div className="my-4 h-24 animate-pulse rounded-3xl bg-gray-100" />
        }
      >
        <CategoryContent params={params} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;