import { Header } from "@/components/ui/header";
import Link from "next/link";
import Image from "next/image";

export default function LinksPage() {
  return (
    <div className="">
      <Header />
      <div className="text-3xl m-3">リンク集</div>
      <div className="flex justify-center">
        <ul>
          <Link href="https://github.com/Cyndaquil1999"><Image src="/github.png" width={50} height={50} alt="github icon" /></Link>
        </ul>
      </div>
    </div>
  );
}
