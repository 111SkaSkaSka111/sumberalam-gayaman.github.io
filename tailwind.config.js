/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            fontFamily: {
                merriweather: "Merriweather",
            },

            backgroundImage: {
                heroimage: "",
            },

            colors: {
                primary: "#84cc16",
                dark: "#0f172a",
                gold: "#eab308",
                secondary: "#14b8a6",
            },

            boxShadow: {
                full: "0px 0px 80px -10px #eab308",
            },
        },
    },
    plugins: [],
};
