import { NavLink } from 'react-router-dom'
import { Home, Flame, Wheat, ShoppingCart, BookOpen, Info, Mail } from 'lucide-react'

export const NAV = [
  { to: '/home', label: 'Home', icon: Home },
  { to: '/spice-blends', label: 'Spice Blends', icon: Flame },
  { to: '/groceries', label: 'Groceries', icon: Wheat },
  { to: '/new-arrivals', label: 'New Arrivals', icon: ShoppingCart },
  { to: '/recipes', label: 'Recipes', icon: BookOpen },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export default function Sidebar() {
  return (
    <aside className="hidden h-full w-[280px] shrink-0 bg-white px-3 py-4 lg:block">
      <nav className="flex flex-col gap-1">
        {NAV.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${isActive ? 'bg-leaf text-white' : 'text-ink hover:bg-sand'}`
            }
          >
            <Icon className="h-4 w-4" /> {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
