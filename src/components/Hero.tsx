export default function Hero() {
  return (
      <header id="inicio" className="mt-[10px]">
        <div className="relative overflow-hidden rounded-[14px]">
          {/* Cover */}
          <div className="relative h-[290px] overflow-hidden rounded-[14px]">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                className="h-full w-full scale-[1.02] object-cover saturate-[1.05] contrast-[1.05]"
            />
            <div
                className="absolute inset-0"
                style={{
                  background:
                      "linear-gradient(180deg, rgba(0,0,0,.20) 0%, rgba(18,18,18,.85) 60%, rgba(18,18,18,1) 100%)",
                }}
            />
          </div>

          {/* Profile */}
          <div className="relative -mt-[90px] flex items-end gap-4 p-[18px] max-[740px]:-mt-[70px] max-[740px]:flex-col max-[740px]:items-start">
            {/* Avatar */}
            <div className="h-[140px] w-[140px] overflow-hidden rounded-[18px] border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,.55)] flex-none">
              <img
                  alt="Foto de Joseph Avendaño"
                  src="/img/joseph1.jpeg"
                  className="h-full w-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="max-w-[820px]">
            <span className="text-[12px] font-black uppercase tracking-[.14em] text-white/75">
              Ingeniero de Software
            </span>

              <h1 className="mt-2 mb-1 text-[clamp(34px,5vw,64px)] leading-[0.95] tracking-[-0.04em] font-bold">
                Hola, soy{" "}
                <span className="text-[var(--primary)] font-bold">
                Joseph Avendaño
              </span>
              </h1>


              <p className="mt-[14px] mb-4 max-w-[780px] text-[16px] leading-[1.6] text-white/80">
                Diseño y construyo soluciones modernas para negocio con arquitectura clara, mantenibilidad y documentación como parte del proceso.
                Desarrollo principalmente aplicaciones web escalables, con flexibilidad para adaptarme al stack y la plataforma que el proyecto requiera.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-[10px]">
                <a
                    href="#proyectos"
                    className="
                  inline-flex items-center gap-[10px]
                  rounded-full bg-[var(--primary)] px-[14px] py-[11px]
                  text-[13px] font-black text-black
                  transition-transform hover:scale-[1.03]
                "
                >
                  <span className="material-icons-round">rocket_launch</span>
                  Ver proyectos
                </a>

                <a
                    href="#contacto"
                    className="
                  inline-flex items-center gap-[10px]
                  rounded-full px-[14px] py-[11px]
                  text-[13px] font-black text-white
                  border border-white/20 bg-transparent
                  transition hover:border-white/35 hover:bg-white/5
                "
                >
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