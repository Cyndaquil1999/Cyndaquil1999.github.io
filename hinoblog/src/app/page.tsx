import { Header } from "@/components/ui/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="my-10">
        <div className="flex justify-center items-center space-x-14">
          <Image
            src="/icon.jpg"
            width={200}
            height={300}
            objectFit="contain"
            alt="my icon"
            className="rounded-full"
          />
          <p>信州大学修士2年のhinoです。ソフトウェア工学の研究をしています。</p>
        </div>
      </div>
      <div className="flex items-center justify-center mx-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-4xl">経歴</AccordionTrigger>
            <AccordionContent>
              <ul className="pl-10">
                <li>2019年4月　信州大学工学部電子情報システム工学科 入学</li>
                <li>
                  2023年4月　信州大学大学院修士課程総合理工学研究科工学専攻電子情報システム工学分野
                  入学（2025年3月卒業予定）
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-4xl">職歴</AccordionTrigger>
            <AccordionContent>
              <ul className="pl-10">
                <li>
                  2021年08月～　使えるねっと株式会社にてカスタマーサポートアルバイト
                  & 翻訳
                </li>
                <li>2023年12月～　株式会社ムゾウで開発バイト</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-4xl">
              コンテストなどの出場・登壇歴
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>
                  <p className="text-2xl">ISUCON</p>
                  <ul className="pl-10">
                    <li>ISUCON11 チームkstm 256位</li>
                    <li>ISUCON12 チーム猫度関数 228位</li>
                    <li>ISUCON13 チームkstm 349位</li>
                  </ul>
                </li>
                <br />
                <li>
                  <p className="text-2xl">技育プロジェクト</p>
                  <ul className="pl-10">
                    <li>
                      技育博2022　サークル代表として、他団体との交流や知見の共有を目的に参加しました。
                    </li>
                    <li>技育CAMPハッカソン　2022.08, 2023.05, 2023.07参加</li>
                  </ul>
                </li>
                <br />
                <li>
                  <p className="text-2xl">信州ハッカソン</p>
                  <ul className="pl-10">
                    <li>研究室の修士学生で参加。最優秀賞を受賞しました。</li>
                  </ul>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
