import SortedAllProducts from "@/components/SortedAllProducts";
import { IProduct } from "@/types/product";

interface ICategory {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const categoryRes = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/categories/${categoryId}`,
  );
  const categoryData: ICategory = await categoryRes.json();
  //   console.log(categoryData);

  const categoryDetailsRes = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const categoryDetailsData: IProduct[] =
    await categoryDetailsRes.json();
  //   console.log(categoryDetailsData)

  const filteredProducts: IProduct[] = categoryDetailsData.filter(
    (product) => product.category === categoryData.id,
  );
//   console.log(filteredProducts);

  return (
    <div className="max-w-7xl mx-auto px-3 py-4 sm:px-6 sm:py-6">
      <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white/70 px-5 py-5 my-4 shadow-sm">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100  text-3xl">
          {categoryData.icon}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-blue-950">
            {categoryData.nameBn}
          </h1>
          <p className="text-sm text-gray-600">
            {filteredProducts.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম
            ও পরিবর্তন
          </p>
        </div>
      </div>
      <SortedAllProducts products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
