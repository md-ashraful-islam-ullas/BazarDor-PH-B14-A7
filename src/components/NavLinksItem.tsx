"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLinkItemProps {
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinkItem = ({ slug, nameBn, icon }: INavLinkItemProps) => {
  const pathname = usePathname();
  const href = `/category/${slug}`;
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`shrink-0 snap-start rounded-full px-3 py-1.5 text-sm sm:text-base whitespace-nowrap transition-colors ${
        isActive
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "hover:bg-gray-100 active:bg-gray-200"
      }`}
    >
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <span>{nameBn}</span>
      </div>
    </Link>
  );
};

export default NavLinkItem;