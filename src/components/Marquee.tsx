import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  slug: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const Marquee = async () => {
  "use cache";
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const data: Product[] = await res.json();

  return (
    <div className="border-b border-blue-100 bg-white">
      <MarqueeText className="py-2" direction="right" duration={15} pauseOnHover>
        {data.map(({ id, nameBn, image, today, unit, change, slug }) => (
          <Link
            key={id}
            href={`/product/${slug}`}
            className="mr-6 flex items-center gap-2 border-r border-gray-200 pr-6 text-sm"
          >
            <span>{image}</span>
            <span className="font-medium text-slate-700">{nameBn}</span>
            <span className="text-slate-500">
              ৳{today}/{unit}
            </span>
            <span
              className={`font-medium ${
                change.dir === "up" ? "text-red-500" : "text-green-600"
              }`}
            >
              {change.dir === "up" ? "▲" : "▼"} {Math.abs(change.pct)}%
            </span>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;