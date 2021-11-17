import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const menus = [
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Investments",
    href: "/investments",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
];

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className="h-28 md:h-20 w-full flex flex-wrap justify-between items-center px-4 md:px-20 pt-2 md:pt-8 whitespace-nowrap">
      <div className="md:text-3xl text-lg w-min md:w-1/2 flex justify-start">
        <div
          className={`${
            router.asPath === "/"
              ? "bg-green-400 bg-opacity-40"
              : "hover:text-green-900"
          } pr-2 pl-1 pb-0 pt-1 w-min`}
        >
          <Link href="/">Strahl Capital</Link>
        </div>
      </div>
      <div className="w-full flex md:justify-end md:w-1/2">
        {menus.map((menu) => (
          <div
            key={menu.href}
            className="md:pl-4 text-sm md:text-xl lg:text-2xl"
          >
            <div
              className={`${
                router.asPath.includes(menu.href)
                  ? "bg-green-400 bg-opacity-40"
                  : "hover:text-green-900"
              } pr-2 pl-1 pb-0 pt-1`}
            >
              <Link href={menu.href}>{menu.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
