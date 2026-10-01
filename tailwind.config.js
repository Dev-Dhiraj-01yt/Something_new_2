export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { forest: '#1E4631', leaf: '#2F5D3F', bark: '#7A2A10', ink: '#6B2410', terracotta: '#C85A32', canvas: '#FBF8F3', sand: '#F4F1EC', sage: '#8FAB96' },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
