import axios from 'axios'

// 👉 Put your backend URL in .env as VITE_API_URL (see .env.example).
// The string below is only a placeholder so you can spot it if you forget.
const BASE_URL = import.meta.env.VITE_API_URL || 'YOUR_BACKEND_URL_HERE' // e.g. http://localhost:5000

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// Endpoint path — change to match your Express route
export const PRODUCTS_ENDPOINT = '/api/products'

// Map YOUR Mongoose fields to what the UI expects.
// Left side = what the card uses, right side = what your schema probably calls it.
export function normalizeProduct(p) {
  return {
    id: p._id ?? p.id,
    title: p.name ?? p.title,          // your schema: name? title?
    price: Number(p.price),
    rating: Math.round(p.rating ?? 5), // remove fallback if you store ratings
    badge: p.badge ?? 'Certified Pure',
    image: p.image ?? p.imageUrl,      // your schema: image? imageUrl? images[0]?
    icon: p.icon,                      // optional; only used when there's no image
    tint: p.tint ?? 'from-amber-200 to-amber-600',
  }
}
