import { Badge } from "@/components/ui/badge";
import Image from "next/legacy/image";
// Removed unused icons: Filter, PieChart, Users, Sparkles

export default function ServiceExplanation() { // Renamed component back
  return (
    <section className="bg-background py-12">
      <div className="container">
        {/* Original Header Content */}
        <div className="flex flex-col items-start gap-4">
           <div className="flex flex-col gap-2">
             <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl my-4">
               Ý Nghĩa Lễ Đầy Tháng & Thôi Nôi
             </h2>
             <p className="max-w-xl mt-2 text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
               Nghi lễ quan trọng đánh dấu mốc phát triển đầu đời của bé
             </p>
           </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Comparison Card */}
          <div className="rounded-lg border bg-gradient-to-br from-pink-100 to-blue-100 p-6 shadow-md transition-all hover:scale-[1.02] md:col-span-2 ">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Trọn Gói Tiện Lợi, Chuẩn Vị Truyền Thống
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
               <div>
                 <h3 className="mb-2 font-medium text-lg text-primary">Tiết Kiệm Thời Gian & Công Sức</h3>
                 <p className="text-muted-foreground">
                   Thay vì mất hàng giờ chuẩn bị, bạn chỉ cần đặt hàng. Chúng tôi lo tất cả, từ lựa chọn nguyên liệu tươi ngon đến bày biện mâm cúng đẹp mắt.
                 </p>
               </div>
               <div>
                 <h3 className="mb-2 font-medium text-lg text-primary">Đảm Bảo Đầy Đủ Lễ Vật</h3>
                 <p className="text-muted-foreground">
                   Cam kết cung cấp đầy đủ các lễ vật cần thiết theo đúng phong tục truyền thống, giúp buổi lễ của gia đình diễn ra trang trọng và ý nghĩa.
                 </p>
               </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-blue-100 to-pink-100 shadow-md transition-all hover:scale-[1.02]">
            <Image
              src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Traditional Vietnamese Offering"
              width={600}
              height={400}
              className="h-full w-full object-cover m-0"
            />
          </div>

          

          {/* Image Tile 1 */}

          {/* Image Tile 2 */}
          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-blue-100 to-pink-100 shadow-md transition-all hover:scale-[1.02] col-span-1 lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Family Celebration"
              width={400}
              height={200}
              className="h-full w-full lg:max-h-[250px] object-cover m-0"
            />
          </div>
          
          {/* Mien Bac Card */}
          <div className="flex flex-col justify-between gap-4 rounded-lg border bg-gradient-to-br from-blue-100 to-pink-100 p-6 shadow-md transition-all hover:scale-[1.02] ">
            {/* Icon removed */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Giao Hàng Nhanh Chóng</h2>
              <p className="mt-2 text-muted-foreground">
                Nhận mâm cúng đầy đủ, nóng hổi được giao tận nhà chỉ trong vòng 2 giờ đặt hàng tại TP.HCM.
              </p>
            </div>
          </div>

          {/* Mien Trung Card */}
           <div className="flex flex-col justify-between gap-4 rounded-lg border bg-gradient-to-br from-pink-100 to-blue-100 p-6 shadow-md transition-all hover:scale-[1.02] ">
            {/* Icon removed */}
             <div>
               <h2 className="text-xl font-semibold tracking-tight text-foreground">Chất Lượng Hàng Đầu</h2>
               <p className="mt-2 text-muted-foreground">
                 Nguyên liệu được chọn lọc kỹ càng, đảm bảo vệ sinh an toàn thực phẩm, giữ trọn hương vị truyền thống.
               </p>
             </div>
          </div>

          {/* Mien Nam Card */}
           <div className="flex flex-col justify-between gap-4 rounded-lg border bg-gradient-to-br from-blue-100 to-pink-100 p-6 shadow-md transition-all hover:scale-[1.02] ">
            {/* Icon removed */}
             <div>
               <h2 className="text-xl font-semibold tracking-tight text-foreground">Tư Vấn Tận Tâm</h2>
               <p className="mt-2 text-muted-foreground">
                 Đội ngũ tư vấn viên am hiểu nghi lễ sẵn sàng hỗ trợ 24/7, giải đáp mọi thắc mắc của bạn.
               </p>
             </div>
          </div>

          {/* Mien Nam Card */}
          <div className="flex flex-col justify-between gap-4 rounded-lg border bg-gradient-to-br from-blue-100 to-pink-100 p-6 shadow-md transition-all hover:scale-[1.02] ">
            {/* Icon removed */}
             <div>
               <h2 className="text-xl font-semibold tracking-tight text-foreground">Tư Vấn Tận Tâm</h2>
               <p className="mt-2 text-muted-foreground">
                 Đội ngũ tư vấn viên am hiểu nghi lễ sẵn sàng hỗ trợ 24/7, giải đáp mọi thắc mắc của bạn.
               </p>
             </div>
          </div>

          {/* Removed the 5th card as content is merged into the comparison card */}
        </div>
      </div>
    </section>
  );
}
