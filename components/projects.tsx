export default function Projects() {
  return (
    <div>
      <h1 className="font-inter text-lg font-semibold text-black dark:text-white">
        Project
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-inter text-lg font-semibold text-black dark:text-white">
            Project 1
          </h2>
          <p className="font-inter text-base leading-[1.6] text-zinc-600 dark:text-zinc-400 max-w-xl">
            Project 1 description
          </p>
        </div>
        <div>
          <h2 className="font-inter text-lg font-semibold text-black dark:text-white">
            Project 2
          </h2>
          <p className="font-inter text-base leading-[1.6] text-zinc-600 dark:text-zinc-400 max-w-xl">
            Project 2 description
          </p>
        </div>
      </div>
    </div>
  );
}
