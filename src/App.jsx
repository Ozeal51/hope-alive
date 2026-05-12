import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Beef,
  ChevronLeft,
  ChevronRight,
  GalleryHorizontalEnd,
  HeartPulse,
  Leaf,
  Mail,
  MessageCircle,
  Play,
  Quote,
  ShieldCheck,
  Sprout,
  Star,
  Truck,
  Waves,
  X,
  Phone,
  Wheat,
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { useEffect, useMemo, useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionHeading } from './components/SectionHeading'
import './App.css'

const services = [
  {
    title: 'Crop Farming',
    description: 'Carefully nurtured staples and seasonal crops grown with regenerative practices.',
    icon: Wheat,
  },
  {
    title: 'Poultry Farming',
    description: 'Fresh, responsibly raised poultry with consistent quality and healthy feed management.',
    icon: Leaf,
  },
  {
    title: 'Fish Farming',
    description: 'Clean aquaculture systems that deliver reliable fish production all year round.',
    icon: Waves,
  },
  {
    title: 'Livestock Management',
    description: 'Ethical livestock care focused on wellness, productivity, and traceability.',
    icon: Beef,
  },
  {
    title: 'Organic Food Supply',
    description: 'Farm-to-table supply of wholesome produce for homes, retailers, and institutions.',
    icon: Sprout,
  },
]

const products = [
  {
    label: 'Fresh Vegetables',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Premium Poultry',
    image:
      'https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Fresh Fish',
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Organic Grains',
    image:
      'https://images.unsplash.com/photo-1538964173425-0f0a5f8c9d53?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Healthy Produce Boxes',
    image:
      'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Organic Foods',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
]

const features = [
  {
    title: '100% Organic Produce',
    description: 'Naturally grown with soil-first methods and minimal chemical intervention.',
    icon: ShieldCheck,
    stat: '100%',
  },
  {
    title: 'Sustainable Farming',
    description: 'Responsible practices that protect land, water, and future harvests.',
    icon: Sprout,
    stat: '12k+',
  },
  {
    title: 'Healthy & Fresh Food',
    description: 'Harvested, handled, and delivered with quality and freshness in mind.',
    icon: HeartPulse,
    stat: '24h',
  },
  {
    title: 'Trusted Farm Experts',
    description: 'A dedicated team with practical agricultural knowledge and integrity.',
    icon: Award,
    stat: '18+',
  },
  {
    title: 'Fast Delivery',
    description: 'Reliable logistics that keep products moving from farm to doorstep quickly.',
    icon: Truck,
    stat: '98%',
  },
]

const galleryImages = [
  {
    title: 'Morning harvest',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Greenhouse work',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Free-range poultry',
    image:
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Fish pond',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Livestock care',
    image:
      'https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Fresh produce crates',
    image:
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=80',
  },
]

const testimonials = [
  {
    name: 'Amina Yusuf',
    role: 'Healthy food retailer',
    quote:
      'Hope Alive Farm gives us the consistency and freshness our customers notice immediately.',
    rating: 5,
  },
  {
    name: 'Chinedu Okafor',
    role: 'Restaurant owner',
    quote:
      'Their organic supply and professional service helped us build trust with our diners.',
    rating: 5,
  },
  {
    name: 'Fatima Bello',
    role: 'Household customer',
    quote:
      'The produce is always fresh, clean, and beautifully packed. It feels premium every time.',
    rating: 5,
  },
]

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: '#', handle: 'HopeAliveFarm' },
  { icon: FaInstagram, label: 'Instagram', href: '#', handle: '@hopealivefarm' },
  { icon: FaXTwitter, label: 'X', href: '#', handle: '@hopealivefarm' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#', handle: 'Hope Alive Farm' },
]

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function ServiceCard({ title, description, icon: Icon }) {
  return (
    <motion.article
      variants={sectionReveal}
      className="glass-panel group rounded-[28px] border border-white/10 p-6 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--primary)]/10 text-[color:var(--primary)] ring-1 ring-[color:var(--primary)]/10 transition group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-2xl text-[color:var(--text-strong)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--text)]">{description}</p>
    </motion.article>
  )
}

