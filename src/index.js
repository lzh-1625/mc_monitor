import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from '@material-ui/styles';
import App from "./router/router";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#01579b',
    },
    secondary: {
      main: '#ff5722',
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
