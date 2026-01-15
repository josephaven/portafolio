export default function Hero() {
  return (
    <header id="inicio" className="hero">
      <div className="hero-top">
        <div className="hero-cover" aria-hidden="true">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="hero-cover-overlay"></div>
        </div>

        <div className="hero-profile">
          <div className="avatar">
            <img alt="Foto de Joseph Avendaño" src="/img/joseph1.jpeg" />
          </div>

          <div className="hero-meta">
            <span className="kicker">Software Engineer</span>
            <h1>Hola, soy <span className="accent">Joseph Avendaño</span></h1>
            <p className="subtitle">Ingeniero de Software, próximo a egresar</p>

            <p className="lead">
              Desarrollo sistemas web bien estructurados, enfocados en resolver problemas reales de negocio,
              cuidando tanto el funcionamiento del software como la comunicación y documentación del proceso.
            </p>

            <div className="hero-cta">
              <a className="cta primary" href="#proyectos">
                <span className="material-icons-round">rocket_launch</span>
                Ver proyectos
              </a>
              <a className="cta ghost" href="#contacto">
                <span className="material-icons-round">mail</span>
                Contactarme
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}