import { IProduct } from "@/types/product";


interface IProductHeaderCardProps {
  product: IProduct;
}

const bn = (n: number) => n.toLocaleString("bn-BD");

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  
  piece: "পিস",
  pcs: "পিস",
  dozen: "ডজন",
  hali: "হালি",
};

const changeStyles = {
  up: { icon: "▲", word: "বেড়েছে", color: "text-red-600" },
  down: { icon: "▼", word: "কমেছে", color: "text-green-600" },
  flat: { icon: "–", word: "অপরিবর্তিত", color: "text-gray-500" },
};

const ProductDetailsHeaderCard = ({ product }: IProductHeaderCardProps) => {
  const style = changeStyles[product.change.dir];
  const unit = unitBn[product.unit] ?? product.unit;

  return (
    <div className="flex flex-wrap items-center gap-5 rounded-3xl border border-gray-200 bg-white/70 p-5 shadow-sm">
      {/* Image / emoji */}
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-5xl">
        {product.image}
      </div>

      {/* Name + info */}
      <div className="flex-1 min-w-55">
        <h1 className="text-3xl font-bold text-blue-950">{product.nameBn}</h1>
        <p className="text-sm text-gray-600">
          প্রতি {unit} · {product.categoryNameBn}
        </p>
        <p className="mt-3 text-sm text-gray-600">
          গতকালের তুলনায় আজ দাম{" "}
          <span className="font-bold">{style.word}</span>
          {product.change.dir !== "flat" && ` ${bn(product.change.pct)}%`}
        </p>
      </div>

      {/* Today's price box */}
      <div className="rounded-3xl bg-blue-100 px-8 py-4 text-center">
        <p className="text-sm text-gray-600">আজকের দাম</p>
        <p className="text-4xl font-bold text-gray-900">{bn(product.today)}</p>
        <p className="text-sm text-gray-600">টাকা / {unit}</p>
        <p className={`mt-1 text-sm font-bold ${style.color}`}>
          {style.icon} {bn(product.change.pct)}%
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsHeaderCard;