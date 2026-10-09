import { notFound } from "next/navigation";
import { IProduct } from "@/types/product";
import ProductDetailsHeaderCard from "@/components/ProductDetailsHeaderCard";
import ProductMarketPrices from "@/components/ProductMarketPrice";

interface IProductPageProps {
  params: Promise<{ productId: string }>;
}

const ProductDetailsPage = async ({ params }: IProductPageProps) => {
  const { productId: slug } = await params;

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );


  const products: IProduct[] = await res.json();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-3 py-4 sm:px-6 sm:py-6">
      <ProductDetailsHeaderCard product={product} />
      <ProductMarketPrices product={product} />
    </div>
  );
};

export default ProductDetailsPage;