/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "bg-dark": "#1d1b27",
                "primary-blue": "#4326f2",
            },
            fontFamily: {
                Teko: ["Teko", "sans-serif"],
                Sora: ["Sora", "sans-serif"],
            },
        },
    },
    plugins: [],
};
