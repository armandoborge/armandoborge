// tailwind.config.js
module.exports = {
    content: ['./src/*.html'],
    theme: {
        extend: {
            colors: {
                white: '#FEFFFF',
                black: '#000000',
                red: '#DD0000',
            },
            fontFamily: {
                // Add your Google Font here
                gantari: ['Gantari', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
