export default function Nav() {
  return (
    <nav className="nav glass-nav">
      <div className="nav-left">
        <a className="brand" href="#inicio" aria-label="Ir a inicio">
          <span className="brand-badge">
            <span className="material-icons-round">code</span>
          </span>
          <span className="brand-text">Joseph</span>
        </a>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      <div className="nav-right">
        <a className="pill-btn" href="#contacto">Contratar</a>
      </div>
    </nav>
  );
}