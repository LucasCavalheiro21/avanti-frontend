export const Sobre = () => {
  return (
    <>
      <div className="w-full flex-1 bg-white">
        <div className="bg-[#13225E] py-16 md:py-24 px-4 text-center text-white">
          <h1 className="mb-4">Sobre a SkillMatch</h1>
          <p className="text-[18px] md:text-[24px] font-light max-w-3xl mx-auto opacity-90">
            Transformando a forma como o conhecimento é compartilhado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col gap-12 text-[#524f4f]">
          <section>
            <h2 className="text-[#13225E] mb-6">Nossa História</h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed font-light">
              A SkillMatch nasceu da ideia de que todos possuem algo a ensinar e
              todos têm algo a aprender. Em um mundo cada vez mais dinâmico,
              acreditamos que a troca direta de experiências entre profissionais
              é a forma mais rápida e humana de evolução de carreira.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-[#E5E7EB]">
              <h3 className="text-[#0162B3] mb-4">Missão</h3>
              <p className="text-[14px] md:text-[16px] font-light">
                Conectar talentos e democratizar o aprendizado prático em todo o
                Brasil.
              </p>
            </div>
            <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-[#E5E7EB]">
              <h3 className="text-[#4BB002] mb-4">Visão</h3>
              <p className="text-[14px] md:text-[16px] font-light">
                Ser a maior rede de mentoria e aprendizado colaborativo do
                mercado de tecnologia.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
