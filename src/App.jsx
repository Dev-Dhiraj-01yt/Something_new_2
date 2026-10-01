import { Routes, Route, Navigate } from 'react-router-dom'
import Storefront from './pages/Storefront'

const PATHS = ['home', 'spice-blends', 'groceries', 'new-arrivals', 'recipes', 'about', 'contact', 'categories', 'cart', 'profile']

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/spice-blends" replace />} />
      {PATHS.map((p) => <Route key={p} path={`/${p}`} element={<Storefront />} />)}
      <Route path="*" element={<Navigate to="/spice-blends" replace />} />
    </Routes>
  )
}
