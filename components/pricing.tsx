"use client";

import Image from "next/legacy/image";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    description: "Gói cơ bản đầy đủ lễ vật",
    price: 1990,
    users: "Đầy Tháng",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=450&fit=crop&q=80",
    recommended: false,
    features: [
      "25 lễ vật cơ bản",
      "Giao hàng tận nơi",
      "Hướng dẫn cúng"
    ]
  },
  {
    name: "Premium",
    description: "Gói cao cấp với bàn thờ mini",
    price: 2990,
    users: "Thôi Nôi",
    image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?w=800&h=450&fit=crop&q=80",
    recommended: true,
    features: [
      "Tất cả lễ vật Basic",
      "Bàn thờ mini",
      "Setup chuyên nghiệp"
    ]
  },
  {
    name: "VIP",
    description: "Trọn gói cao cấp nhất",
    price: 4990,
    users: "Thôi Nôi",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=450&fit=crop&q=80",
    recommended: false,
    features: [
      "Tất cả lễ vật Premium",
      "Dịch vụ chụp ảnh",
      "Quà lưu niệm cho bé"
    ]
  },
];

export default function PricingComponent() {
  return (
    <section className="py-8">
      <div className="container mb-8 lg:mb-0">
        <div className="flex flex-col gap-y-12 md:gap-y-16">
          <div className="mb-8 flex flex-col">
            <h1 className="my-6 text-pretty text-3xl font-bold md:text-5xl xl:text-5xl text-indigo-900">
              Bảng Giá Dịch Vụ
            </h1>
            <p className="text-muted-foreground lg:text-xl">
              Lựa chọn gói phù hợp cho nghi lễ của bé
            </p>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-6 gap-y-8 xl:grid xl:grid-cols-4">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`${plan.recommended ? "border-primary" : "border"} text-clip lg:mt-7`}
          >
            {plan.recommended && (
              <div className="flex h-7 items-center justify-center bg-primary text-center text-xs font-semibold text-primary-foreground">
                Recommended
              </div>
            )}
            <CardHeader className="p-4 sm:p-6 xl:pt-12">
              <div className="mb-6 md:flex md:items-center xl:block">
                <div className="mb-1 flex md:flex-1 md:flex-row-reverse md:items-center xl:mb-6 xl:flex-col-reverse xl:items-start xl:gap-y-4">
                  <div className="flex-1 md:ml-6 xl:ml-0">
                    <p className="mb-1 text-xl font-medium sm:text-2xl">
                      {plan.name}
                    </p>
                    <p className="text-xs text-muted-foreground sm:text-sm 2xl:min-h-10">
                      {plan.description}
                    </p>
                  </div>
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    className="size-16 sm:size-20"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2 className="mb-1 flex items-start text-2xl font-medium md:text-3xl 2xl:text-4xl">
                    {plan.price.toLocaleString()}k
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground">
                    / gói
                  </p>
                </div>
              </div>
              <div>
                <Button
                  variant={plan.recommended ? "default" : "outline"}
                  className="w-full"
                >
                  Đặt Ngay
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 border border-t p-4 sm:p-6 md:grid md:grid-cols-2 md:space-y-0 xl:block xl:space-y-6">
              <div>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Gói Dịch Vụ
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-x-2 text-xs font-medium text-muted-foreground">
                      <Check className="size-4" />
                      {plan.users}
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Ưu Đãi
                  </h2>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-x-2 text-xs font-medium text-muted-foreground">
                        <Check className="size-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
