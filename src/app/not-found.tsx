import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-5xl">
        🔎
      </div>

      <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
        Error 404
      </p>

      <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
      </h1>

      <p className="mt-4 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
        দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি। লিংকটি ভুল হতে পারে
        অথবা পৃষ্ঠাটি সরিয়ে ফেলা হয়েছে।
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700 active:scale-95"
      >
        <span aria-hidden="true">←</span>
        হোম পেজে ফিরে যান
      </Link>
    </main>
  );
}
