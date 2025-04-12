import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CallToAction12() {
  return (
    <section className="py-24 bg-red-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.636455367742!2d106.68009447474748!3d10.762324360823634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b98a159a9%3A0x4b9c3d95b2899cd8!2zVHLGsOG7nW5nIMSQ4bqhaS họcSBTxrAgcGjDhuqFtIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1712753429397!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Liên Hệ Đặt Mâm Cúng</h2>
            <p className="text-muted-foreground mb-6">
              Gọi ngay hotline hoặc để lại thông tin để được tư vấn miễn phí
            </p>
            <div className="mb-4">
              <p className="font-semibold">Hotline/Zalo:</p>
              <p>0909.XXX.XXX</p>
            </div>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Họ và Tên</Label>
                <Input type="text" id="name" placeholder="Nhập họ và tên" />
              </div>
              <div>
                <Label htmlFor="phone">Số Điện Thoại</Label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Nhập email" />
              </div>
              <Button size="lg">Nhận Báo Giá</Button>
            </form>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                Giờ làm việc: 7h-21h hàng ngày
              </p>
              <p className="text-sm text-muted-foreground">
                Chi nhánh: Q.1, Q.7, Thủ Đức
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
