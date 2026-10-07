export interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const unitLabels: Record<string, string> = {
  kg: "প্রতি কেজি",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
};

const ProductCard = ({ product }: { product: Product }) => {
  const { nameBn, image, today, unit, change } = product;
  const isUp = change.dir === "up";

  return (
    <div className="rounded-2xl border border-blue-100 bg-linear-to-r from-blue-50 via-white to-sky-50 p-4 transition-shadow hover:shadow-sm">
      {/* Top: icon + name + unit */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          {image}
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-bold text-blue-950">{nameBn}</h3>
          <p className="text-xs text-slate-500">
            {unitLabels[unit] ?? `প্রতি ${unit}`}
          </p>
        </div>
      </div>

      {/* Bottom: price + change */}
      <div className="mt-4 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs text-slate-500">আজকের দাম</p>
          <p className="text-lg font-bold text-slate-900">
            {today.toLocaleString("bn-BD")}{" "}
            <span className="text-sm font-medium">টাকা</span>
          </p>
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            isUp ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
          }`}
        >
          {isUp ? "▲" : "▼"} {Math.abs(change.pct).toLocaleString("bn-BD")}%
        </span>
      </div>
    </div>
  );
};

export default ProductCard;