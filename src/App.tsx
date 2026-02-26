import { HashRouter as Router } from "react-router-dom"; 
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "./context/ThemeContext"; 

export default function App() {
  return (
    <ThemeProvider> 
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}