import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logement from './pages/Logement/Logement';
import NotFound from './pages/NotFound/NotFound';
import About from "./pages/About/About";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/logement/:id" element={<Logement/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
