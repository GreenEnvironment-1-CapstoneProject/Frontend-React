/** @type {import('tailwindcss').Config} */
export default {
    content: ["./node_modules/preline/preline.js", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            nunito: ["Nunito", "sans-serif"],
        },
        screens: {
            mobile: "320px",
            mobilelg: "520px",
            tablet: "885px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },

        extend: {},
    },

    plugins: [
        // require('@tailwindcss/forms'),
        require('preline/plugin'),
    ],

};
