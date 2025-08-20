export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 px-6 bg-[#0E1118] text-white">
            <h2 className="text-4xl font-bold mb-12 text-center font-heading animate-fadeInUp">
                Гарантии безопасности и окупаемости
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-500">
                    <h3 className="text-2xl font-semibold mb-4">Гарантии безопасности</h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-300">
                        <li>Каждый клиент подписывает юридически сильный договор</li>
                        <li>Залог за автомобиль на всё время аренды + 14 дней</li>
                        <li>КАСКО и ОСАГО на автомобиль</li>
                        <li>Мониторинговая система с датчиками и маячками</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-500">
                    <h3 className="text-2xl font-semibold mb-4">Гарантии окупаемости</h3>
                    <ul className="list-disc ml-5 space-y-2 text-gray-300">
                        <li>Средняя загрузка автопарка – 70%</li>
                        <li>Статистика загруженности из CRM-системы</li>
                        <li>Подсчёты P&L для любого автомобиля</li>
                        <li>Документация выплат партнёрам</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