function ProductCard({ label, image }) {
  return (
    <motion.article
      variants={sectionReveal}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[color:var(--card)] shadow-[var(--shadow)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--gold)]">Fresh from hope alive farm</p>
          <h3 className="mt-2 text-lg font-semibold text-[color:var(--text-strong)]">{label}</h3>
        </div>
        <ArrowRight className="h-5 w-5 shrink-0 text-[color:var(--primary)] transition group-hover:translate-x-1" />
      </div>
    </motion.article>
  )
}

function FeatureCard({ title, description, icon: Icon, stat }) {
  return (
    <motion.article
      variants={sectionReveal}
      className="glass-panel rounded-[28px] border border-white/10 p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-full border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/10 px-3 py-1 text-sm font-semibold text-[color:var(--gold)]">
          {stat}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[color:var(--text-strong)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[color:var(--text)]">{description}</p>
    </motion.article>
  )
}

function GalleryCard({ title, image, onOpen, tall = false }) {
  return (
    <motion.button
      variants={sectionReveal}
      type="button"
      onClick={() => onOpen({ title, image })}
      className={`group relative block w-full overflow-hidden rounded-[28px] border border-white/10 bg-[color:var(--card)] shadow-[var(--shadow)] ${
        tall ? 'aspect-[4/5]' : 'aspect-[4/3]'
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5 text-left text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/75">Gallery</p>
          <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        </div>
        <div className="rounded-full bg-white/15 p-3 backdrop-blur-sm transition group-hover:scale-110">
          <GalleryHorizontalEnd className="h-5 w-5" />
        </div>
      </div>
    </motion.button>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      key={testimonial.name}
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -36 }}
      transition={{ duration: 0.45 }}
      className="testimonial-slide glass-panel rounded-[30px] border border-white/10 p-8"
    >
      <Quote className="h-10 w-10 text-[color:var(--gold)]/70" />
      <p className="mt-6 text-lg leading-8 text-[color:var(--text-strong)]">“{testimonial.quote}”</p>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">{testimonial.name}</h3>
          <p className="text-sm text-[color:var(--text)]">{testimonial.role}</p>
        </div>
        <div className="flex items-center gap-1 text-[color:var(--gold)]">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'

    const saved = window.localStorage.getItem('hope-alive-theme')
    if (saved === 'dark' || saved === 'light') {
      return saved
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [lightbox, setLightbox] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('hope-alive-theme', theme)
  }, [theme])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const activeTestimonial = useMemo(() => testimonials[testimonialIndex], [testimonialIndex])

  return (
    <div className="relative overflow-x-clip bg-[color:var(--bg)] text-[color:var(--text)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(202,162,77,0.12),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(47,143,87,0.16),_transparent_25%)]" />
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))} />

      <main className="relative z-10">
        <section className="section-shell px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/10 px-4 py-2 text-sm font-medium text-[color:var(--gold)] shadow-sm backdrop-blur">
                <Sprout className="h-4 w-4" />
                Premium Nigerian agricultural brand
              </div>

              <div className="space-y-5">
                <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.02] text-[color:var(--text-strong)] sm:text-6xl lg:text-7xl">
                  Growing Healthy Food, Empowering Communities
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--text)] sm:text-xl">
                  Hope Alive Farm delivers sustainable farming, fresh produce, poultry,
                  fishery, livestock, and organic food solutions with a premium experience
                  rooted in trust, care, and excellence.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] px-7 py-4 font-semibold text-white shadow-[0_18px_35px_rgba(31,93,59,0.28)] transition hover:-translate-y-0.5 hover:bg-[color:var(--primary-2)]"
                >
                  Explore Our Farm
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-soft)] px-7 py-4 font-semibold text-[color:var(--text-strong)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:var(--gold)]/30"
                >
                  Contact Us
                  <Phone className="h-5 w-5" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['500+', 'Farm families served'],
                  ['12+', 'Years of experience'],
                  ['24/7', 'Freshness driven care'],
                ].map(([value, label]) => (
                  <div key={label} className="glass-panel rounded-[24px] p-5 text-left">
                    <p className="text-3xl font-bold text-[color:var(--text-strong)]">{value}</p>
                    <p className="mt-1 text-sm text-[color:var(--text)]">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="relative"
            >
              <div className="hero-glow absolute inset-0 rounded-[36px] blur-3xl" />
              <div
                className="glass-panel relative min-h-[620px] overflow-hidden rounded-[36px] border border-white/10 p-4 sm:p-6"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(10,18,12,0.08), rgba(10,18,12,0.55)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="grain-overlay" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-sm font-medium text-white backdrop-blur-md sm:left-6 sm:top-6">
                  Sustainable harvest • Fresh supply chain
                </div>

                <div className="absolute inset-x-4 bottom-4 grid gap-4 sm:grid-cols-2 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="glass-panel rounded-[24px] p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.26em] text-white/70">Now growing</p>
                    <p className="mt-3 text-2xl font-semibold">Organic vegetables & grains</p>
                    <p className="mt-2 text-sm text-white/80">
                      Carefully cultivated for families, retailers, and healthy living.
                    </p>
                  </div>
                  <div className="glass-panel rounded-[24px] p-5 text-white">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[color:var(--gold)]/20 p-3">
                        <Play className="h-5 w-5 fill-current" />
                      </div>
                      <div>
                        <p className="text-sm text-white/75">Trusted by communities</p>
                        <p className="text-lg font-semibold">Freshness delivered daily</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="overflow-hidden rounded-[34px] border border-white/10 bg-[color:var(--card)] shadow-[var(--shadow)]"
            >
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
                alt="Hope Alive Farm sustainable agriculture"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-8"
            >
              <SectionHeading
                eyebrow="About Hope Alive Farm"
                title="A modern farm brand built on care, quality, and sustainability"
                description="Hope Alive Farm is dedicated to growing healthy food and supporting communities through ethical agricultural practices, responsible livestock care, and premium fresh produce distribution."
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="glass-panel rounded-[28px] p-6">
                  <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">Mission</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text)]">
                    To provide sustainable, fresh, and nutritious farm products while creating
                    lasting value for families, partners, and the wider community.
                  </p>
                </div>
                <div className="glass-panel rounded-[28px] p-6">
                  <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">Vision</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text)]">
                    To become a trusted African agricultural brand recognized for innovation,
                    integrity, and exceptional farm-to-table experiences.
                  </p>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[color:var(--primary)]/10 p-3 text-[color:var(--primary)]">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">Sustainable farming focus</h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--text)]">
                      From crop rotation to responsible animal care, every process is designed
                      to protect the land, strengthen productivity, and deliver healthy food
                      you can trust.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Our Services"
              title="Modern farming services designed for reliable production"
              description="We combine practical expertise with sustainable methods to deliver resilient farm operations and dependable food supply."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="products" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Products Showcase"
              title="Fresh harvests and premium farm products"
              description="A beautiful selection of vegetables, fish, poultry products, grains, and organic foods from the Hope Alive Farm ecosystem."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {products.map((product) => (
                <ProductCard key={product.label} {...product} />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="why-choose-us" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Confidence, freshness, and sustainable excellence"
              description="We use a community-first approach that keeps quality high and relationships strong from the first harvest to the final delivery."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-5"
            >
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Gallery"
              title="A visual story of the farm"
              description="Browse a responsive masonry gallery of harvest moments, livestock care, and daily agricultural activity."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="masonry"
            >
              {galleryImages.map((item, index) => (
                <div key={item.title} className="masonry-item">
                  <GalleryCard {...item} onOpen={setLightbox} tall={index % 3 === 0} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="testimonials" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-10">
            <SectionHeading
              eyebrow="Testimonials"
              title="People trust the freshness and professionalism"
              description="A rotating set of customer experiences highlighting quality, service, and reliability."
            />

            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <AnimatePresence mode="wait">
                <TestimonialCard key={activeTestimonial.name} testimonial={activeTestimonial} />
              </AnimatePresence>

              <div className="glass-panel flex flex-row gap-3 rounded-[28px] border border-white/10 p-4 lg:flex-col">
                <button
                  type="button"
                  onClick={() => setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70 text-[color:var(--text-strong)] transition hover:bg-white/90"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setTestimonialIndex((current) => (current + 1) % testimonials.length)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70 text-[color:var(--text-strong)] transition hover:bg-white/90"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Contact Us"
                title="Let’s grow something healthy together"
                description="Reach out for farm supply, partnership opportunities, product inquiries, and wholesale orders."
              />

              <div className="space-y-4">
                <a
                  href="tel:+2348000000000"
                  className="glass-panel flex items-center gap-4 rounded-[24px] p-5 transition hover:-translate-y-0.5"
                >
                  <div className="rounded-2xl bg-[color:var(--primary)]/10 p-3 text-[color:var(--primary)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[color:var(--text)]">Phone</p>
                    <p className="text-lg font-semibold text-[color:var(--text-strong)]">+234 7068423121</p>
                  </div>
                </a>
                <a
                  href="mailto:hello@hopealivefarm.com"
                  className="glass-panel flex items-center gap-4 rounded-[24px] p-5 transition hover:-translate-y-0.5"
                >
                  <div className="rounded-2xl bg-[color:var(--primary)]/10 p-3 text-[color:var(--primary)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[color:var(--text)]">Email</p>
                    <p className="text-lg font-semibold text-[color:var(--text-strong)]">hopealivefarm@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/2347068423121"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25d366] px-6 py-4 font-semibold text-white shadow-[0_20px_40px_rgba(37,211,102,0.28)] transition hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>

              <div className="glass-panel rounded-[28px] p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--gold)]">Follow us</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-white/45 px-4 py-3 transition hover:border-[color:var(--gold)]/30 hover:bg-white/65"
                      >
                        <Icon className="h-5 w-5 text-[color:var(--primary)]" />
                        <span className="flex-1 text-sm font-medium text-[color:var(--text-strong)]">
                          {social.handle}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <form
                onSubmit={(event) => event.preventDefault()}
                className="glass-panel space-y-5 rounded-[34px] border border-white/10 p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-[color:var(--text-strong)]">Full name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-[color:var(--border)] bg-white/70 px-4 py-3 text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/20"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-[color:var(--text-strong)]">Email address</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-[color:var(--border)] bg-white/70 px-4 py-3 text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/20"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-[color:var(--text-strong)]">Subject</span>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-2xl border border-[color:var(--border)] bg-white/70 px-4 py-3 text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/20"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-[color:var(--text-strong)]">Message</span>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your order, partnership, or delivery needs."
                    className="w-full rounded-2xl border border-[color:var(--border)] bg-white/70 px-4 py-3 text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/20"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--primary-2)]"
                >
                  Send Inquiry
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>

              <div className="glass-panel overflow-hidden rounded-[34px] border border-white/10">
                <div className="map-frame relative">
                  <iframe
                    title="Hope Alive Farm location placeholder"
                    src="https://www.google.com/maps?q=Abuja%2C%20Nigeria&output=embed"
                    className="h-full w-full border-0 grayscale-[0.2]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 24 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[32px] bg-black/20 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 rounded-full bg-white/15 p-3 text-white backdrop-blur-sm transition hover:bg-white/25"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={lightbox.image} alt={lightbox.title} className="max-h-[80vh] w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-white/70">Gallery preview</p>
                <h3 className="mt-2 text-2xl font-semibold">{lightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <a
        href="https://wa.me/2347068423121"
        className="fixed bottom-5 right-5 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-[#25d366] shadow-[0_22px_40px_rgba(37,211,102,0.34)] transition hover:-translate-y-0.5 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </div>
  )
}

export default App
