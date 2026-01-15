"use client";

import { useSectionProgress } from "../hooks/useSectionProgress";

export default function PlayerFooter() {
  const { index, label, fillPct, goToIndex, max } = useSectionProgress();

  return (
    <footer className="player">
      <div className="player-left">
        <div className="player-cover" aria-hidden="true">
          <img alt="" src="/img/joseph1.jpeg" />
        </div>
        <div className="player-meta">
          <a className="player-title" href="#inicio">Joseph Avendaño</a>
          <a className="player-sub" href="#sobre-mi">Software Engineer • Portafolio</a>
        </div>
        <span className="material-icons-round ok">check_circle</span>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button
            className="ctrl ghost"
            type="button"
            title="Inicio"
            onClick={() => goToIndex(0)}
          >
            <span className="material-icons-round">skip_previous</span>
          </button>

          <button
            className="ctrl play"
            type="button"
            title="Siguiente sección"
            onClick={() => goToIndex(index + 1)}
          >
            <span className="material-icons-round">play_arrow</span>
          </button>

          <button
            className="ctrl ghost"
            type="button"
            title="Contacto"
            onClick={() => goToIndex(max)}
          >
            <span className="material-icons-round">skip_next</span>
          </button>
        </div>

        <div className="player-progress" title="Navegación por secciones">
          <span className="t">INICIO</span>

          <div className="track">
            <div className="track-fill" style={{ width: `${fillPct}%` }} />
            <input
              id="scrub"
              type="range"
              min={0}
              max={max}
              value={index}
              step={1}
              aria-label="Cambiar sección"
              onChange={(e) => goToIndex(parseInt(e.target.value, 10))}
            />
          </div>

          <span className="t">{label}</span>
        </div>
      </div>

      <div className="player-right">
        <button className="mini" type="button" title="Modo enfoque">
          <span className="material-icons-round">fullscreen</span>
        </button>
      </div>
    </footer>
  );
}