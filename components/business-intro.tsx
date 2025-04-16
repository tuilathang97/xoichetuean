import Image from "next/legacy/image";
import { FC } from 'react';
// Removed Title import as it's not suitable here

interface BusinessIntroProps {}

const BusinessIntro: FC<BusinessIntroProps> = ({}) => {
  return (
    <section className=" bg-yellow-50 min-h-[500px] py-16 md:py-32"> {/* Added background color for visibility */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 mt-4 text-indigo-900"> {/* Use standard h2 tag */}
              Giới thiệu về Xôi Chè Tuệ An
            </h2>
            
            <p className="text-lg text-indigo-800 mb-6 leading-relaxed"
              style={{
                lineHeight: 2,
                letterSpacing: '0.7px'
              }}
            > {/* Added leading-relaxed for better readability */}
              Xôi Chè Tuệ An chuyên cung cấp các <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>mâm cúng đầy tháng</span>, <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>thôi nôi</span>{' '}
              <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>trọn gói</span> cho <span style={{ background: 'linear-gradient(to top, #BFDBFE 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>bé trai</span> và <span style={{ background: 'linear-gradient(to top, #FBCFE8 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>bé gái</span>. Chúng tôi hiểu rằng đây là những
              dịp <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>đặc biệt quan trọng</span>, đánh dấu những cột mốc đầu đời của bé.
              Với sự <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>tận tâm</span> và <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>kinh nghiệm</span>, Tuệ An mong muốn mang đến những
              mâm cúng <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>đẹp mắt</span>, <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>đầy đủ lễ vật</span> và <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>ý nghĩa</span>, giúp gia đình thể
              hiện <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>lòng thành kính</span> và cầu mong những điều <span style={{ background: 'linear-gradient(to top, #FEF08A 50%, transparent 50%) 0 1em / 100% 1em no-repeat' }}>tốt đẹp nhất</span> cho bé
              yêu.
            </p>

            {/* Offering Table */}
            

          </div>

          {/* Image */}
          <div className="relative h-64 md:h-96"> {/* Adjust height as needed */}
            <Image
              src="/mam-cung.jpg" // Replace with your actual image path
              alt="Giới thiệu Xôi Chè Tuệ An"
              layout="fill"
              objectFit="cover"
              className="rounded-lg my-0"
            />
          </div>
        </div>

        {/* <Table /> */}

      </div>
    </section>
  );
};

const Table = () => (
  <div className="overflow-x-auto mt-8">
    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-purple-100">
            Lễ vật cúng
          </th>
          <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50"> {/* Added bg-blue-50 */}
            Bé Trai
          </th>
          <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-pink-100"> {/* Added bg-pink-50 */}
            Bé Gái
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-purple-100">Xôi gấc / Xôi đậu xanh</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50">1 đĩa lớn / 12 đĩa nhỏ</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-pink-100">1 đĩa lớn / 12 đĩa nhỏ</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-purple-100">Chè trôi nước / Chè đậu trắng</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50">1 tô lớn / 12 chén nhỏ</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-pink-100">1 tô lớn / 12 chén nhỏ</td>
        </tr>
          <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-purple-100">Gà luộc / Vịt luộc</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50">1 con (trống)</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-pink-100">1 con (mái)</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-purple-100">Bộ tam sên</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50">Có</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-pink-100">Có</td>
        </tr>
          <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-purple-100">Trầu cau</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50">12 miếng têm cánh phượng</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-pink-100">12 miếng têm cánh phượng</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-90 bg-purple-100">Nhang, đèn, rượu, trà, hoa, quả</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50">Đầy đủ</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-pink-100">Đầy đủ</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
)

export default BusinessIntro;