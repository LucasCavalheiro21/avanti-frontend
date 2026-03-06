import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../services/api";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({ nome: "", foto: "" });
  const userId = localStorage.getItem("skillmatch_user_id");

  useEffect(() => {
    if (userId) {
      api
        .get(`/pessoas/${userId}`)
        .then((res) => {
          setUser({ nome: res.data.nome, foto: res.data.fotoUrl });
        })
        .catch(() =>
          console.error("Erro ao carregar dados do usuário na Navbar"),
        );
    }
  }, [userId, location.pathname]);

  if (location.pathname === "/" || location.pathname === "/registro") {
    return null;
  }

  const navLinks = [
    { name: "Início", path: "/home" },
    { name: "Sobre", path: "/sobre" },
    { name: "Ofertas", path: "/conhecimentos" },
    { name: "Profissionais", path: "/pessoas" },
    { name: "Contato", path: "/contato" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-[#E5E7EB] shadow-sm">
      <nav className="w-full max-w-screen-2xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
        <div
          className="text-[24px] md:text-[32px] font-extrabold tracking-tighter cursor-pointer flex items-center gap-1"
          onClick={() => navigate("/home")}
        >
          <span className="text-[#13225E]">Skill</span>
          <span className="text-[#0162B3]">Match</span>
        </div>

        <ul className="hidden lg:flex gap-8 items-center font-semibold text-[#524f4f]">
          {navLinks.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => navigate(link.path)}
                className={`text-[16px] hover:text-[#0162B3] transition-colors relative pb-1 group ${
                  location.pathname === link.path ? "text-[#0162B3]" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#0162B3] rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        <div
          className="flex items-center gap-3 md:gap-5 md:border-l-2 border-[#E5E7EB] md:pl-8 cursor-pointer"
          onClick={() => navigate("/perfil")}
        >
          <div className="text-right hidden sm:block">
            <p className="text-[14px] font-bold text-[#13225E] leading-tight hover:text-[#0162B3] transition-colors">
              {user.nome || "Usuário"}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLogout();
              }}
              className="text-[12px] text-[#F13232] hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Sair
            </button>
          </div>
          <img
            src={
              user.foto ||
              `https://api.dicebear.com/9.x/avataaars/svg?seed=${user.nome || "user"}`
            }
            alt="Avatar"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#2092D3] p-0.5 bg-[#F0EBEB] shadow-sm hover:scale-105 transition-transform object-cover"
          />
        </div>
      </nav>

      <div className="lg:hidden flex overflow-x-auto gap-6 py-3 px-4 border-t border-[#E5E7EB] bg-[#f8f9fa] scrollbar-hide">
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`text-[14px] font-semibold whitespace-nowrap ${
              location.pathname === link.path
                ? "text-[#0162B3]"
                : "text-[#524f4f]"
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </header>
  );
};
