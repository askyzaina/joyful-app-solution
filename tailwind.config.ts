
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['IBM Plex Sans', 'sans-serif'],
				'mono': ['IBM Plex Mono', 'monospace'],
				'heading': ['IBM Plex Sans', 'sans-serif'],
				'body': ['IBM Plex Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cyber: {
					'blue': '#4f46e5', // Changed to indigo
					'blue-dark': '#4338ca', // Changed to darker indigo
					'dark': '#0a192f',
					'black': '#050a18',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'pulse-soft': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.95',
						transform: 'scale(1.01)'
					},
				},
				'slide-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					},
				},
				'slide-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					},
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-10px)'
					},
				},
				'shimmer': {
					'100%': {
						transform: 'translateX(100%)',
					},
				},
				'shine': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '0% 0' },
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px 2px rgba(0, 210, 255, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 20px 5px rgba(0, 210, 255, 0.5)'
					},
				},
				'cyber-pulse': {
					'0%, 100%': {
						backgroundColor: 'rgba(0, 210, 255, 0.7)'
					},
					'50%': {
						backgroundColor: 'rgba(58, 123, 213, 0.8)'
					}
				},
				'scan-line': {
					'0%, 100%': {
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'10%, 90%': {
						opacity: '0.6'
					},
					'50%': {
						transform: 'translateY(100%)',
						opacity: '0.3'
					}
				},
				'data-packet': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-10px)'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(10px)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'pulse-soft': 'pulse-soft 3s infinite ease-in-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite',
				'shine': 'shine 3s linear infinite',
				'glow': 'glow 3s infinite ease-in-out',
				'cyber-pulse': 'cyber-pulse 3s infinite ease-in-out',
				'scan-line': 'scan-line 4s ease-in-out infinite',
				'data-packet': 'data-packet 3s infinite linear',
			},
			backgroundSize: {
				'200%': '200% 100%',
			},
			backgroundImage: {
				'malware-grid': "url('/lovable-uploads/7950b938-4299-49bb-9d7a-4d36e274a9b2.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cyber-glow': 'radial-gradient(circle, rgba(0, 210, 255, 0.3) 0%, rgba(58, 123, 213, 0.1) 70%, transparent 100%)',
				'dark-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300d2ff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
				'circuit-pattern': 'url("data:image/svg+xml,%3Csvg width=\'42\' height=\'44\' viewBox=\'0 0 42 44\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300d2ff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
