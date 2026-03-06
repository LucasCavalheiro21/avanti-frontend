import { HeroSection } from "../components/HeroSection";
import { ObjetivoSection } from "../components/ObjetivoSection";
import { ProfissionaisSection } from "../components/ProfissionaisSection";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="grow w-full">
        <HeroSection />
        <ObjetivoSection />
        <ProfissionaisSection />
      </main>
    </div>
  );
};
