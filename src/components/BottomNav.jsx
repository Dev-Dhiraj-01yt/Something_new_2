import { NavLink } from 'react-router-dom'
import { Home, LayoutGrid, ShoppingCart, User } from 'lucide-react'

const items = [
  { to: '/spice-blends', label: 'Home', icon: Home },
  { to: '/categories', label: 'Categories', icon: LayoutGrid },
  { to: '/cart', label: 'Cart', icon: ShoppingCart },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-30 grid h-[68px] grid-cols-4 rounded-full bg-white/75 shadow-lg backdrop-blur-md">
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[11px] ${isActive ? 'text-leaf font-semibold' : 'text-gray-500'}`}>
          <Icon className="h-5 w-5" /> {label}
        </NavLink>
      ))}
    </nav>
  )
}
