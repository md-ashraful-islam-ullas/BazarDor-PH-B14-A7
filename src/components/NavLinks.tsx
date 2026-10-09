import { Suspense } from "react";
import NavLinksItem from "./NavLinksItem";
import Link from "next/link";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  "use cache";
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );

  const data: Navs[] = await res.json();

  return (
    <nav>
      <div
        className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-6 px-4 sm:px-6 py-2
                   overflow-x-auto snap-x
                   scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {data.map((n) => (
          <Suspense
            key={n.id}
            fallback={
              <Link
                href={`/category/${n.slug}`}
                className="shrink-0 snap-start rounded-full px-3 py-1.5 text-sm sm:text-base whitespace-nowrap"
              >
                <span>{n.icon}</span> <span>{n.nameBn}</span>
              </Link>
            }
          >
            <NavLinksItem slug={n.slug} nameBn={n.nameBn} icon={n.icon} />
          </Suspense>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
