"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { FiShoppingCart } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Diaper", href: "/Diaper" },
  { name: "Cherub", href: "/Cherub" },
  { name: "Sisters", href: "/Sisters" },
  { name: "Fasclean", href: "/Fasclean" },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="border-b shadow-md">
      <div className="flex justify-between items-center mx-auto px-4 max-w-2xl sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className=" text-2xl md:text-3xl font-semibold antialiased">
            Mega
            <span className="text-2xl md:text-3xl font-semibold text-primary antialiased">Soft</span>
          </h1>
        </Link>
        <nav className="hidden gap-10 lg:flex 2xl:ml-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name}>
                {isActive ? (
                  <Link
                    href={link.href}
                    className="text-primary font-semibold text-lg antialiased"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-slate-800 font-semibold text-lg transition duration-100 hover:text-primary antialiased"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
        <div className="flex divide-x sm:border-l">
          <Button
            variant="outline"
            className="flex gap-x-1 h-16 w-16 sm:h-20 sm:w-20 md:h-20 md:w-24 rounded-none"
          >
            <FiShoppingCart className="h-6 w-6" />
            <span className="hidden sm:block text-xs font-semibold text-slate-700">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
