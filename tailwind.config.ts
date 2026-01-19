import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			bg: {
  				primary: '#ffffff',
  				secondary: '#f8f9fa',
  				tertiary: '#f1f3f5',
  				surface: '#ffffff'
  			},
  			accent: {
  				primary: '#3b82f6',
  				secondary: '#6366f1',
  				success: '#10b981',
  				warning: '#f59e0b',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			text: {
  				primary: '#1a1a1a',
  				secondary: '#4a5568',
  				muted: '#718096',
  				light: '#a0aec0'
  			},
  		border: {
  			DEFAULT: 'hsl(var(--border))',
  			subtle: '#e2e8f0',
  			panel: '#cbd5e0',
  			strong: '#a0aec0'
  		},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			mono: [
  				'JetBrains Mono',
  				'monospace'
  			],
  			sans: [
  				'IBM Plex Sans',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.7'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.7'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			'3xl': [
  				'2rem',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			'4xl': [
  				'2.5rem',
  				{
  					lineHeight: '1.3'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem'
  		},
  		boxShadow: {
  			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  		},
  		borderRadius: {
  			xl: '0.75rem',
  			'2xl': '1rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
