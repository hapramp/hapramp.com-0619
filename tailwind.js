module.exports = {
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['Open Sans']
    },
    colors:{
      white:'#FFF',
      black:'#000',
      primary:'#3F3D56',
      variant1:'#36424D',
      variant2:'#4D364D',
      grey54:'rgba(0, 0, 0, 0.54)',
      grey70:'rgba(0, 0, 0, 0.7)',
      grey250:'#F5F5F5'
    },
    extend: {
      spacing: {
       '72': '18rem',
       '84': '21rem',
       '96': '24rem',
       '120':'30'
      },
      minWidth: {
        '88':'22rem',
        '120':'30rem',
        auto:'auto'
      },
      boxShadow:{
        'soft-lg':'0 0 40px 0 rgba(0,0,0,0.12)'
      }
    }
  },
  variants: {},
  plugins: []
}
