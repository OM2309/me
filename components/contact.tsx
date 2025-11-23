import React from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <Button size="lg" className="text-white dark:text-black dark:bg-white bg-black  ml-2 border border-gray-700">
        <Send className="w-5 h-5"/>
      <span className="font-inter font-semibold text-base leading-[1.6]">Get in touch</span>
    </Button>
  );
};

export default Contact;
