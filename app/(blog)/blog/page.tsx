import { Separator } from "@/components/ui/separator";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="font-inter text-4xl font-semibold text-black dark:text-white">
            Coming Soon
          </p>
        </div>
        <Separator className="my-14 w-8" />
      </div>
    </>
  );
};

export default Blog;
