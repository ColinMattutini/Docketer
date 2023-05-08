import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/UI/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#54618a",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#54618a",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <Header />
        <h1>Hello</h1>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
