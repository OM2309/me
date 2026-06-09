"use client";

export default function AnimeQuote() {
  return (
    <div className="relative py-10 text-center max-w-lg mx-auto select-none">
      <div className="absolute inset-0 rounded-2xl border border-rose-500/10 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none" />

      <div className="relative space-y-5 px-6">
        <span className="block text-4xl text-rose-400/80 font-serif leading-none">
          &ldquo;
        </span>

        <p className="italic text-muted-foreground text-[15px] sm:text-base leading-relaxed">
          If you don&apos;t like your destiny, don&apos;t accept it. Have the
          courage to change it the way you want it to be.
        </p>

        <p className="text-[10px] sm:text-xs tracking-[0.2em] font-mono text-muted-foreground/70 uppercase">
          Naruto Uzumaki
        </p>
      </div>
    </div>
  );
}
