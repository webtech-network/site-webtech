/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Configure your color palette here
                primary: "#FDBC2F",
                'primary-dark': "#DB9A0D",
                'primary-light': "#FFC64A",
                secondary: "#2A3341",
                'secondary-dark': "#1F2733",
                'secondary-light': "#404957",
                danger: "#EC3434",
                'danger-dark': "#C70E0E",
                'danger-light': "#FF4D4D",
                gray: "#F4F1F1"
            },
            container: {
                // you can configure the container to be centered
                center: true,

                // or have default horizontal padding
                padding: '1rem',

                // default breakpoints but with 40px removed
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '900px',
                    xl: '1120px',
                    '2xl': '1200px',
                },
            },

        },
    },
    plugins: [],
};
