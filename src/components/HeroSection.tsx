import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-[#0E1118] via-[#1C1F2A] to-[#0E1118] text-white overflow-hidden">

            {/* Абстрактные декоративные элементы */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fadeInUp">
                        Инвестируйте в прокат автомобилей
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fadeInUp delay-200">
                        премиум-класса с доходностью до 60% годовых без рисков
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto sm:mx-0 animate-fadeInUp delay-400">
                        <input type="text" placeholder="Ваше имя" className="p-4 rounded-lg flex-1 text-gray-900"/>
                        <input type="tel" placeholder="Телефон" className="p-4 rounded-lg flex-1 text-gray-900"/>
                        <button type="submit" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-6 py-4 rounded-lg shadow-lg transition-all duration-300">
                            Отправить заявку
                        </button>
                    </form>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end relative">
                    <Image src="/images/car-hero.png" width={600} height={400} alt="Автомобиль" className="rounded-xl shadow-2xl animate-fadeIn delay-600" />
                </div>
            </div>
        </section>
    )
}