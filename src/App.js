import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Introduccion from "./pages/Introduccion.jsx";
import Instalacion from "./pages/Instalacion.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Introduccion" element={<Introduccion/>}/>
        <Route path="/Instalacion" element={<Instalacion/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
