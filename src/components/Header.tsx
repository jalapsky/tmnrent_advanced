import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed inset-x-0 z-50 bg-[var(--color-surface)]/80 backdrop-blur border-b border-[var(--color-border)]">
            <div className="ui-container flex justify-between items-center py-4">
                <h1 className="text-lg font-semibold">CarInvest</h1>
                <nav className="flex gap-6">
                    <Link href="#features" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Преимущества</Link>
                    <Link href="#calculator" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Калькулятор</Link>
                    <Link href="#form" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Заявка</Link>
                </nav>
            </div>
        </header>
    )
}
