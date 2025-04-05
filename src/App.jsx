import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./componets";
import { Home } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
