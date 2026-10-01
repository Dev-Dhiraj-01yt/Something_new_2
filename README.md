# Spices For Change
1. cp .env.example .env  (set VITE_API_URL to your backend)
2. npm install && npm run dev
3. Edit normalizeProduct in src/lib/api.js to match your Mongoose schema
4. In Express: app.use(cors({ origin: 'http://localhost:5173' }))
