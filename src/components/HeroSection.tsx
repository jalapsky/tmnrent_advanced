import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="relative ui-section pt-32 md:pt-40 overflow-hidden">

            {/* Абстрактные декоративные элементы */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--color-primary)]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="ui-container flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="h1 mb-6 animate-fadeInUp">
                        Инвестируйте в прокат автомобилей
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 muted animate-fadeInUp delay-200">
                        премиум-класса с доходностью до 60% годовых без рисков
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto md:mx-0 animate-fadeInUp delay-400">
                        <input type="text" placeholder="Ваше имя" className="ui-input flex-1"/>
                        <input type="tel" placeholder="Телефон" className="ui-input flex-1"/>
                        <button type="submit" className="ui-btn-primary">
                            Отправить заявку
                        </button>
                    </form>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end relative">
                    <Image src="/images/car-hero.png" width={600} height={400} alt="Автомобиль" className="rounded-xl shadow-[var(--shadow-elev)] animate-fadeIn delay-600" />
                </div>
            </div>
        </section>
    )
}