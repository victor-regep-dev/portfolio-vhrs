import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#050507',
        'brand-graphite': '#0B0B12',
        'brand-dark': '#0D0D18',
        'brand-card': '#0F0F1A',
        'brand-purple': '#8A2BFF',
        'brand-violet': '#A855F7',
        'brand-lilac': '#C084FC',
        'brand-gray': '#B8B8C8',
        'brand-border': 'rgba(138, 43, 255, 0.25)',
        'brand-border-hover': 'rgba(168, 85, 247, 0.6)',
        'whatsapp': '#25D366',
        'whatsapp-dark': '#1DAA53',
        'linkedin': '#0077B5',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(138,43,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(138,43,255,0.04) 1px, transparent 1px)
        `,
        'purple-glow': 'radial-gradient(ellipse at center, rgba(138,43,255,0.15) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 70% 50%, rgba(138,43,255,0.12) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(138,43,255,0.08) 0%, rgba(15,15,26,0) 100%)',
        'glow-border': 'linear-gradient(135deg, rgba(138,43,255,0.5), rgba(168,85,247,0.3), rgba(138,43,255,0.1))',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(138,43,255,0.25)',
        'glow-md': '0 0 30px rgba(138,43,255,0.3)',
        'glow-lg': '0 0 60px rgba(138,43,255,0.35)',
        'glow-xl': '0 0 100px rgba(138,43,255,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(138,43,255,0.15)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(168,85,247,0.4), 0 0 30px rgba(138,43,255,0.2)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'count-up': 'count-up 1s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'particle': 'particle 15s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(138,43,255,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(138,43,255,0.6), 0 0 80px rgba(168,85,247,0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'particle': {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(50px)', opacity: '0' },
        },
      },
      borderRadius: {
        'xl2': '1rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};

export default config;
