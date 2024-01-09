import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, themeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <themeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content">
            <Topbar/>
          </main>
        </div>
      </themeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;