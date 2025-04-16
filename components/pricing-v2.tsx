"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Gift,
  Rocket,
  Cake,
  Star,
} from "lucide-react";

// Define color palettes for cards and buttons
const colorPalettes = [
  { cardBg: "bg-pink-50", buttonBg: "bg-pink-500 hover:bg-pink-600", text: "text-pink-800", icon: "text-pink-500", buttonText: "text-white" },
  { cardBg: "bg-blue-50", buttonBg: "bg-blue-500 hover:bg-blue-600", text: "text-blue-800", icon: "text-blue-500", buttonText: "text-white" },
  { cardBg: "bg-green-50", buttonBg: "bg-green-500 hover:bg-green-600", text: "text-green-800", icon: "text-green-500", buttonText: "text-white" },
  { cardBg: "bg-purple-50", buttonBg: "bg-purple-500 hover:bg-purple-600", text: "text-purple-800", icon: "text-purple-500", buttonText: "text-white" },
  // Add more palettes if needed, e.g., orange, teal
  { cardBg: "bg-orange-50", buttonBg: "bg-orange-500 hover:bg-orange-600", text: "text-orange-800", icon: "text-orange-500", buttonText: "text-white" },
];

const packages = [
  {
    name: "Mâm Cúng Đầy Tháng Bé Gái",
    price: "1.299.000 VNĐ",
    icon: Gift,
    features: ["12 Chén chè trôi nước", "1 Đĩa xôi gấc lớn", "1 Gà luộc chéo cánh", "Bộ tam sên", "Trái cây ngũ quả", "Hoa tươi", "Trầu cau, rượu, trà", "Nhang đèn, giấy cúng"],
    description: "Gói cơ bản đầy đủ lễ vật cho bé gái"
  },
  {
    name: "Mâm Cúng Đầy Tháng Bé Trai",
    price: "1.299.000 VNĐ",
    icon: Rocket,
    features: ["12 Chén chè đậu trắng", "1 Đĩa xôi gấc lớn", "1 Gà luộc nguyên con", "Bộ tam sên", "Trái cây ngũ quả", "Hoa tươi", "Trầu cau, rượu, trà", "Nhang đèn, giấy cúng"],
    description: "Gói cơ bản đầy đủ lễ vật cho bé trai"
  },
  {
    name: "Mâm Cúng Thôi Nôi",
    price: "1.499.000 VNĐ",
    icon: Cake,
    features: ["12 Chén chè (tùy chọn)", "1 Đĩa xôi (tùy chọn)", "1 Gà luộc/Heo quay miếng", "Bộ tam sên", "Trái cây ngũ quả", "Hoa tươi", "Trầu cau, rượu, trà", "Nhang đèn, giấy cúng", "Bộ đồ thế (tùy chọn)"],
    description: "Gói đầy đủ cho lễ thôi nôi ý nghĩa"
  },
  {
    name: "Gói Đặc Biệt (Tùy Chỉnh)",
    price: "Liên hệ",
    icon: Star,
    features: ["Tùy chỉnh lễ vật theo yêu cầu", "Thêm các món ăn đãi tiệc", "Trang trí không gian", "Hỗ trợ nghi lễ chi tiết", "Ưu tiên giao hàng"],
    description: "Thiết kế mâm cúng theo yêu cầu riêng"
  },
];

export default function PricingV2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToTemplate = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / (isMobile ? 1 : 3);
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextTemplate = () => {
    setCurrentIndex((prevIndex) => {
      const increment = isMobile ? 1 : 3;
      const newIndex =
        (prevIndex + increment) %
        (isMobile ? packages.length : Math.ceil(packages.length / 3) * 3);
      scrollToTemplate(newIndex);
      return newIndex;
    });
  };

  const prevTemplate = () => {
    setCurrentIndex((prevIndex) => {
      const decrement = isMobile ? 1 : 3;
      const totalSlides = isMobile
        ? packages.length
        : Math.ceil(packages.length / 3) * 3;
      const newIndex = (prevIndex - decrement + totalSlides) % totalSlides;
      scrollToTemplate(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    scrollToTemplate(currentIndex);
  }, [currentIndex, isMobile]);

  return (
    <section className="bg-white px-4 py-0 sm:px-6 lg:px-8 md:py-8 bg-yellow-200"> {/* Changed background */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl md:text-5xl text-indigo-900 mb-4 mt-8">
            Chọn Gói Mâm Cúng Phù Hợp
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Tham khảo các gói mâm cúng Đầy Tháng & Thôi Nôi được chuẩn bị chu đáo từ Xôi Chè Tuệ An
          </p>
        </div>
        <div className="relative">
          <div
            ref={sliderRef}
            className="scrollbar-hide flex snap-x snap-mandatory overflow-x-hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {packages.map((pkg, pkgIndex) => { // Add index to map
              const Icon = pkg.icon;
              // Get color palette based on index
              const palette = colorPalettes[pkgIndex % colorPalettes.length];
              return (
                <div
                  key={pkg.name}
                  className="w-full flex-shrink-0 snap-center px-2 md:w-1/3"
                >
                  <Card className={`mx-auto flex h-full flex-col ${palette.cardBg}`}> {/* Applied dynamic card background */}
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Icon className={`size-6 ${palette.icon} sm:h-8 sm:w-8`} /> {/* Applied dynamic icon color */}
                        <Badge variant="secondary">{pkg.price}</Badge>
                      </div>
                      <CardTitle className={`text-xl font-bold ${palette.text} sm:text-2xl`}> {/* Applied dynamic text color */}
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className={`text-xs ${palette.text} opacity-80 sm:text-sm`}> {/* Applied dynamic text color (slightly muted) */}
                        {pkg.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className={`flex items-center ${palette.text}`} > {/* Applied dynamic text color */}
                            <Check className={`mr-2 size-4 flex-shrink-0 ${palette.icon} sm:h-5 sm:w-5`} /> {/* Applied dynamic icon color */}
                            <span className="text-sm sm:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button className={`w-full ${palette.buttonBg} ${palette.buttonText}`}>Chọn Gói Này</Button> {/* Applied dynamic button background and text color */}
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-2 top-1/2 -translate-y-1/2 transform bg-background sm:-left-4"
            onClick={prevTemplate}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Gói trước</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-2 top-1/2 -translate-y-1/2 transform bg-background sm:-right-4"
            onClick={nextTemplate}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Gói tiếp theo</span>
          </Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Hiển thị gói {isMobile ? "" : ""}{" "}
            {isMobile
              ? currentIndex + 1
              : Math.min(currentIndex + 1, packages.length)}
            {!isMobile && ` - ${Math.min(currentIndex + 3, packages.length)}`}{" "}
            trên {packages.length}
          </p>
        </div>
      </div>
    </section>
  );
}