module.exports = {
  mode: 'jit', // Enable JIT mode
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // or other plugins you're using
  ],
};
