export default function About() {
    return (
        <section
            id="sobre-mi"
            className="rounded-[14px] border border-white/10 bg-[#181818] shadow-[0_10px_30px_rgba(0,0,0,.45)] overflow-hidden"
        >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-[18px] sm:py-[18px]">
                <h2 className="m-0 text-[20px] font-extrabold tracking-[-.02em] text-white">
                    Sobre mí
                </h2>

                <span className="rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-black uppercase tracking-[.12em] text-white/70">
          Acerca de mí
        </span>
            </div>

            {/* Content */}
            <div className="grid gap-4 px-4 pb-5 sm:px-[18px] sm:pb-[18px] sm:grid-cols-2 sm:items-stretch sm:auto-rows-fr lg:grid-cols-[360px_1fr]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-[0_10px_30px_rgba(0,0,0,.45)]
                        h-[240px] sm:h-[320px] lg:h-[380px]">
                    <img
                        src="/img/joseph3.jpeg"
                        alt="Foto de Joseph Avendaño"
                        className="h-full w-full object-cover object-center [transform:scale(1.02)] [filter:contrast(1.05)_saturate(1.05)]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.55)_70%,rgba(0,0,0,.82)_100%)]" />

                    <div className="absolute bottom-3.5 left-3.5 right-3.5">
                        <p className="m-0 font-black tracking-[-.02em] text-white">
                            Joseph Avendaño
                        </p>
                        <p className="mt-1 text-[13px] font-bold text-white/75">
                            Ingeniero de Software
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="min-w-0 flex flex-col sm:min-h-[320px] lg:min-h-[380px]">
                    <div className="sm:flex-none">
                        <p className="m-0 mb-2 text-[14px] leading-[1.75] text-white/80">
                            Soy un desarrollador enfocado en construir <b>software para negocio</b>:
                            soluciones modernas, escalables y fáciles de mantener.
                        </p>

                        <p className="m-0 mb-2 text-[14px] leading-[1.75] text-white/80">
                            Mi especialidad es el <b>desarrollo web</b> (sistemas administrativos,
                            paneles y flujos operativos). También he desarrollado <b>apps Android</b>{" "}
                            y me adapto al stack y la plataforma que el proyecto requiera.
                        </p>

                        <p
                            className="m-0 text-[14px] leading-[1.75] text-white/80
                         sm:[display:-webkit-box] sm:[-webkit-box-orient:vertical] sm:[-webkit-line-clamp:2] sm:overflow-hidden"
                        >
                            Me gusta trabajar con un proceso claro: levantar requisitos, proponer la
                            solución y entregar avances iterativos. Pongo especial énfasis en la{" "}
                            <b>documentación</b> (ERS/SRS, diagramas UML, plan de pruebas y manual de
                            usuario) para que el sistema sea fácil de operar y crecer.
                        </p>
                    </div>

                    <div className="mt-5 sm:mt-6" />

                    {/* Cards*/}
                    <div className="sm:flex-1 sm:min-h-0">
                        <div className="h-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                            {[
                                {
                                    icon: "layers",
                                    title: "Qué construyo",
                                    desc: "Sistemas web orientados a operación y control.",
                                    chips: ["Admin", "Dashboards", "Flujos", "Integraciones"],
                                },
                                {
                                    icon: "rule",
                                    title: "Cómo trabajo",
                                    desc: "Proceso claro y entregas iterativas con validación.",
                                    chips: ["Requisitos", "Propuesta", "Iteraciones", "Feedback"],
                                },
                                {
                                    icon: "description",
                                    title: "Qué entrego",
                                    desc: "Entregables listos para operar, mantener y escalar.",
                                    chips: ["ERS/SRS", "UML", "Pruebas", "Manual"],
                                },
                            ].map((c) => (
                                <div
                                    key={c.title}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10
                                    bg-[linear-gradient(180deg,rgba(255,255,255,.05)_0%,rgba(255,255,255,.02)_100%)]
                                    p-5 shadow-[0_16px_34px_rgba(0,0,0,.35)] backdrop-blur
                                    flex flex-col h-full"
                                >
                                    <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--primary)]/55" />
                                    <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[var(--primary)]/12 blur-3xl" />

                                    <div className="flex-1 min-h-0 flex flex-col items-center justify-center text-center gap-3">
                                        <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
                                            <span
                                              className="
                                              material-icons-round
                                              !text-[44px] sm:!text-[52px]
                                              !leading-none
                                              text-[var(--primary)]
                                              drop-shadow-[0_12px_26px_rgba(0,0,0,.45)]
                                            "
                                            >
                                            {c.icon}
                                          </span>
                                        </div>

                                        <p className="m-0 text-[17px] font-extrabold tracking-[-.02em] text-white">
                                            {c.title}
                                        </p>

                                        <p
                                            className="
                                            m-0 max-w-[36ch] text-[13.5px] font-semibold leading-6 text-white/65
                                            [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden
                                            "
                                        >
                                            {c.desc}
                                        </p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
