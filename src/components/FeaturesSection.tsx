export default function FeaturesSection() {
    return (
        <section id="features" className="ui-section">
            <div className="ui-container">
                <h2 className="h2 text-center mb-12">
                    Гарантии безопасности и окупаемости
                </h2>

                <div className="ui-fe-grid max-w-6xl mx-auto">
                    <div className="ui-card">
                        <h3 className="h3 mb-4">Гарантии безопасности</h3>
                        <ul className="list-disc ml-5 space-y-2 text-[var(--color-muted)]">
                            <li>Каждый клиент подписывает юридически сильный договор</li>
                            <li>Залог за автомобиль на всё время аренды + 14 дней</li>
                            <li>КАСКО и ОСАГО на автомобиль</li>
                            <li>Мониторинговая система с датчиками и маячками</li>
                        </ul>
                    </div>

                    <div className="ui-card">
                        <h3 className="h3 mb-4">Гарантии окупаемости</h3>
                        <ul className="list-disc ml-5 space-y-2 text-[var(--color-muted)]">
                            <li>Средняя загрузка автопарка – 70%</li>
                            <li>Статистика загруженности из CRM-системы</li>
                            <li>Подсчёты P&amp;L для любого автомобиля</li>
                            <li>Документация выплат партнёрам</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
