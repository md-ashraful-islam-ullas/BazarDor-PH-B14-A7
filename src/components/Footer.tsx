const Footer = () => {
  return (
    <footer className="mt-16 border-t border-blue-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-blue-600">বাজারদর</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              প্রতিদিনের প্রয়োজনীয় পণ্যের বর্তমান বাজারদর সহজে জানুন।
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">দ্রুত লিংক</h3>

            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <a
                href="#allproduct"
                className="transition-colors hover:text-blue-600"
              >
                সব পণ্য
              </a>

              <a
                href="#categories"
                className="transition-colors hover:text-blue-600"
              >
                পণ্যের ক্যাটাগরি
              </a>

              <a href="#top" className="transition-colors hover:text-blue-600">
                উপরে যান
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">বাজারদর সম্পর্কে</h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              বাজারের পণ্যের দাম সম্পর্কে তথ্য এক জায়গায় তুলে ধরাই আমাদের
              উদ্দেশ্য।
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} বাজারদর। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
};

export default Footer;
