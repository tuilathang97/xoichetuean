import { Button } from "@/components/ui/button";
import {
  Utensils,
  CandlestickChart,
  Gift,
  Settings,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Lễ Vật Cơ Bản",
    description: "Xôi, gà luộc, chè, trái cây, bánh kẹo truyền thống",
  },
  {
    icon: CandlestickChart,
    title: "Bộ Đồ Cúng",
    description: "Hương, đèn, hoa quả, rượu trắng, nước lọc",
  },
  {
    icon: Gift,
    title: "Vật Phẩm May Mắn",
    description: "Thẻ bài cầu an, bùa bình an, đồng xu phát lộc",
  },
  {
    icon: Settings,
    title: "Dịch Vụ Setup",
    description: "Bày biện mâm cúng theo đúng phong tục từng vùng miền",
  },
  {
    icon: Heart,
    title: "Hậu Cần",
    description: "Dọn dẹp sau lễ, tư vấn chụp ảnh lưu niệm",
  },
];

export default function Feature113() {
  return (
    <section className="bg-background py-4 space-y-0">
      <div className="container max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl space-y-0">
            Thành Phần Gói Dịch Vụ
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mâm cúng đầy đủ, chuẩn phong thủy cho bé yêu
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-6 text-center transition-colors hover:bg-accent"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
{/* 
        <div className="flex justify-center">
          <Button size="lg" className="w-96">
            Features
          </Button>
        </div> */}
      </div>
    </section>
  );
}
