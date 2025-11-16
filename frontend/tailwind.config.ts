/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                ltu: {
                    blue: '#246d93',
                    yellow: '#fbdb57',
                    instagramPink: '#E1306C',
                    instagramPurple: '#833AB4',
                    instagramOrange: '#F77737',
                    instagramYellow: '#FCAF45',
                    instagramBlue: '#405DE6',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
};
