import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./componets";
import { Home, Shop, Contacts } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
