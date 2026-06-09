"use client";

export default function AnimeQuote() {
  return (
    <div className="py-8 text-center space-y-6 font-sans max-w-lg mx-auto select-none cursor-default">
      {/* Decorative quote mark */}
      <span className="block text-4xl md:text-5xl text-yellow-500 font-serif leading-none">
        “
      </span>
      
      {/* Quote text */}
      <p className="italic text-zinc-600 dark:text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-md mx-auto">
        I&rsquo;ve copied over a thousand jutsu. Not to steal them, but to understand them, and surpass those who created them.
      </p>

      {/* Character Name */}
      <div className="text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-zinc-400 dark:text-zinc-500 uppercase">
        —— KAKASHI HATAKE ——
      </div>
    </div>
  );
}
