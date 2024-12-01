/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      boxShadow: {
        sm: "rgba(100, 100, 111, 0.2) 0px 0px 12px 4px", // Your custom shadow
        // You can also add new shadows here
      },
    },
  },
  plugins: [require("daisyui")],
};
