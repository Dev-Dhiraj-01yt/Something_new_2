import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Menu, Search, User, ShoppingCart } from 'lucide-react'
import useProducts from '../hooks/useProducts'
import ProductGrid from '../components/ProductGrid'
import Sidebar from '../components/Sidebar'
import BottomNav from '../components/BottomNav'
import Brand from '../components/Brand'
import hero from '../assets/hero-jar.jpg'

const Jar = ({ className }) => (
  <img src={hero} alt="Glass jar of layered spices bursting open" className={`object-contain mix-blend-multiply ${className}`} />
)

export default function Storefront() {
  const root = useRef(null)
  const { products, loading, error } = useProducts()
  const [cart, setCart] = useState(0)
  const add = () => setCart((c) => c + 1)

  // Timeline: panels/blobs slide in -> cards stagger up -> jar pops in, then drifts
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline()
      tl.from('[data-panel]', { opacity: 0, x: -24, duration: 0.5, stagger: 0.1 })
      if (!loading) tl.from('[data-card]', { opacity: 0, y: 30, stagger: 0.08, duration: 0.6 }, '-=0.2')
      tl.from('[data-jar]', { scale: 0.6, opacity: 0, duration: 0.9, ease: 'back.out(1.7)' }, '-=0.4')
      tl.add(() => gsap.to('[data-jar]', { y: -12, rotation: 1.5, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 }))
    })
  }, { scope: root, dependencies: [loading] })

  return (
    <div ref={root} className="min-h-screen bg-canvas lg:flex lg:h-screen lg:flex-col lg:overflow-hidden">
      {/* Header: 64px on mobile, 76px on desktop */}
      <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-6 bg-bark px-4 lg:h-[76px] lg:px-6">
        <Brand />
        <label className="hidden w-full max-w-md items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 lg:flex">
          <Search className="h-4 w-4 text-white/80" />
          <input placeholder="Search..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/70" />
        </label>
        <div className="hidden items-center gap-5 text-white lg:flex">
          <button aria-label="Profile"><User className="h-5 w-5" /></button>
          <button aria-label="Cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className={`absolute -right-2 -top-2 h-3 min-w-3 rounded-full bg-terracotta text-center text-[9px] font-bold leading-3 ${cart ? '' : 'w-3'}`}>{cart || ''}</span>
          </button>
        </div>
        <button aria-label="Open menu" className="lg:hidden"><Menu className="h-6 w-6 text-white" /></button>
      </header>

      <div className="lg:flex lg:min-h-0 lg:flex-1">
        <Sidebar />

        <main className="pb-28 lg:flex-1 lg:overflow-y-auto lg:pb-0">
          <section className="relative overflow-hidden lg:min-h-[470px]">
            <div data-panel className="absolute left-0 top-0 h-36 w-44 rounded-br-[100%] bg-sage lg:hidden" />
            <div data-panel className="absolute -right-10 top-0 hidden h-72 w-64 rounded-bl-[70%] bg-sage lg:block" />
            <div data-panel className="absolute bottom-0 right-0 hidden h-56 w-56 rounded-tl-[70%] bg-terracotta/90 xl:block" />

            {/* Mobile/tablet hero */}
            <div className="relative mx-auto h-[330px] max-w-xl sm:h-[400px] lg:hidden">
              <h1 data-panel className="absolute left-5 top-14 z-10 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">Elevate<br />Every<br />Dish.</h1>
              <div data-jar className="absolute right-0 top-2 w-[62%]"><Jar className="w-full" /></div>
            </div>
            <div data-panel className="relative mx-auto flex max-w-xl items-center justify-between px-5 py-4 lg:hidden">
              <div className="absolute inset-y-0 right-0 w-44 rounded-l-[3rem] bg-terracotta/90" />
              <p className="relative z-10 max-w-[45%] text-base font-medium text-ink">Curated Artisanal Spices &amp; Premium Groceries</p>
              <button className="relative z-10 rounded-full bg-bark px-7 py-3 text-sm font-semibold text-white shadow-sm">Shop Now</button>
            </div>

            {/* Desktop hero */}
            <div className="relative hidden h-[470px] lg:block">
              <h1 data-panel className="absolute left-10 top-20 z-10 font-serif text-6xl font-bold leading-[1.05] tracking-tight text-ink xl:text-7xl">Elevate<br />Every<br />Dish.</h1>
              <div data-jar className="absolute right-[8%] top-0 w-[50%] max-w-[560px]"><Jar className="w-full" /></div>
              <div data-panel className="absolute bottom-0 right-10 z-10 hidden h-28 w-60 items-end justify-center rounded-t-full bg-sage px-6 pb-3 text-center font-serif text-lg font-bold leading-tight text-white xl:flex">
                Artisanal Spices &amp; Premium Groceries
              </div>
            </div>
          </section>

          <section className="relative z-10 px-5 pb-8 lg:px-10">
            <h2 className="mb-4 mt-2 text-xl font-bold text-ink">Trending Products</h2>
            <ProductGrid products={products} loading={loading} error={error} onAdd={add} className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4" />
          </section>
        </main>
      </div>

      <div className="lg:hidden"><BottomNav /></div>
    </div>
  )
}
