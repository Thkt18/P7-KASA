import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logement from './pages/Logement/Logement';
import NotFound from './pages/NotFound/NotFound';
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/logement" element={<Logement/>} />
        <Route path="/notfound" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
