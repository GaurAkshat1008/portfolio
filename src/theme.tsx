import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { 
  heading: 'Permanent Marker, cursive',
  body: 'Gentium Plus, serif'  
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  styles:{
    global:{
      '::-webkit-scrollbar':{
        width: '0px',
        display: 'none'
      }
    }
  },
  config, 
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#f0f',
        // _dark: 'rgb(178, 0, 178)',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#0ff',
      },
      heroGradientMid: {
        default: '#ffc4df',
        // _dark: '#fff',
      },
      borderShadowCyan:{
        default:'rgb(2, 141, 141)',
        _dark:'#0ff',
      },
      borderShadowPink:{
        default:'rgb(139, 2, 139)',
        _dark:'#f0f',
      }
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
    white: '#fff',
    cyan: '#0ff',
  },
  fonts,
  breakpoints,
})

export default theme
