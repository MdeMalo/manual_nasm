import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Introduccion from "./pages/Introduccion.jsx";
import Instalacion from "./pages/Instalacion.jsx";
import Ejemplos from "./pages/Ejemplos.jsx";
import Avanzados from "./pages/Avanzados.jsx";
import Recursos from "./pages/Recursos.jsx";
import Contacto from "./pages/Contacto.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Introduccion" element={<Introduccion/>}/>
        <Route path="/Instalacion" element={<Instalacion/>}/>
        <Route path="/Ejemplos" element={<Ejemplos/>}/>
        <Route path="/Avanzados" element={<Avanzados/>}/>
        <Route path="/Recursos" element={<Recursos/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
