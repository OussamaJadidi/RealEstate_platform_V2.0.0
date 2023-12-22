import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto :["Roboto","sans-serif"],
        rubik:["Rubik","sans-serif"],
        vietnam: ["Be Vietnam Pro","sans serif"],
        pixel:['Pixelify Sans',"cursive"]
      },
      animation: {
        'drive-in': 'driveIn .2s ease-in-out',
        'drive-out': 'driveOut .2s ease-in-out',
        'pop-up': "popUp .2s ease-out"
      },
      keyframes: {
        driveIn: {
          '0%': { transform: 'translateY(-15%)' },
          '100%': { transform: 'translateY(0)' },
        },
        popUp:{
          '0%': { transform: 'scale(.7)' },
          '100%': { transform: 'scale(1)' },
        },
        driveOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
    screens: {
      'sm': '641px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1281px',
      '2xl': '1537px',
      '516px': {'min': '516px'},
      'max-341px': {'max':'341px'},
      'max-400px': {'max':'400px'},
      'max-516px': {'max': '516px'},
      'max-710px': {'max':'710px'},
      '480px': {'min':'480px'},
      '850px': {'min': '850px'},
      '1200px': {'min':'1200px'},
      'max-sm': {'max': '640px'},
      'max-md': {'max': '768px'},
      'max-lg': {'max': '1024px'},
      'max-xl': {'max': '1280px'},
      'max-2xl': {'max': '1536px'},
      
    },
    
  },

}
export default config
