import * as React from "react";
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { theme } from "./assets/style/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
