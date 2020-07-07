import NotoSerifRegular from './fonts/NotoSerif/NotoSerif-Regular.ttf';

const NotoSerif = {
  fontFamily: 'notoSerif-regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('notoSerif-regular'),
    local('notoSerif-regular'),
    url('https://styloriimages-staging.s3.ap-south-1.amazonaws.com/nac_fonts/NotoSerif-Regular.ttf') format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const jewelleryTheme = {
  "palette": {
    "common": { "black": "#000", "white": "#fff" },
    "background": {
      "paper": "#fff",
      "default": "#FAFAFA",
      "fade": "#6e6d72",
      "darkFade": "#59595b"
    },
    "badgeColor":{
      "background":"#d51f63"
    },
    "primary": {
      "light": "#03b362",
      "main": "#009651",
      "dark": "#027741",
      "contrastText": "#fff"
    },
    "secondary": {
      "light": "#4949d8",
      "main": "#33346d",
      "dark": "#20205a",
      "lightFirst": "rgba(246, 153, 163, 1)",
      "mainFirst": "rgba(241, 72, 128, 1)",
      "darkFirst": "rgba(234, 83, 129, 1)",
      "contrastText": "#fff"
    },
    "gold":{
      "main":"#b78231"
    },
    'darkGray':{
      'main':'#6e6d72'
    },
    "stylori":{
      "pinkMain":"#ed1165"
    },
    "typography": {
      "fontFamily": 'notoSerif-regular, Arial',
    },
    overrides: { 
      MuiCssBaseline: {
        '@global': {
          '@font-face': [NotoSerif],
        },
      },
    },
    "error": {
      "light": "rgba(199, 110, 108, 1)",
      "main": "rgba(185, 74, 72, 1)",
      "dark": "rgba(129, 51, 50, 1)",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "#394578",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "#7B7B7B",
      "hint": "rgba(0, 0, 0, 0.38)"
    },
    "overallButoon": {
      "primary": "#F36E23",
      "contrastText": "#fff"
    }
  }
}
