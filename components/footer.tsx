const Footer = () => {
  return (
    <footer className=" ">
      <div className="flex flex-col justify-center items-center my-10 ">
        <p className="font-inter text-center text-zinc-600 dark:text-zinc-400 text-md font-normal">
          Design and Developed by{" "}
          <span className="underline font-semibold">Anurag</span>
        </p>
        <p className="font-inter text-center text-zinc-600 dark:text-zinc-400 text-sm font-normal ">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
