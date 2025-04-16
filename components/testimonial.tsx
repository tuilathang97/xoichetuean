import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Mâm cúng đầy đủ, trình bày đẹp mắt. Bé nhà mình rất thích và gia đình hài lòng!",
    author: "Chị Ngọc Anh",
    position: "Khách hàng tại Q.7",
    rating: 5,
  },
  {
    quote:
      "Dịch vụ chuyên nghiệp từ khâu tư vấn đến giao hàng. Sẽ ủng hộ dài lâu!",
    author: "Anh Minh Đức",
    position: "Khách hàng tại Thủ Đức",
    rating: 5,
  },
  {
    quote:
      "Đồ cúng tươi ngon, đảm bảo vệ sinh. Rất đáng đồng tiền bát gạo!",
    author: "Chị Thu Hà",
    position: "Khách hàng tại Q.1",
    rating: 5,
  },
  {
    quote:
      "Mâm cúng đầy đủ, trình bày đẹp mắt. Bé nhà mình rất thích và gia đình hài lòng!",
    author: "Chị Ngọc Anh",
    position: "Khách hàng tại Q.7",
    rating: 5,
  },
  {
    quote:
      "Dịch vụ chuyên nghiệp từ khâu tư vấn đến giao hàng. Sẽ ủng hộ dài lâu!",
    author: "Anh Minh Đức",
    position: "Khách hàng tại Thủ Đức",
    rating: 5,
  },
  {
    quote:
      "Đồ cúng tươi ngon, đảm bảo vệ sinh. Rất đáng đồng tiền bát gạo!",
    author: "Chị Thu Hà",
    position: "Khách hàng tại Q.1",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-yellow-50 py-10 md:py-20 md:pb-30">
      <div className="container px-4">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center gap-2 text-4xl font-bold text-yellow-600">
            4.9/5 <Star className="fill-yellow-600 text-yellow-600" /> (300+ đánh giá)
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-900">
            Khách Hàng Nói Về Chúng Tôi
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hàng nghìn gia đình đã tin tưởng sử dụng dịch vụ của chúng tôi
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card text-card-foreground">
              <CardContent className="space-y-4 p-6 min-h-[400px] flex flex-col justify-center">
                <p className="text-lg italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
