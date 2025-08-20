export default function FormSection() {
    return (
        <section id="form" className="ui-section bg-[var(--color-surface)]">
            <div className="ui-container max-w-md text-center">
                <h2 className="h2 mb-6">Оставьте заявку на сдачу авто</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Ваше имя" className="ui-input"/>
                    <input type="tel" placeholder="Телефон" className="ui-input"/>
                    <textarea placeholder="Комментарий" className="ui-textarea"></textarea>
                    <button type="submit" className="ui-btn-primary w-full">Отправить</button>
                </form>
            </div>
        </section>
    )
}