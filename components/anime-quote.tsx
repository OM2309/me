"use client";

export default function AnimeQuote() {
  return (
    <div className="py-8 text-center space-y-6 font-sans max-w-lg mx-auto select-none cursor-default">
      {/* Decorative quote mark */}
      <span className="block text-4xl md:text-5xl text-yellow-500 font-serif leading-none">
        “
      </span>
      
      {/* Quote text */}
      <p className="italic text-zinc-600 dark:text-zinc-400 text-[15px] sm:text-base leading-relaxed max-w-md mx-auto">
        If you don&rsquo;t like your destiny, don&rsquo;t accept it. Instead, have the courage to change it the way you want it to be.
      </p>

      {/* Character Name */}
      <div className="text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-zinc-500 dark:text-zinc-500 uppercase">
        —— ANAMCARA (NARUTO UZUMAKI) ——
      </div>
    </div>
  );
}
