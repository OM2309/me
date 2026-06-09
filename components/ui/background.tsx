"use client";

import { useEffect, useRef, useState } from "react";

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();

    const handleResize = () => updateSize();
    window.addEventListener("resize", handleResize);

    // Draw isometric grid with perspective
    const drawIsometricGrid = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(100, 100, 100, 0.3)";
      ctx.lineWidth = 1;

      const spacing = 40;
      const offset = { x: canvas.width / 2, y: canvas.height / 2 };
      const time = Date.now() * 0.0003;

      // Isometric projection
      const project = (x: number, y: number, z: number) => {
        const angle = Math.PI / 6;
        const sx = (x - y) * Math.cos(angle);
        const sy = (x + y) * Math.sin(angle) - z;
        return {
          x: sx + offset.x,
          y: sy + offset.y,
        };
      };

      // Draw 3D boxes
      const boxSize = 3;
      for (let x = -boxSize; x <= boxSize; x++) {
        for (let y = -boxSize; y <= boxSize; y++) {
          for (let z = 0; z < 3; z++) {
            const wave = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time) * 20;
            const p1 = project(
              x * spacing,
              y * spacing,
              z * spacing + wave
            );
            const p2 = project(
              (x + 1) * spacing,
              y * spacing,
              z * spacing + wave
            );
            const p3 = project(
              (x + 1) * spacing,
              (y + 1) * spacing,
              z * spacing + wave
            );
            const p4 = project(
              x * spacing,
              (y + 1) * spacing,
              z * spacing + wave
            );

            // Draw box edges with varying opacity
            const opacity = 0.15 + Math.sin(time * 2 + x + y + z) * 0.1;
            ctx.strokeStyle = `rgba(150, 150, 150, ${opacity})`;

            // Draw horizontal lines
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(p4.x, p4.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.stroke();

            // Draw vertical lines
            const p1Top = project(x * spacing, y * spacing, (z + 1) * spacing + wave);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p1Top.x, p1Top.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      drawIsometricGrid();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 hidden dark:block"
    />
  );
};

export default Background;
