export default function Nav() {
  return (
      <nav
          className="
        fixed left-1/2 top-4 z-[60] -translate-x-1/2
        flex w-[min(1100px,95%)] items-center justify-between
        rounded-full border border-white/10
        bg-[rgba(18,18,18,.72)] px-[18px] py-[12px]
        shadow-[0_10px_30px_rgba(0,0,0,.45)]
        backdrop-blur-[14px]
      "
      >
        <div className="flex items-center gap-[18px]">
          <a
              className="flex items-center gap-2.5 text-white no-underline"
              href="#inicio"
              aria-label="Ir a inicio"
          >
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[var(--primary)] text-black">
            <span className="material-icons-round">code</span>
          </span>

            <span className="hidden font-extrabold tracking-[-.02em] sm:block">
            Joseph
          </span>
          </a>

          <div className="hidden items-center gap-4 text-[13px] font-bold md:flex">
            <a className="text-white/70 transition hover:text-white" href="#inicio">Inicio</a>
            <a className="text-white/70 transition hover:text-white" href="#sobre-mi">Sobre mí</a>
            <a className="text-white/70 transition hover:text-white" href="#proyectos">Proyectos</a>
            <a className="text-white/70 transition hover:text-white" href="#servicios">Servicios</a>
            <a className="text-white/70 transition hover:text-white" href="#contacto">Contacto</a>
          </div>
        </div>

        <a
            href="#contacto"
            className="
          inline-flex items-center justify-center
          rounded-full bg-white px-[14px] py-[9px]
          text-[13px] font-extrabold text-black
          shadow-[0_10px_30px_rgba(0,0,0,.45)]
          transition-transform hover:scale-[1.04]
        "
        >
          Contratar
        </a>
      </nav>
  );
}