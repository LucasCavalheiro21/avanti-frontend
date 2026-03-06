import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Registro } from "./pages/Registro";
import { Pessoas } from "./pages/Pessoas";
import { Conhecimentos } from "./pages/Conhecimentos";
import { ConhecimentoForm } from "./pages/ConhecimentoForm";
import { Login } from "./pages/Login";
import { ScrollToTop } from "./components/ScrollToTop";
import { Perfil } from "./pages/Perfil";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F8F9FA]">
      <ScrollToTop />
      <Navbar />

      <main key={location.pathname} className="grow animate-page-entry">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pessoas" element={<Pessoas />} />
          <Route path="/conhecimentos" element={<Conhecimentos />} />
          <Route path="/conhecimentos/novo" element={<ConhecimentoForm />} />
          <Route
            path="/conhecimentos/editar/:id"
            element={<ConhecimentoForm />}
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};
