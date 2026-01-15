import Nav from "../src/components/Nav";
import Hero from "../src/components/Hero";
import PlayerFooter from "../src/components/PlayerFooter";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="container">
        <Hero />

        <div className="layout">
          <section id="sobre-mi" className="section card">
            <div className="section-head">
              <h2>Sobre mí</h2>
              <span className="chip">Acerca de mí</span>
            </div>
            <p className="muted">Placeholder</p>
          </section>

          <section id="tecnologias" className="section card">
            <div className="section-head">
              <h2>Tecnologías y habilidades</h2>
              <span className="chip">Stack</span>
            </div>
            <p className="muted">Placeholder</p>
          </section>

          <section id="proyectos" className="section card">
            <div className="section-head">
              <h2>Proyectos</h2>
              <span className="chip">Destacados</span>
            </div>
            <p className="muted">Placeholder</p>
          </section>

          <section id="forma-de-trabajo" className="section card">
            <div className="section-head">
              <h2>Forma de trabajo</h2>
              <span className="chip">Proceso</span>
            </div>
            <p className="muted">Placeholder</p>
          </section>

          <section id="servicios" className="section card">
            <div className="section-head">
              <h2>Servicios freelance</h2>
              <span className="chip">Freelance</span>
            </div>
            <p className="muted">Placeholder</p>
          </section>

          <section id="contacto" className="section card">
            <div className="section-head">
              <h2>Contacto</h2>
              <span className="chip">Let’s work</span>
            </div>
            <p className="muted">Placeholder</p>
          </section>
        </div>
      </main>

      <PlayerFooter />
      <div className="bg-glow" aria-hidden="true"></div>
    </>
  );
}
