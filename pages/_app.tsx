import { AppProps } from 'next/app';
import { darken, lighten, math } from 'polished';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const gray = '#828282';
const red = '#cc0000';

const theme = {
  fonts: {
    base: 'Helvetica, Arial, sans-serif',
    mono: 'Inconsolata'
  },
  fontSizes: {
    base: '16px',
    small: '14px'
  },
  lineHeights: {
    base: '1.5'
  },
  spacing: {
    base: '30px'
  },
  sizes: {
    // Width of the content area
    contentWidth: '800px'
  },
  colors: {
    text: '#111',
    background: '#fdfdfd',
    brand: '#2a7ae2',
    gray,
    grayLight: lighten(0.4, gray),
    grayDark: darken(0.25, gray),
    red,
    redLight: lighten(0.4, red),
    black: '#0f0f0f'
  },
  screen: {
    mobile: '600px',
    desktop: '900px'
  }
} as const;

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: typeof theme.fonts;
    fontSizes: typeof theme.fontSizes;
    lineHeights: typeof theme.lineHeights;
    spacing: typeof theme.spacing;
    sizes: typeof theme.sizes;
    colors: typeof theme.colors;
    screen: typeof theme.screen;
  }
}

const GlobalStyle = createGlobalStyle`
  /**
  * Reset some basic elements
  */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  hr,
  dl,
  dd,
  ol,
  ul,
  figure {
    margin: 0;
    padding: 0;
  }

  /**
  * Basic styling
  */
  body {
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeights.base};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-text-size-adjust: 100%;
  }

  /**
  * Set 'margin-bottom' to maintain vertical rhythm
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  ul,
  ol,
  dl,
  figure {
    margin-bottom: ${({ theme }) => math(`${theme.spacing.base} / 2`)};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  /**
  * Images
  */
  img {
    max-width: 100%;
    vertical-align: middle;
  }

  /**
  * Figures
  */
  figure > img {
    display: block;
  }

  figcaption {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  /**
  * Lists
  */
  ul,
  ol {
    margin-left: ${({ theme }) => theme.spacing.base};
  }

  li {
    > ul,
    > ol {
      margin-bottom: 0;
    }
  }

  /**
  * Headings
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
  }

  /**
  * Links
  */
  a {
    color: ${({ theme }) => theme.colors.brand};
    text-decoration: none;
    transition: 0.25s;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;

    &:hover {
      color: ${({ theme }) => lighten(0.2, theme.colors.brand)};
    }
  }

  /**
  * Blockquotes
  */
  blockquote {
    color: ${({ theme }) => theme.colors.gray};
    border-left: 4px solid ${({ theme }) => theme.colors.grayLight};
    padding-left: ${({ theme }) => theme.spacing.base} / 2;
    font-size: 18px;
    letter-spacing: -1px;
    font-style: italic;

    > :last-child {
      margin-bottom: 0;
    }
  }

  /**
  * Icons
  */
  .icon {
    > svg {
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;

      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
