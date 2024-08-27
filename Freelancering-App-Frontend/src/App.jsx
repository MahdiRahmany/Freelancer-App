import Auth from "./pages/Auth";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import CompleteProfile from "./pages/CompleteProfile";

function App() {
  return (
    <div className="container xl:max-w-screen-xl">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
      </Routes>
    </div>
  );
}
export default App;
