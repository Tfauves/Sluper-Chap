import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
