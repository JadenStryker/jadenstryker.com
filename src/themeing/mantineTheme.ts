import { createTheme, rem } from '@mantine/core'

export const appTheme = createTheme({
    colors: {
      scienceOrange: ['#762d00', '#9d3c00', '#b34500', '#cc4e00', '#ff6200', '#ff4d00', '#ff8133', '#ff914d', '#ff8d00', '#ffa200', '#c4703b'],
    },
    primaryColor: 'scienceOrange',
    shadows: {
      md: '1px 2px 3px rgba(0, 0, 0, .25)',
      xl: '5px 5px 3px rgba(0, 0, 0, .25)',
      indent: 'inset -1px -1px 2px #ff6200, inset 4px 3px 0px #9d3c00',
      work: 'inset -1px -2px 2px #ff6200, inset 1px 2px 0px #9d3c00',
      welcomeDropMiddle: 'inset 0px -2px 1px #ff6200, inset 1px 3px 2px #9d3c00',
      welcomeDropLeft: 'inset 2px -2px 1px #ff6200, inset -1px 2px 2px #9d3c00',
      welcomeDropRight: 'inset -1.75px -2px 1px #ff6200, inset 2.5px 2px 2px #9d3c00',
      mediaComponent: '4px 3px 3px #762d00'
    },
      fontFamily: 'Raleway, sans-serif',
      fontSizes: {
        xs: rem(10),
        sm: rem(11),
        md: rem(14),
        lg: rem(16),
        xl: rem(20),
        xxl: rem(24),
        scr: rem(120),
      },
  });