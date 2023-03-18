import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { 
  heading: 'League Spartan, sans-serif',
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
      heroGradientStart: {
        default: '#FFFFFF',
      },
      heroGradientEnd: {
        default: '#FF0000',
      },
      heroGradientMid: {
        default: '#6284FF',
      },
      borderShadowCyan:{
        default:'rgb(2, 141, 141)',
      },
      borderShadowPink:{
        default:'rgb(139, 2, 139)',
      },
      headerGradientStart:{
        default: '#52E5E7',
      },
      headerGradientEnd:{
        default: '#130CB7',
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
  breakpoints,
})

export default theme
