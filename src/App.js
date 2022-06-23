import Routeing from "./routeing";
import './assets/styles/index.css';
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Routeing />
    </AppProvider>
  );
}

export default App;
