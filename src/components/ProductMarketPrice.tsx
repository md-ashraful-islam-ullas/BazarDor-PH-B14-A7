import { IProduct } from "@/types/product";

interface IProductMarketPricesProps {
  product: IProduct;
}

const bn = (n: number) => n.toLocaleString("bn-BD");

// whole numbers show as "৫২", fractions as "৪৩.৫০"
const bnPrice = (n: number) =>
  Number.isInteger(n)
    ? bn(n)
    : n.toLocaleString("bn-BD", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

const unitBn: Record<string, string> = {
  kg: "কেজি",
  liter: "লিটার",
  l: "লিটার",
  piece: "পিস",
  pcs: "পিস",
  dozen: "ডজন",
  hali: "হালি",
};

const ProductMarketPrices = ({ product }: IProductMarketPricesProps) => {
  const unit = unitBn[product.unit] ?? product.unit;

  // avg per market, sorted cheapest first
  const rows = product.markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  const lowest = Math.min(...rows.map((r) => r.min));
  const highest = Math.max(...rows.map((r) => r.max));
  const average = Math.round(
    rows.reduce((sum, r) => sum + r.avg, 0) / rows.length,
  );

  const stats = [
    {
      label: "সর্বনিম্ন দাম",
      value: lowest,
      color: "text-green-600",
      note: "সবচেয়ে কম দামের বাজার",
    },
    {
      label: "সর্বাধিক দাম",
      value: highest,
      color: "text-red-600",
      note: "সবচেয়ে বেশি দামের বাজার",
    },
    {
      label: "গড় দাম",
      value: average,
      color: "text-green-600",
      note: `প্রতি ${unit}-এর হিসাবে`,
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white/70 p-5 shadow-sm my-8">
      {/* Summary */}
      <h2 className="mb-3 text-lg font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-3xl border border-gray-200 px-6 py-4"
          >
            <p className="text-xs text-gray-500">{s.label}</p>
            <p className={`text-3xl font-bold ${s.color}`}>
              {bn(s.value)}{" "}
              <span className="text-base font-medium">টাকা</span>
            </p>
            <p className="text-xs text-gray-500">{s.note}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <h2 className="mt-8 mb-3 text-lg font-bold text-gray-900">
        বাজারভিত্তিক আজকের দাম
      </h2>
      <div className="overflow-x-auto rounded-3xl border border-gray-200">
        <table className="w-full min-w-150 text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="px-4 py-4 text-left font-medium">বাজার</th>
              <th className="px-4 py-4 text-left font-medium">বিভাগ</th>
              <th className="px-4 py-4 text-right font-medium">সর্বনিম্ন</th>
              <th className="px-4 py-4 text-right font-medium">সর্বাধিক</th>
              <th className="px-4 py-4 text-right font-medium">গড়</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.market} className="even:bg-blue-100">
                <td className="px-4 py-3 text-gray-900">{r.market}</td>
                <td className="px-4 py-3 text-gray-500">{r.division}</td>
                <td className="px-4 py-3 text-right text-gray-700">
                  {bn(r.min)} টাকা
                </td>
                <td className="px-4 py-3 text-right text-gray-700">
                  {bn(r.max)} টাকা
                </td>
                <td className="px-4 py-3 text-right font-bold text-gray-900">
                  {bnPrice(r.avg)} টাকা
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductMarketPrices;