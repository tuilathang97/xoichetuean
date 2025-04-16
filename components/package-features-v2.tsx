import { PackageCheck, Leaf, Clock } from "lucide-react";

export default function PackageFeaturesV2() { // Renamed component
  return (
    <section
      className="py-16  md:py-48 bg-cover bg-center"
      style={{ backgroundImage: "url('/background-2.webp')" }}
    >
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Đầy Đủ Lễ Vật Truyền Thống",
                description:
                "Mâm cúng được chuẩn bị kỹ lưỡng với đầy đủ các lễ vật cần thiết theo đúng phong tục.",
                icon: PackageCheck, // Updated icon
                bgColor: "bg-blue-100", // Added background color
              },
              {
                title: "Giao Hàng Nhanh, Tư Vấn Tận Tâm",
                description:
                  "Giao mâm cúng nóng hổi tận nơi trong 2 giờ (TP.HCM) và hỗ trợ tư vấn 24/7.",
                icon: Clock, // Updated icon
                bgColor: "bg-yellow-100", // Added background color
              },
              {
                title: "Nguyên Liệu Tươi Ngon, Chất Lượng",
                description:
                  "Chúng tôi chỉ sử dụng nguyên liệu tươi sạch, được chọn lọc kỹ càng, đảm bảo an toàn và hương vị.",
                icon: Leaf, // Updated icon
                bgColor: "bg-pink-100", // Added background color
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-6 p-8 rounded-lg ${step.bgColor}`} // Applied background color and padding
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-white text-primary"> {/* Changed icon background to white */}
                  <step.icon className="size-8" /> {/* Increased icon size */}
                </div>
                <div className="space-y-2 text-center"> {/* Reduced space */}
                  <h3 className="text-xl font-semibold text-gray-800"> {/* Adjusted text color */}
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p> {/* Adjusted text color */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Removed Separator */}
      </div>
    </section>
  );
}