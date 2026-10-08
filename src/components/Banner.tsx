import TodaysDate from "./TodaysDate";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="mx-auto max-w-7xl w-full px-3 py-4 sm:px-6 sm:py-6">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-blue-100 bg-linear-to-r from-blue-50 via-white to-sky-50 p-6 sm:p-5 md:flex-row">
        {/* Text */}
        <div className="max-w-xl">
          <span className="inline-block min-h-7 min-w-44 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 sm:text-sm">
            <TodaysDate />
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#allproduct"
            className="mt-5 inline-block rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        {/* Image space: replace the placeholder with your <Image /> */}
        <div className="relative h-40 w-full max-w-xs shrink-0 sm:h-52 md:h-60 md:w-80">
          <Image
            src="/bazar-hero.svg"
            alt="বাজার দর"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
