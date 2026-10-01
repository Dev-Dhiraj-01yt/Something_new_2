import { useEffect, useState } from 'react'
import { http, PRODUCTS_ENDPOINT, normalizeProduct } from '../lib/api'

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    http
      .get(PRODUCTS_ENDPOINT, { signal: controller.signal })
      .then((res) => {
        // supports both `[...]` and `{ products: [...] }` responses
        const list = Array.isArray(res.data) ? res.data : res.data.products ?? []
        setProducts(list.map(normalizeProduct))
      })
      .catch((err) => {
        if (axios_isCancel(err)) return
        setError(
          err.response
            ? `Server responded with ${err.response.status}. Please try again.`
            : 'Cannot reach the server. Check your backend URL and that it is running.'
        )
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  return { products, loading, error }
}

const axios_isCancel = (err) => err?.code === 'ERR_CANCELED'
