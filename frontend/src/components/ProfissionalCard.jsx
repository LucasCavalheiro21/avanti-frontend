export const ProfissionalCard = ({ pessoa }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-[#E5E7EB] flex flex-col items-center group hover:-translate-y-1 h-full">
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-[#2092D3] rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        <img
          src={
            pessoa.fotoUrl ||
            `https://api.dicebear.com/9.x/avataaars/svg?seed=${pessoa.nome.replace(/\s+/g, "")}`
          }
          alt={pessoa.nome}
          className="w-24 h-24 bg-[#F0EBEB] rounded-full object-cover border-4 border-white shadow-sm relative z-10"
        />
      </div>
      <h3 className="text-[18px] font-bold text-[#13225E] w-full truncate mb-1">
        {pessoa.nome}
      </h3>
      <p className="text-[#0162B3] font-medium text-[12px] w-full truncate mb-4 opacity-80">
        {pessoa.email}
      </p>

      <div className="w-full h-px bg-[#E5E7EB] mb-4"></div>

      <p className="text-[14px] text-[#524f4f] leading-relaxed line-clamp-3 font-light min-h-15">
        {pessoa.descricao ||
          "Este mentor ainda não adicionou uma descrição ao perfil."}
      </p>

      <span className="mt-4 text-[10px] bg-[#F0EBEB] text-[#524f4f] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {pessoa.buscando === "professor" ? "Mentor" : "Aprendiz"}
      </span>
    </div>
  );
};
