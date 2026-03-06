import { useEffect, useState } from "react";
import { api } from "../services/api";
import { ProfissionalCard } from "./ProfissionalCard";
import { useNavigate } from "react-router-dom";

export const ProfissionaisSection = () => {
  const [pessoas, setPessoas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregar() {
      try {
        const response = await api.get("/pessoas");
        const mentores = response.data.filter(
          (p) => p.buscando === "professor",
        );
        setPessoas(mentores);
      } catch (error) {
        console.error(error);
      }
    }
    carregar();
  }, []);

  const ultimosProfissionais = pessoas.slice(-4);

  return (
    <section
      id="profissionais"
      className="w-full py-16 md:py-24 px-4 bg-[#F8F9FA]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="text-left w-full">
            <h2 className="text-[26px] md:text-[32px] font-extrabold text-[#13225E] tracking-tight mb-2">
              Novos Profissionais na Rede
            </h2>
            <p className="text-[16px] md:text-[20px] text-[#524f4f] font-light">
              Os últimos mentores que acabaram de se juntar a nós.
            </p>
          </div>
          <button
            onClick={() => navigate("/pessoas")}
            className="text-[#0162B3] font-bold text-[16px] flex items-center gap-2 hover:gap-3 transition-all group pb-1 border-b-2 border-transparent hover:border-[#0162B3] whitespace-nowrap"
          >
            Ver todos{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ultimosProfissionais.map((p) => (
            <ProfissionalCard key={p.id} pessoa={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
