import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global styles={`
    @font-face{
      font-family: 'Permanent Marker',
      font-style: 'cursive',
      font-weight: 'normal',
      src: url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'),
    }
    @font-face{
      font-family: 'Gentium Plus', serif,
      font-weight: 'Regular',
      src: url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital@1&display=swap'),
    `
    }/>
)