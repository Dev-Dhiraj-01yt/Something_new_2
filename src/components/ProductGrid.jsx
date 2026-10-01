import ProductCard from './ProductCard'

export default function ProductGrid({ products, loading, error, onAdd, className }) {
  if (loading)
    return (
      <div className={className}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-60 animate-pulse rounded-xl bg-sand" />
        ))}
      </div>
    )
  if (error) return <p role="alert" className="py-6 text-sm text-terracotta">{error}</p>
  return (
    <div className={className}>
      {products.map((p) => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
    </div>
  )
}
