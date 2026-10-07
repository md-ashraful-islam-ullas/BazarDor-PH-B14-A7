import Image from "next/image";
import NavLinks from "./NavLinks";
import TodaysDate from "./TodaysDate";

const Header = () => {
  

  return (
    <nav className="border-b border-blue-100 bg-linear-to-r from-blue-50 via-white to-sky-50">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="flex items-center justify-between gap-2 py-2.5 sm:py-3">
          {/* Logo + Title */}
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:h-12 sm:w-12">
              <Image
                src="/shopping-cart.png"
                alt="বাজার দর"
                width={36}
                height={36}
                className="h-7 w-7 sm:h-9 sm:w-9"
              />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold tracking-tight text-blue-950 sm:text-xl">
                বাজার দর
              </h2>
              <TodaysDate />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button className="btn btn-sm sm:btn-md rounded-lg border-blue-200 bg-white px-3 whitespace-nowrap text-blue-700 hover:bg-blue-50 sm:px-5">
              সাইন ইন
            </button>

            <button className="btn btn-sm sm:btn-md rounded-lg border-0 bg-blue-500 px-3 whitespace-nowrap text-white hover:bg-blue-600 sm:px-5">
              সাইন আপ
            </button>
          </div>
        </div>
      </div>

      <NavLinks />
    </nav>
  );
};

export default Header;