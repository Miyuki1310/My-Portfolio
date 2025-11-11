"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

let engineLoaded = false; // ⚡ cache trạng thái

export default function ParticleBackground() {
  const [init, setInit] = useState(engineLoaded);

  useEffect(() => {
    if (!engineLoaded) {
      initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
      }).then(() => {
        engineLoaded = true;
        setInit(true);
      });
    }
  }, []);

  if (!init) {
    // Render placeholder nền sẫm để tránh flash trắng
    return <div className="fixed inset-0 bg-[#0d0d1f] -z-10" />;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 120,
        particles: {
          number: { value: 80, density: { enable: true } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
          links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
        },
        background: { color: "#0d0d1f" },
      }}
    />
  );
}
