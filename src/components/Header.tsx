import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white fixed w-full z-50 shadow-md">
            <h1 className="font-bold text-xl">CarInvest</h1>
            <nav className="space-x-6">
                <Link href="#features" className="hover:text-yellow-400 transition">Преимущества</Link>
                <Link href="#calculator" className="hover:text-yellow-400 transition">Калькулятор</Link>
                <Link href="#form" className="hover:text-yellow-400 transition">Заявка</Link>
            </nav>
        </header>
    )
}
