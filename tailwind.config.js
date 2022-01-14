module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
  },
  plugins: [],
  variants: {},
 
    theme: {
        extend: {
            keyframes: {
                'animation1': {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'animation2' : {
                  '0%' :{
                    opacity : '0',
                    transform : 'rotate(20deg)'
                  },
                  '50%' : {
                    opacity : '1',
                    transform : 'rotate(-20deg)'
                  }
                },
                'animation3' : {
                  '0%' : {
                  opacity : '0', 
                  transform : 'rotate(-20deg)'
                  },
                  '33%':{
                    opacity : '33%',
                    transform : 'rotate(-20deg)'
                  },
                  '66%' :{
                    opacity : '66%',
                    transform : 'rotate(-20deg)'
                  }
                },
                 
            },
            animation: {
                'animation1': 'animation1 2s ease-in',
                'animation2' : 'animation2 2s ease-in',
                'animation3' : 'animation3 3s ease-in'
            }
        },
    },
    variants: {},
    plugins: [],

}
