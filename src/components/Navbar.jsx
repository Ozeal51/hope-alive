import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const links = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Products', '#products'],
  ['Gallery', '#gallery'],
  ['Testimonials', '#testimonials'],
  ['Contact', '#contact'],
]

export function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        document.documentElement.dataset.scrolled = 'true'
      } else {
        delete document.documentElement.dataset.scrolled
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--primary)] text-white shadow-lg shadow-[rgba(31,93,59,0.2)]">
              <span className="font-display text-xl font-bold">H</span>
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-bold leading-none text-[color:var(--text-strong)]">
                Hope Alive Farm
              </p>
              <p className="text-xs text-[color:var(--text)]">Sustainable agriculture</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-[color:var(--text-strong)] transition hover:text-[color:var(--primary)]"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/60 text-[color:var(--text-strong)] transition hover:border-[color:var(--gold)]/30 hover:bg-white/90"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/60 text-[color:var(--text-strong)] transition hover:border-[color:var(--gold)]/30 hover:bg-white/90 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open ? (
          <div className="glass-panel mt-3 rounded-[28px] px-5 py-4 lg:hidden">
            <div className="grid gap-3">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--text-strong)] transition hover:bg-white/50"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
