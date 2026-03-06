import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";

export const ConhecimentoForm = () => {
  const [pessoas, setPessoas] = useState([]);
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    categoria: "Tech",
    nivel: "Básico",
    pessoa_id: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/pessoas")
      .then((response) => {
        setPessoas(response.data);
        if (response.data.length > 0 && !id) {
          setForm((prev) =>
            prev.pessoa_id ? prev : { ...prev, pessoa_id: response.data[0].id },
          );
        }
      })
      .catch((error) => console.error(error));

    if (id) {
      api
        .get(`/conhecimentos/${id}`)
        .then((response) => setForm(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const salvar = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/conhecimentos/${id}`, form);
      } else {
        await api.post("/conhecimentos", form);
      }
      navigate("/conhecimentos");
    } catch (error) {
      console.error(error);
    }
  };

  const categorias = [
    "Tech",
    "Music",
    "Design",
    "Languages",
    "Business",
    "Marketing",
  ];
  const niveis = ["Básico", "Intermediário", "Avançado", "Especialista"];

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <div className="grow flex items-center justify-center p-6 py-16 animate-slide-in">
        <form
          onSubmit={salvar}
          className="bg-white p-12 rounded-3xl shadow-xl w-full max-w-2xl flex flex-col gap-7 border border-[#E5E7EB]"
        >
          <div className="border-b border-[#E5E7EB] pb-6 mb-2">
            <h2 className="text-4xl font-extrabold text-[#13225E] tracking-tight">
              {id ? "Atualizar Oferta" : "Publicar Nova Oferta"}
            </h2>
            <p className="text-[#524f4f] mt-2 text-lg font-light">
              Preencha os detalhes do conhecimento que você deseja compartilhar.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#13225E] ml-1">
              Profissional Ofertante *
            </label>
            <select
              name="pessoa_id"
              className="w-full bg-[#F3F4F6] border border-transparent p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0162B3] focus:bg-white transition-all text-base cursor-pointer"
              value={form.pessoa_id}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o Profissional</option>
              {pessoas.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nome} ({p.email})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#13225E] ml-1">
              Título da Oferta *
            </label>
            <input
              name="titulo"
              placeholder="Ex: Mentoria Prática de React com TypeScript"
              className="w-full bg-[#F3F4F6] border border-transparent p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0162B3] focus:bg-white transition-all text-base"
              value={form.titulo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#13225E] ml-1">
              Descrição Detalhada *
            </label>
            <textarea
              name="descricao"
              placeholder="Descreva o que será ensinado, pré-requisitos, formato (online/presencial) e o que o aprendiz pode esperar."
              className="w-full bg-[#F3F4F6] border border-transparent p-4 rounded-xl h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#0162B3] focus:bg-white transition-all text-base font-light"
              value={form.descricao}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-sm font-bold text-[#13225E] ml-1">
                Categoria *
              </label>
              <select
                name="categoria"
                className="w-full bg-[#F3F4F6] border border-transparent p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0162B3] focus:bg-white transition-all text-base cursor-pointer"
                value={form.categoria}
                onChange={handleChange}
              >
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="text-sm font-bold text-[#13225E] ml-1">
                Nível de Proficiência *
              </label>
              <select
                name="nivel"
                className="w-full bg-[#F3F4F6] border border-transparent p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0162B3] focus:bg-white transition-all text-base cursor-pointer"
                value={form.nivel}
                onChange={handleChange}
              >
                {niveis.map((niv) => (
                  <option key={niv} value={niv}>
                    {niv}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-5 mt-8 border-t border-[#E5E7EB] pt-8">
            <button
              type="button"
              onClick={() => navigate("/conhecimentos")}
              className="flex-1 bg-[#F3F4F6] text-[#524f4f] py-4 rounded-xl font-bold hover:bg-[#E5E7EB] transition-colors text-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#4BB002] text-white py-4 rounded-xl font-bold hover:bg-[#3da002] transition-all shadow-md text-lg"
            >
              {id ? "Salvar Alterações" : "Publicar Oferta"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
