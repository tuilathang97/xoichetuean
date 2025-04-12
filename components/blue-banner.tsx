import React from 'react';

interface BlueBannerProps {
  title: string;
  description: string;
}

const BlueBanner: React.FC<BlueBannerProps> = ({ title, description }) => {
  return (
    <div className="bg-blue-400 text-white text-center py-16 ">
      <div className='max-w-3xl mx-auto'>
        <h2 className="text-5xl mb-6 mt-10 font-serif font-bold  text-white prose">
          Đôi lời tâm sự
        </h2>
        <p className='text-2xl max-w-2xl mx-auto text-center'>
          Chúng tôi bắt đầu hành trình này với một niềm đam mê cháy bỏng: mang đến những mâm cỗ cúng chuẩn vị truyền thống, được chuẩn bị bằng cả tấm lòng và sự tỉ mỉ. Mỗi món ăn không chỉ là sự kết hợp tinh tế của nguyên liệu tươi ngon, mà còn là tâm huyết của đội ngũ, luôn nỗ lực hết mình để làm hài lòng từng khách hàng.
        </p>

      </div>
    </div>
  );
};

export default BlueBanner;