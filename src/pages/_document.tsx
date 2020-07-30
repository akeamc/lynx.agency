import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../components/styles/global";
import Head from "next/head";
import { defaultTheme } from "../components/styles/theme";
import { ThemeProvider } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <ThemeProvider theme={defaultTheme}>
                <Head>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800;900&display=swap"
                    rel="stylesheet"
                  />
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                  />
                </Head>
                <GlobalStyles />
                <App {...props} />
              </ThemeProvider>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
