/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        whiteColor: '#FFFFFF',
        activeColor: '#419714',
        navText: '#21573f',
        btnGradRight: '#21573f',
        btnGradLeft: '#419714',
        bannerText: '#fff7df',
        missionbg: '#e2e2e2',
        cardbg: '#D4FFD9',
        activebg: '#419714',
        footerbg: '#212121',
        quoteColor: '#505050',
        featureText: '#535353',
        pricingActive: '#419714',
        coursebg: '#d9d9d9',
        contactText: '#5C5C5C'
      },
      backgroundImage: {
        'hero-banner': "url('/src/assets/img/bannerimg.png')",
        'back-img' : "url('/src/assets/img/backimg.png')",
        'why-choose' : "url('/src/assets/img/whychoose.png')"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '38%': '38%',
        '30%': '30%',
        '16': '4rem',
      },
      backgroundPosition: {
        'moveup' : '0 220px',
        'movedown' : '0px 280px',
        'movedownagain': '0px 460px',
        'movedownmobile': '0px 550px'
      }
    },
  },
  plugins: [],
}

