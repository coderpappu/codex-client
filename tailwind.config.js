/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "white", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI cl
  },
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.15);",
      },
      animation: {
        text: "text 4s ease infinite",
        fadeIn: "fadeIn 3s ease infinite",
        slideInLeft: "slideInLeft 3s linear infinite",
        scaleIn: "scaleIn 1s ease infinite",
        rotateIn: "rotateIn 1s ease infinite",
        bounceIn: "bounceIn 4s ease infinite",
        pulse: "pulse 4s ease infinite",
        spin: "spin 5s linear infinite",
        flash: "flash 1s ease infinite",
        wobble: "wobble 1s ease infinite",
        hinge: "hinge 1s ease infinite",
        slideInDown: "slideInDown .5s ease-in-out",
      },
      keyframes: {
        // Define your keyframes for new animations if needed
        fadeIn: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "60%",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(40%)",
          },
        },
        slideInDown: {
          " 0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform:
              "translateY(8px)" /* Adjust the amount of downward movement as needed */,
          },
          "100%": {
            transform: "translateY(0)",
          },
          // Add keyframes for other new animations
        },
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
};
