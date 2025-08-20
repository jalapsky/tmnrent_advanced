import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import Head from 'next/head'
import FormSection from "@/components/FormSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";


export default function Home() {
    return (
        <>
            <Head>
                <title>Инвестируйте в прокат автомобилей | CarInvest</title>
                <meta name="description" content="Сдавайте свой автомобиль в аренду премиум-класса с доходностью до 60% годовых. Гарантия безопасности и окупаемости." />
                <meta name="keywords" content="прокат автомобилей, инвестирование в автомобили, аренда авто, доходность авто" />
                <meta name="robots" content="index, follow" />
            </Head>

            <Header />
            <main className="pt-20">
                <HeroSection />
                <FeaturesSection />
                <Calculator />
                <FormSection />
            </main>
            <Footer />
        </>
    )
}
