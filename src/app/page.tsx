import dynamic from 'next/dynamic';
import {Hero} from "@/features/hero/hero";

const Plans = dynamic(() => import('@/features/plans/plans'));
const Transformations = dynamic(() => import('@/features/transformations/transformations'));
const Faq = dynamic(() => import('@/features/faq/faq'));
const AboutUs = dynamic(() => import('@/features/about-us/about-us'));

export default function Home() {
  return (
      <>
          <section className={"page-section h-[calc(100vh-64px)] !py-8"}>
              <Hero/>
          </section>
<section id="transformações" class="py-20 px-4">
    {/* Contêiner centralizador para o título */}
    <div class="text-center mb-12 max-w-4xl mx-auto"> 
        
        {/* Título sem classes de cor diferentes */}
        <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Transforma Objetivos em Resultados.
        </h2>
        
        <p class="text-lg text-gray-400 mx-auto max-w-3xl">
            Veja a prova visual da evolução e do impacto dos nossos resultados.
        </p>
    </div>

    {/* Envolve o componente Transformations num div para aplicar a correção CSS (ponto 2) */}
    <div class="carrossel-container">
        <Transformations/>
    </div>
</section>
          <section id={"planos"} className={"page-section"}>
              <div class="text-center mb-12 max-w-4xl mx-auto">
    <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
        <span class="inline-block">Os Nossos Planos</span> 
    </h2>
    <p class="text-lg text-gray-400 mx-auto max-w-3xl">
        Escolha o plano perfeito para começar a sua transformação hoje mesmo.
    </p>
</div>
              <Plans/>
          </section>

          <section id={"sobre-nós"} className={"page-section"}>
              <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
    Sobre Nós
</h2>
              <AboutUs/>
          </section>

          <section id={"faq"} className={"page-section"}>
              <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
    Perguntas Frequentes
</h2>
              <Faq/>
          </section>
      </>
  );
}
