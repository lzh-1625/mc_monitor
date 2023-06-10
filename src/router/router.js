import { Routes, Route } from "react-router-dom";
import Login from "../page/login/index";
import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Home from "../page/home/index";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <switch>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </switch>
    </ThemeProvider>
  );
}
export default App;
