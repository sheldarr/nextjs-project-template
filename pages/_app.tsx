import axios from 'axios';
import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

axios.defaults.timeout = 5000;

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const theme = createMuiTheme({
      palette: {
        primary: { main: '#2fa200' },
      },
    });

    return (
      <>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />;
        </ThemeProvider>
      </>
    );
  }
}

export default CustomApp;
