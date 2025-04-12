import { UtensilsCrossed } from "lucide-react"; // Added an icon

export default function ServiceExplanationV2() { // Renamed component
  return (
    <section className="container grid items-center gap-12 py-16 lg:grid-cols-2">
      {/* Testimonial Card */}
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 rounded-lg bg-accent" />
        <div className="relative p-8 md:p-12">
          <div className="mb-8 flex items-center gap-2 text-primary">
            <UtensilsCrossed className="size-8" strokeWidth={1.5} />
            <span className="text-xl font-semibold">Xôi Chè Tuệ An</span>
          </div>
          <blockquote className="mb-6 text-xl font-medium md:text-2xl">
            Dịch vụ của Tuệ An thật tuyệt vời! Mâm cúng đầy tháng cho bé nhà mình
            vừa đầy đủ lễ vật truyền thống, vừa đẹp mắt mà lại tiết kiệm bao nhiêu
            thời gian chuẩn bị. Rất hài lòng!
          </blockquote>
          <footer>
            <cite className="not-italic">
              <span className="font-semibold">Chị Lan Anh</span>
              <span className="ml-2">Quận 7, TP.HCM</span>
            </cite>
          </footer>
        </div>
      </div>

      {/* Company Info */}
      <div className="space-y-8">
        <div>
          <div className="mb-2 text-sm font-medium text-primary">
            Giá trị cốt lõi
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Gìn giữ nét đẹp văn hóa, trao gửi yêu thương
          </h2>
          <p className="text-muted-foreground">
            Tại Xôi Chè Tuệ An, chúng tôi tâm huyết mang đến những mâm cúng Đầy Tháng, Thôi Nôi
            trọn vẹn ý nghĩa, giúp các gia đình trẻ gìn giữ nét đẹp truyền thống
            một cách tiện lợi và trang trọng nhất.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            Chúng tôi hiểu rằng việc chuẩn bị một mâm cúng đầy đủ lễ vật theo đúng phong tục
            đòi hỏi nhiều thời gian và công sức, đặc biệt với các gia đình bận rộn.
            Vì vậy, Tuệ An cung cấp dịch vụ trọn gói, từ lựa chọn nguyên liệu tươi ngon,
            chế biến tỉ mỉ đến bày biện đẹp mắt và giao hàng tận nơi.
          </p>
          <p className="text-muted-foreground">
            Mỗi mâm cúng không chỉ đảm bảo đầy đủ các lễ vật cần thiết mà còn chứa đựng
            tâm huyết và sự trân trọng của chúng tôi đối với văn hóa truyền thống.
            Chọn Tuệ An là chọn sự an tâm, tiện lợi và một khởi đầu tốt đẹp cho bé yêu.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 border-t pt-8 md:grid-cols-4">
          <div>
            <div className="text-2xl font-bold">2018</div>
            <div className="text-sm text-muted-foreground">Năm thành lập</div>
          </div>
          <div>
            <div className="text-2xl font-bold">10.000+</div>
            <div className="text-sm text-muted-foreground">Mâm cúng đã phục vụ</div>
          </div>
          <div>
            <div className="text-2xl font-bold">TP.HCM</div>
            <div className="text-sm text-muted-foreground">Khu vực phục vụ</div>
          </div>
          <div>
            <div className="text-2xl font-bold">99%</div>
            <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          Tìm hiểu thêm về chúng tôi
          <svg
            className="ml-2 size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}