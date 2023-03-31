/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: "Poppins"
      },
      colors: {
        primaryColor: "#802bb1",
        secondaryColor: "#2d283e",
        textColor: "#d1d7e0",
        subTextColor: "#564f6f",
        outerTextColor: "#4c495d",
        btnHoverColor: "#520f79",
        textGradient: "#995cbd",
        linearBtnColor: "#6d6981"
      },
      backgroundImage: {
        'meng-logo': "url('./assets/Meng_logo.png')",
        'profile-pic': "url('./assets/Grad_Profile.png')",
        'project-1': "url('./assets/project-3-preview.png')",
        'project-2': "url('./assets/project-2-preview.png')",
        'project-3': "url('./assets/project-1-preview.png')"

      }
    },
  },
  plugins: [],
}

