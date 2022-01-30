import Document, { Html, Head, Main, NextScript } from 'next/document';

import { THEME_KEY } from '@utils/constants';

class WebsiteDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  function getInitialTheme() {
                    const savedTheme = window.localStorage.getItem('${THEME_KEY}');
                    const hasSavedTheme = typeof savedTheme === 'string';
                    if (hasSavedTheme) {
                      return savedTheme;
                    }
                    
                    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                    const hasMediaQueryPreference = typeof prefersDarkQuery.matches === 'boolean';
                    if (hasMediaQueryPreference) {
                      const theme = prefersDarkQuery.matches ? 'dark' : 'light';
                      window.localStorage.setItem('${THEME_KEY}', theme);
                      return theme;
                    }

                    window.localStorage.setItem('${THEME_KEY}', 'light');
                    return 'light';
                  }
                  const theme = getInitialTheme();
                  document.body.classList.add(theme);
                })()
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default WebsiteDocument;
