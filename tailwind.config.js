/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'gray': {
                300: '#CCCCCC'
            },
            'green': {
                400: '#40edae',
                500: '#34d399'
            },
            'red': {
                400: '#ef4444',
                500: '#ef2626'
            },
            'paper': {
                400: '#F3EFEB',
                600: '#e3dcd7',
                800: '#8c796c'
            }
        },
        extend: {
            fontFamily: {
                inter: ['var(--font-inter-normal)']
            },
            gridTemplateColumns: {
                fluid: "repeat(auto-fit, minmax(15rem, 1fr))"
            }
        },
    },
    plugins: [],
}
