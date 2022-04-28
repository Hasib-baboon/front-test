module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontSize: {
      xsm: ['9px', '12px'],
      sm: ['12px', '18px'],
      base: '1vw',
      lg: '1.5vw',
      xl: '2vw',
      xll:'3vw',
      xxl: '4vw',
      xxxl: '6vw',
      '5xl': '10vw'
    },
    screens: {
      'ex-sm' : {'max': '300'},
      'xsm': {'min': '300px', 'max': '500px'},

      'sm': {'min': '500px', 'max': '800px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'xsm-sm': {'min': '300px', 'max': '800px'},

      'md': {'min': '800px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'xsm-md': {'min': '300px', 'max': '1023px'},
      'md-up':{'min':'800px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      
      'md-lg': {'min': '800px', 'max': '1279px'},
      
      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      'xl-up': {'min': '1280px'},
      'xl-down': {'max': '1279px'},
      
      'md-xl': {'min': '800px', 'max': '1535px'},
      
      'xsm-xl': {'min': '300px', 'max': '1280px'},

      '2xl': {'min': '1536px', 'max': '2000px'},
      // => @media (min-width: 1536px) { ... }
      'md-2xl': {'min': '800px', 'max': '2000px'},

      'lg-2xl': {'min': '1024px', 'max': '2000px'},

      '3xl': {'min': '2000px', 'max': '3000px'},
      
      '3xl-up': {'min': '2000px'},
      'lg-3xl': {'min': '1024px', 'max': '3000px'},

    },
    extend: {
      blur: {xs: '2px',},
    },
  },
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')],
}
