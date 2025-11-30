import GithubSignIn from "@/components/github-signin";
import GuestComments from "@/components/guest-comment";
import { Separator } from "@/components/ui/separator";

const GuestBook = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="font-inter text-4xl font-semibold text-black dark:text-white mb-4">
            Guestbook
          </p>
          <p className="font-inter text-md font-normal text-black dark:text-zinc-400">
            Leave a permanent mark. Share thoughts, feedback, or just verify
            your visit.
          </p>
        </div>
        <Separator className="my-14 w-8" />
      </div>

      <GithubSignIn />  
      <GuestComments />

    </>
  );
};

export default GuestBook;
