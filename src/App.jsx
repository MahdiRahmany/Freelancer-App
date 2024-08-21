import Auth from "./components/Auth/Auth";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
export default App;
