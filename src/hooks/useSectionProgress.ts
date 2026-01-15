"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function useSectionProgress() {
  const sections = useMemo(
    () => [
      "#inicio",
      "#sobre-mi",
      "#tecnologias",
      "#proyectos",
      "#forma-de-trabajo",
      "#servicios",
      "#contacto",
    ],
    []
  );

  const labels = useMemo(
    () => [
      "INICIO",
      "SOBRE MÍ",
      "TECNOLOGÍAS",
      "PROYECTOS",
      "FORMA DE TRABAJO",
      "SERVICIOS",
      "CONTACTO",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  const goToIndex = (i: number) => {
    const idx = Math.max(0, Math.min(sections.length - 1, i));
    const el = document.querySelector(sections[idx]);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIndex(idx);
  };

  const getClosestSectionIndex = () => {
    const y = window.scrollY + 140;
    let best = 0;

    for (let i = 0; i < sections.length; i++) {
      const el = document.querySelector(sections[i]) as HTMLElement | null;
      if (!el) continue;
      if (el.offsetTop <= y) best = i;
    }

    return best;
  };

  useEffect(() => {
    const sync = () => setIndex(getClosestSectionIndex());

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(sync);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    sync();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sections]);

  const fillPct = (index / (sections.length - 1)) * 100;
  const label = labels[index];

  return { index, label, fillPct, goToIndex, max: sections.length - 1 };
}