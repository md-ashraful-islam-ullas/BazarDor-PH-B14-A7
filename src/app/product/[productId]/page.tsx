import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";
import { IProduct } from "@/types/product";
import ProductDetailsHeaderCard from "@/components/ProductDetailsHeaderCard";
import ProductMarketPrices from "@/components/ProductMarketPrice";

interface IProductPageProps {
  params: Promise<{ productId: string }>;
}

const API = "https://api.api-store.workers.dev/api/bazardor";

export async function generateStaticParams() {
  const res = await fetch(`${API}/products`);
  const products: IProduct[] = await res.json();
  return products.map((p) => ({ productId: p.slug }));
}

async function getProducts(): Promise<IProduct[]> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${API}/products`);
  if (!res.ok) throw new Error("পণ্যের তথ্য আনা যায়নি");
  return res.json();
}

const ProductDetailsPage = async ({ params }: IProductPageProps) => {
  const { productId: slug } = await params;

  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-3 py-4 sm:px-6 sm:py-6 space-y-4">
      <ProductDetailsHeaderCard product={product} />
      <ProductMarketPrices product={product} />
    </div>
  );
};

export default ProductDetailsPage;