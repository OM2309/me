"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Send } from "lucide-react";


const Contact = () => {
  return (
    <Link href="/contact">
      <Button
        size="lg"
        className="text-white dark:text-black dark:bg-white bg-black  ml-2 cursor-pointer border border-gray-700"
      >
        <Send className="w-5 h-5" />
        <span className="font-inter font-semibold text-base leading-[1.6]">
          Get in touch
        </span>
      </Button>
    </Link>
  );
};

export default Contact;
