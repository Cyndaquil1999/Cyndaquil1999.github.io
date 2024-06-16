"use client";

import { usePathname } from "next/navigation";
import  Link  from "next/link";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center bg-headerBackground text-7xl p-6">
      <div className="text-white">hino's blog</div>
      <div className="flex text-white text-3xl space-x-3">
        {pathname !== "/" && (
          <Link href="/">
            <div className="bg-yellow-300 p-4">トップ</div>
          </Link>
        )}
        {pathname !== "/hobby" && (
          <Link href="/hobby">
            <div className="bg-yellow-300 p-4">趣味</div>
          </Link>
        )}
        {pathname !== "/article" && (
          <Link href="/article">
            <div className="bg-yellow-300 p-4">記事</div>
          </Link>
        )}
        {pathname !== "/project" && (
          <Link href="/project">
            <div className="bg-yellow-300 p-4">制作物</div>
          </Link>
        )}
        {pathname !== "/links" && (
          <Link href="/links">
            <div className="bg-yellow-300 p-4">リンク集</div>
          </Link>
        )}
      </div>
    </div>
  );
}
