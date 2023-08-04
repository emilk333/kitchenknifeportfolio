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
                500: '#62BF64'
            },
            'paper': {
                400: '#F3EFEB',
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
