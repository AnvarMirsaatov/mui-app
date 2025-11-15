import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <AppCacheProvider>
            <Main />
            <NextScript />
          </AppCacheProvider>
        </body>
      </Html>
    );
  }
}
