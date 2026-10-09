import { IProduct } from "@/types/product";
import SortedAllProducts from "./SortedAllProducts";

const AllProduct = async () => {
  "use cache";
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: IProduct[] = await res.json();

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
