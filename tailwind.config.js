/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: '#2F65E3',
                    dark: '#004CFD',
                },
                text: {
                    black: '#000000',
                    '70': 'rgba(0, 0, 0, 0.7)',
                    '50': 'rgba(0, 0, 0, 0.5)',
                    gray: '#999999',
                },
                surface: {
                    white: '#FFFFFF',
                    light: '#F8F8F8',
                    border: '#D9D9D9',
                },
                whatsapp: {
                    light: '#DAF7D9',
                    DEFAULT: '#087E07',
                    dark: '#037312',
                },
                instagram: {
                    light: '#FFD8E9',
                },
                telegram: {
                    light: '#C5EFFF',
                    DEFAULT: '#004CFD',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
