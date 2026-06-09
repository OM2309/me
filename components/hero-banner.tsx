"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Doto } from "next/font/google";

const doto = Doto({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
  variable: "--font-doto",
});

export default function HeroBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState({ hours: "00", minutes: "00", seconds: "00" });
  const [mounted, setMounted] = useState(false);

  // Live Clock Effect
  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const pad = (num: number) => String(num).padStart(2, "0");
      setTime({
        hours: pad(now.getHours()),
        minutes: pad(now.getMinutes()),
        seconds: pad(now.getSeconds()),
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Canvas Sakura Petals Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Petal class definition
    class SakuraPetal {
      x = 0;
      y = 0;
      w = 0;
      h = 0;
      opacity = 0;
      vx = 0;
      vy = 0;
      rotation = 0;
      rotationSpeed = 0;

      constructor(init = false) {
        this.reset(init);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * -height : -10;
        this.w = Math.random() * 6 + 4;
        this.h = this.w * (Math.random() * 0.4 + 0.8);
        this.opacity = Math.random() * 0.5 + 0.2;
        this.vx = Math.random() * -1.2 - 0.4; // drift left
        this.vy = Math.random() * 1.2 + 0.8; // fall down
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.y > height || this.x < -10) {
          this.reset(false);
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);
        c.beginPath();
        c.ellipse(0, 0, this.w / 2, this.h / 2, 0, 0, Math.PI * 2);
        // Pink sakura color scheme
        c.fillStyle = `rgba(244, 63, 94, ${this.opacity})`;
        c.fill();
        c.restore();
      }
    }

    const petals: SakuraPetal[] = [];
    const petalCount = 35;
    for (let i = 0; i < petalCount; i++) {
      petals.push(new SakuraPetal(true));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render drifting petals
      petals.forEach((petal) => {
        petal.update();
        petal.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className={`relative aspect-[2167/630] w-full overflow-hidden bg-white shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:bg-black dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)] rounded-xl ${doto.variable}`}
    >
      {/* Light Mode Banner (Uses Mount Fuji styled with light opacity/mix-blend overlay) */}
      <div className="absolute inset-0 dark:hidden">
        <Image
          src="/images/banner-dark.webp"
          alt="Light mode banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-85 saturate-[0.85] brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]" />
      </div>

      {/* Dark Mode Banner */}
      <div className="absolute inset-0 hidden dark:block">
        <Image
          src="/images/banner-dark.webp"
          alt="Dark mode banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Interactive Animation Overlay */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-4 h-full w-full"
      />

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-5 h-16 bg-linear-to-t from-white/80 to-transparent dark:h-20 dark:from-black/80" />

      {/* Live Digital Clock */}
      {mounted && (
        <div className="pointer-events-auto absolute right-4 bottom-2.5 z-10 select-none">
          <div className="flex h-[18px] items-center sm:h-[24px]">
            <div
              className="flex h-full items-center text-[15px] tracking-[0.15em] text-[#9e2820] sm:text-[22px] dark:text-zinc-100"
              style={{
                fontFamily: "var(--font-doto), monospace",
                fontWeight: 900,
              }}
            >
              <span>{time.hours}</span>
              <div className="mx-0.5 flex translate-x-[-1px] flex-col gap-1 sm:mx-1 sm:translate-x-[-2px] sm:gap-1.5">
                <div className="h-[2px] w-[2px] bg-[#9e2820] sm:h-[3px] sm:w-[3px] dark:bg-zinc-100 rounded-full" />
                <div className="h-[2px] w-[2px] bg-[#9e2820] sm:h-[3px] sm:w-[3px] dark:bg-zinc-100 rounded-full" />
              </div>
              <span>{time.minutes}</span>
              <div className="mx-0.5 flex translate-x-[-1px] flex-col gap-1 sm:mx-1 sm:translate-x-[-2px] sm:gap-1.5">
                <div className="h-[2px] w-[2px] bg-[#9e2820] sm:h-[3px] sm:w-[3px] dark:bg-zinc-100 rounded-full" />
                <div className="h-[2px] w-[2px] bg-[#9e2820] sm:h-[3px] sm:w-[3px] dark:bg-zinc-100 rounded-full" />
              </div>
              <span>{time.seconds}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
