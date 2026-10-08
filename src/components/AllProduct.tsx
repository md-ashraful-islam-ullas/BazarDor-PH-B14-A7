import SortedAllProducts from "./SortedAllProducts";
interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const AllProduct = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: Product[] = await res.json();

  return (
    <div>
      <div className="pt-7">
        <h2 className="text-xl font-bold" id="allproduct">সব পণ্য</h2>
      </div>
      <SortedAllProducts products={data} />
    </div>
  );
};

export default AllProduct;
