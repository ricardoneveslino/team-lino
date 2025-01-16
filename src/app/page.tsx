import {Hero} from "@/features/hero/hero";
import {Plans} from "@/features/plans/plans";
import {Transformations} from "@/features/transformations/transformations";
import {Faq} from "@/features/faq/faq";
import {AboutUs} from "@/features/about-us/about-us";

export default function Home() {
  return (
      <>
          <section className={"page-section h-[calc(100vh-64px)]"}>
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
