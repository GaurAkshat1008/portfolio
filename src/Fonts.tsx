import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global styles={`
    @font-face{
      font-family: 'League Spartan', sans-serif,
      font-weight: '800',
      src: url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@800&display=swap'),
    }
    @font-face{
      font-family: 'Ubuntu', sans-serif,
      font-weight: '400',
      src: url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'),
    `
    }/>
)