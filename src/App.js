import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Introduccion from "./pages/Introduccion.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Introduccion" element={<Introduccion/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
