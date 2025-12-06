import ContactForm from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="  text-4xl font-semibold text-black dark:text-white mb-4">
            Contact
          </p>
          <p className="text-md font-normal text-black dark:text-zinc-400">
            Get in touch with me. I will get back to you as soon as possible.
          </p>
        </div>
        <Separator className="my-10 w-8" />
      </div>
      <div className="max-w-2xl mx-auto my-10">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
