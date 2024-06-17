import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex justify-between items-center bg-headerBackground text-7xl p-6">
      <div className="flex space-x-10 items-center">
        <Link href="https://github.com/Cyndaquil1999">
          <Image
            src="/github-mark-white.png"
            width={50}
            height={50}
            alt="github icon"
          />
        </Link>
        <Link href="https://x.com/cyndaquil1729">
          <Image
            src="/logo-white.png"
            width={50}
            height={50}
            alt="github icon"
          />
        </Link>
        <Link href="https://qiita.com/19Cyndaquil99">
          <Image
            src="/qiita-icon.png"
            width={50}
            height={50}
            alt="github icon"
          />
        </Link>
        <Link href="https://connpass.com/user/hino1729/">
          <Image
            src="/connpass_logo_4.png"
            width={50}
            height={50}
            alt="github icon"
          />
        </Link>
      </div>
    </div>
  );
}
