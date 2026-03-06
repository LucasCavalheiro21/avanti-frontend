export const ObjetivoSection = () => {
  return (
    <section
      id="objetivo"
      className="w-full py-16 md:py-24 px-4 bg-white text-center relative border-b border-[#E5E7EB]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-[26px] md:text-[32px] font-extrabold mb-4 text-[#13225E] tracking-tight">
          Nosso Objetivo
        </h2>
        <div className="w-16 h-1.5 bg-[#4BB002] mx-auto mb-8 rounded-full"></div>
        <p className="max-w-4xl mx-auto mb-16 text-[16px] md:text-[20px] text-[#524f4f] leading-relaxed font-light">
          Democratizar o acesso ao conhecimento prático, conectando mentes
          brilhantes de diversas áreas para promover um crescimento profissional
          contínuo, acelerado e estritamente colaborativo.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="overflow-hidden rounded-2xl shadow-lg border border-[#E5E7EB]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Trabalho em equipe colaborativo"
              className="w-full h-62.5 md:h-87.5 object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg border border-[#E5E7EB]">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
              alt="Mentoria online SkillMatch"
              className="w-full h-62.5 md:h-87.5 object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
