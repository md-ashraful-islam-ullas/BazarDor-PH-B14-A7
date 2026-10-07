import Link from "next/link";
import React from "react";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }

  const data: Navs[] = await res.json();

  return (
    <nav>
      <div
        className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-6 px-4 sm:px-6 py-2
                   overflow-x-auto snap-x
                   scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {data.map((n) => (
          <Link
            href={`/category/${n.slug}`}
            key={n.id}
            className="shrink-0 snap-start rounded-full px-3 py-1.5 text-sm sm:text-base
                       whitespace-nowrap hover:bg-gray-100 active:bg-gray-200"
          >
            <div className="flex items-center gap-2">
              <span>{n.icon}</span>
              <span>{n.nameBn}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;