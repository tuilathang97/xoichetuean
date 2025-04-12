import HeroBanner from "@/components/hero-banner";
import ServiceExplanation from "@/components/service-explanation";
import PackageFeatures from "@/components/package-features";
import Gallery from "@/components/gallery";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import SocialList from "@/components/social-list";

import type { Metadata } from 'next'
import {getMetadata} from "@/lib/utils";
import ServiceExplanationV2 from "@/components/service-explanation-v2";
import PackageFeaturesV2 from "@/components/package-features-v2";
import PricingV2 from "@/components/pricing-v2";
import BusinessIntro from "@/components/business-intro";
import BlueBanner from "@/components/blue-banner";

export const metadata: Metadata = getMetadata("home")

const Home = () => {
    return (
        <div className="">
            <BusinessIntro />
            <BlueBanner title="Dịch Vụ Đặt Mâm Cúng Trọn Gói" description="Tiết kiệm thời gian, an tâm chuẩn bị lễ cúng tươm tất." />
            {/* <ServiceExplanationV2 /> */}
            {/* <ServiceExplanation /> */}
            {/* <PackageFeatures /> */}
            <PackageFeaturesV2 />
            <Gallery />
            
            {/* <Pricing /> */}
            <PricingV2 />
            <Testimonial />
            <FAQ />
            <CTA />
        </div>
    )
}

export default Home