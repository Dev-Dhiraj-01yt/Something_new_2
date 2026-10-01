import * as Icons from 'lucide-react'
import { CheckCircle2, Star } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  const Icon = Icons[product.icon] || Icons.Leaf
  return (
    <article data-card className="overflow-hidden rounded-xl bg-white p-2 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-50">
        {product.image ? (
          <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${product.tint}`}>
            <Icon className="h-10 w-10 text-white/80" strokeWidth={1.5} />
          </div>
        )}
        <CheckCircle2 className="absolute left-2 top-2 h-6 w-6 rounded-full bg-leaf/90 p-0.5 text-white" />
        <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full border border-white/40 bg-leaf/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
          <CheckCircle2 className="h-3 w-3" /> {product.badge}
        </span>
      </div>
      <div className="px-1 pb-1">
        <span className="mt-2 block truncate text-sm font-medium text-ink">{product.title}</span>
        <p className="text-sm font-bold text-ink">${product.price.toFixed(2)}</p>
        <div className="mt-0.5 flex gap-0.5" aria-label={`${product.rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} className={`h-3.5 w-3.5 text-amber-400 ${n <= product.rating ? 'fill-amber-400' : ''}`} />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <button onClick={() => onAdd(product)} className="rounded-full bg-leaf px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-forest">+Cart</button>
          <button className="rounded-full border border-gray-300 px-3 py-1.5 text-xs text-gray-700 transition-colors hover:border-gray-500">details</button>
        </div>
      </div>
    </article>
  )
}
