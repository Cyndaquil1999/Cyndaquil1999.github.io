import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function ProjectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-auto">
        <div className="text-3xl m-3">制作物</div>
      </div>
      <Footer />
    </div>
  );
}
