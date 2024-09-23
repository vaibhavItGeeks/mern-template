/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["\"Poetsen One\", sans-serif"],
        bodyFont: ["\"Poppins\", sans-serif"],
        buttonFont: ["\"Raleway\", sans-serif"],
      },
      colors: {
        textColour: '#2b2b2b',
        topBarBg: '#000000',
        headerBg: '#ffffff',
      },
      fontSize: {
        largeScreenlogoContent: '35px',
        smallScreenlogoContent: '25px',
        largeScreenContent: '14px',
        smallScreenContent: '11px',
      },
      animation: {
        blueSlider: "blueSlider 2s ease forwards",
        returnBlueSlider: "returnBlueSlider 2s ease forwards",
        form: "form 2s ease forwards",
        formReturn: "formReturn 2s ease forwards",
        formSecond: "formSecond 2s ease forwards",
        formSecondReturn: "formSecondReturn 2s ease forwards",
        loginText: "loginText 2s ease forwards",
        returnLoginText: "returnLoginText 2s ease forwards",
      },
      keyframes: {
        ////////////For Blue Box///////////
        blueSlider: {
          from: { right: '-15%' },
          to: { right: '65%' }
        },
        returnBlueSlider: {
          from: { right: '65%' },
          to: { right: '-15%' }
        },
        ////////////For form Box///////////
        form: {
          from: { left: '-50%' },
          to: { left: '0' }
        },
        formReturn: {
          from: { left: '0' },
          to: { left: '-50%' }
        },
        ////////////For formSecond Box///////////
        formSecond: {
          from: { right: '0' },
          to: { right: '-40%' }
        },
        formSecondReturn: {
          from: { right: '-40%' },
          to: { right: '0' }
        },
      }
    },
  },
  plugins: [],
}