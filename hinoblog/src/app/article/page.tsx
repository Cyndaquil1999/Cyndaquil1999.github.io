import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { DesignedLink } from "@/components/ui/designedLink";

export default function ArticlePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-auto">
        <div className="text-3xl m-3">記事</div>
        <div className="pl-14">
          <ul>
            <li>
              1.{" "}
              <DesignedLink
                href="https://cyndaquil1999.github.io/entranceexam.html"
                text="2023年入学信州大学大学院総合理工学研究科工学専攻院試受験記"
              />
            </li>
            <li>
              2.{" "}
              <DesignedLink
                href="https://cyndaquil1999.github.io/Rwin10_vscode.html"
                text="Win10上のVSCodeでRの環境構築をしてみた"
              />
            </li>
            <li>
              3.{" "}
              <DesignedLink
                href="https://cyndaquil1999.github.io/moodle_to_googlecalender.html"
                text="Googleカレンダーで大学の課題締め切りを通知してくれるようにした"
              />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
