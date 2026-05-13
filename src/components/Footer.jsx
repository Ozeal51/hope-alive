import { ArrowUpRight, Leaf, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[color:var(--border)] bg-[color:var(--bg-soft)] px-4 py-10 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--primary)] text-white">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[color:var(--text-strong)]">
                Hope Alive Farm
              </p>
              <p className="text-sm text-[color:var(--text)]">Growing healthy food, empowering communities.</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:var(--text)]">
            A premium Nigerian agricultural brand focused on sustainable farming, fresh food
            production, poultry, fishery, livestock, and healthy living owned by Fr Patrick, a Catholic priest. We are committed to providing high-quality, fresh, and sustainable agricultural products while promoting environmental stewardship and community empowerment. Our mission is to cultivate a healthier future for Nigeria through responsible farming practices and community engagement.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">Quick links</p>
          <div className="mt-4 grid gap-3">
            {quickLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 text-sm text-[color:var(--text-strong)] transition hover:text-[color:var(--primary)]"
              >
                {label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">Reach us</p>
          <div className="mt-4 space-y-3 text-sm text-[color:var(--text-strong)]">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[color:var(--primary)]" /> +234 7068423121</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[color:var(--primary)]" /> hopealivefarm@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--primary)]" /> Abuja, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--text)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Hope Alive Farm. All rights reserved.</p>
        <p>Fresh. Sustainable. Trusted.</p>
      </div>
    </footer>
  )
}
