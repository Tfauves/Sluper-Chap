import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import OptionSelection from "./Components/OptionSelection";

function App() {
  return (
    <div>
      <OptionSelection />
      {/* <BrowserRouter>
        <AppRouter />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
