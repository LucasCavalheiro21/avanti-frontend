import { useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/registro") {
    return null;
  }

  return (
    <footer className="w-full bg-[#13225E] text-[#F0EBEB] mt-auto">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <div className="text-[28px] font-extrabold tracking-tighter flex items-center gap-1 mb-4">
            <span className="text-white">Skill</span>
            <span className="text-[#2092D3]">Match</span>
          </div>
          <p className="text-[#E5E7EB] text-[14px] md:text-[16px] leading-relaxed max-w-md font-light opacity-80">
            A maior plataforma colaborativa de troca de conhecimento
            profissional do Brasil.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-bold text-[18px] text-white mb-2">Plataforma</h4>
          <button
            onClick={() => navigate("/home")}
            className="text-left text-[#E5E7EB] hover:text-[#FFD84F] text-[14px] transition-colors bg-transparent border-none p-0 cursor-pointer w-fit"
          >
            Início
          </button>
          <button
            onClick={() => navigate("/conhecimentos")}
            className="text-left text-[#E5E7EB] hover:text-[#FFD84F] text-[14px] transition-colors bg-transparent border-none p-0 cursor-pointer w-fit"
          >
            Ofertas
          </button>
          <button
            onClick={() => navigate("/pessoas")}
            className="text-left text-[#E5E7EB] hover:text-[#FFD84F] text-[14px] transition-colors bg-transparent border-none p-0 cursor-pointer w-fit"
          >
            Profissionais
          </button>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-bold text-[18px] text-white mb-2">
            Institucional
          </h4>
          <button
            onClick={() => navigate("/sobre")}
            className="text-left text-[#E5E7EB] hover:text-[#FFD84F] text-[14px] transition-colors bg-transparent border-none p-0 cursor-pointer w-fit"
          >
            Sobre Nós
          </button>
          <button
            onClick={() => navigate("/contato")}
            className="text-left text-[#E5E7EB] hover:text-[#FFD84F] text-[14px] transition-colors bg-transparent border-none p-0 cursor-pointer w-fit"
          >
            Contato
          </button>
          <button className="text-left text-[#E5E7EB] hover:text-[#FFD84F] text-[14px] transition-colors bg-transparent border-none p-0 cursor-pointer w-fit">
            Privacidade
          </button>
        </div>
      </div>

      <div className="w-full border-t border-white/10 bg-[#0e1945] py-6 text-center">
        <p className="text-[#F0EBEB] text-[12px] font-light opacity-50">
          © 2026 SkillMatch Inc. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
