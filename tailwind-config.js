tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#8b5a2b", /* Rich Bronze/Brown */
                secondary: "#d2b48c", /* Tan/Beige */
                noir: "#3e2723", /* Deep Chocolate Brown */
                background: "#f5ece5", /* Warmer off-white with more depth */
                surface: "#ffffff",
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                sans: ["Montserrat", "sans-serif"],
            },
            spacing: {
                '128': '32rem',
            },
            animation: {
                'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
}
