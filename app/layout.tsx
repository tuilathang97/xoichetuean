import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {blogConfig} from "@/blog.config";
import ProviderTheme from "@/provider/provider-theme";
import Title from "@/components/title";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import Analytics from "@/plugins/analytics";
import HeroBanner from "@/components/hero-banner";
import {usePathname} from "next/navigation";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: blogConfig.title,
    description: blogConfig.description,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ProviderTheme>
            <body className={'relative min-h-screen flex flex-col justify-between'}>
            <div className={'flex-1'}>
                <Header/>
                <HeroBanner />
                <main className={'md:mb-12 mb-8 min-w-full prose md:prose-md dark:prose-invert'}>
                    {/* <Title/> */}
                    {children}
                </main>
            </div>
            <Footer/>
            <BackToTop/>
            <Analytics/>
            </body>
        </ProviderTheme>
        </html>
    );
}
