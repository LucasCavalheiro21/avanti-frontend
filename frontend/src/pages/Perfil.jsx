import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const Perfil = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    descricao: "",
    buscando: "estudante",
    fotoUrl: "",
  });

  const navigate = useNavigate();
  const userId = localStorage.getItem("skillmatch_user_id");

  useEffect(() => {
    if (!userId) {
      navigate("/");
      return;
    }
    api
      .get(`/pessoas/${userId}`)
      .then((res) => {
        setForm({
          nome: res.data.nome || "",
          email: res.data.email || "",
          telefone: res.data.telefone || "",
          descricao: res.data.descricao || "",
          buscando: res.data.buscando || "estudante",
          fotoUrl: res.data.fotoUrl || "",
        });
      })
      .catch(() => console.error("Erro ao carregar dados do usuário"));
  }, [userId, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const atualizar = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/pessoas/${userId}`, form);
      localStorage.setItem("skillmatch_user_name", form.nome);
      localStorage.setItem("skillmatch_user_photo", form.fotoUrl);
      alert("Perfil atualizado com sucesso!");
      navigate("/home");
    } catch {
      alert("Erro ao atualizar o perfil.");
    }
  };

  return (
    <>
      <div className="min-h-[calc(100vh-80px)] bg-[#F8F9FA] flex justify-center py-12 px-4">
        <div className="bg-white w-full max-w-2xl rounded-3xl p-8 md:p-12 shadow-sm border border-[#E5E7EB]">
          <div className="flex flex-col items-center mb-8 border-b border-[#E5E7EB] pb-8">
            <img
              src={
                form.fotoUrl ||
                `https://api.dicebear.com/9.x/avataaars/svg?seed=${form.nome || "user"}`
              }
              alt="Avatar"
              className="w-32 h-32 rounded-full border-4 border-[#2092D3] bg-[#F0EBEB] shadow-md mb-4 object-cover"
            />
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#13225E] text-center">
              Meu Perfil
            </h2>
            <p className="text-[14px] text-[#524f4f] text-center">
              Atualize suas informações e como os outros veem você na rede.
            </p>
          </div>

          <form onSubmit={atualizar} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-[#13225E]">
                Nome Completo
              </label>
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="bg-[#F3F4F6] p-3.5 rounded-lg border-none focus:ring-2 focus:ring-[#0162B3] outline-none text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-[#13225E]">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-[#F3F4F6] p-3.5 rounded-lg border-none focus:ring-2 focus:ring-[#0162B3] outline-none text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-[#13225E]">
                Telefone
              </label>
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                className="bg-[#F3F4F6] p-3.5 rounded-lg border-none focus:ring-2 focus:ring-[#0162B3] outline-none text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-[#13225E]">
                URL da Foto de Perfil
              </label>
              <input
                name="fotoUrl"
                value={form.fotoUrl}
                onChange={handleChange}
                placeholder="https://exemplo.com/suafoto.jpg"
                className="bg-[#F3F4F6] p-3.5 rounded-lg border-none focus:ring-2 focus:ring-[#0162B3] outline-none text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-[#13225E]">
                O que você é na plataforma?
              </label>
              <select
                name="buscando"
                value={form.buscando}
                onChange={handleChange}
                className="bg-[#F3F4F6] p-3.5 rounded-lg border-none focus:ring-2 focus:ring-[#0162B3] outline-none text-[14px] cursor-pointer"
              >
                <option value="estudante">Aprendiz (Estudante)</option>
                <option value="professor">Mentor (Professor)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-[#13225E]">
                Sobre Mim (Bio)
              </label>
              <textarea
                name="descricao"
                placeholder="Conte para a comunidade sobre sua experiência..."
                value={form.descricao}
                onChange={handleChange}
                className="bg-[#F3F4F6] p-3.5 rounded-lg border-none focus:ring-2 focus:ring-[#0162B3] outline-none text-[14px] min-h-30 resize-none"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="flex-1 bg-[#E5E7EB] text-[#524f4f] font-bold py-3.5 rounded-xl hover:bg-[#D1D5DB] transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#0162B3] text-white font-bold py-3.5 rounded-xl hover:bg-[#13225E] transition-colors shadow-md"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
