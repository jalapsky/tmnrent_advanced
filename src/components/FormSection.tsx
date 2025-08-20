export default function FormSection() {
    return (
        <section id="form" className="py-20 px-6 bg-gray-800 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Оставьте заявку на сдачу авто</h2>
            <form className="max-w-md mx-auto flex flex-col gap-4">
                <input type="text" placeholder="Ваше имя" className="p-4 rounded-lg text-black"/>
                <input type="tel" placeholder="Телефон" className="p-4 rounded-lg text-black"/>
                <textarea placeholder="Комментарий" className="p-4 rounded-lg text-black"></textarea>
                <button type="submit" className="bg-yellow-500 font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
                    Отправить
                </button>
            </form>
        </section>
    )
}