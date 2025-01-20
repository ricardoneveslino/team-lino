import dynamic from 'next/dynamic';
import {Hero} from "@/features/hero/hero";

const Plans = dynamic(() => import('@/features/plans/plans'));
const Transformations = dynamic(() => import('@/features/transformations/transformations'));
const Faq = dynamic(() => import('@/features/faq/faq'));
const AboutUs = dynamic(() => import('@/features/about-us/about-us'));

export default function Home() {
  return (
      <>
          <section className={"page-section h-screen min-h-[calc(100vh-64px)]"}>
              <Hero/>
          </section>

          <section id={"transformações"} className={"page-section"}>
              <h2 className={"section-heading"}>Transformações</h2>
              <Transformations/>
          </section>

          <section id={"planos"} className={"page-section"}>
              <h2 className={"section-heading"}>Os Nossos Planos</h2>
              <Plans/>
          </section>

          <section id={"sobre-nós"} className={"page-section"}>
              <h2 className={"section-heading"}>Sobre Nós</h2>
              <AboutUs/>
          </section>

          <section id={"faq"} className={"page-section"}>
              <h2 className={"section-heading"}>Perguntas Frequentes</h2>
              <Faq/>
          </section>
      </>
  );
}
