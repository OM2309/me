"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Asterisk, Send } from "lucide-react";
import { sendContactEmail } from "@/actions/mail";
import { useTransition } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[+]?[0-9]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message cannot exceed 500 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      const result = await sendContactEmail(data);
      if (result.success) {
        toast.success("Message sent successfully");
        form.reset();
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 lg:space-y-8 grid grid-cols-1 gap-4 lg:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                Name <Asterisk className="h-3 w-3 text-black dark:text-white" />
              </FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="lg:w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                Phone <Asterisk className="h-3 w-3 dark:text-white text-black" />
              </FormLabel>
              <FormControl>
                <Input placeholder="+1234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  Email <Asterisk className="h-3 w-3 dark:text-white text-black" />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="john.doe@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-3">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  Message <Asterisk className="h-3 w-3 text-black dark:text-white" />
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    className="resize-none min-h-[100px] md:min-h-[150px] lg:min-h-[200px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-3">
          <div className="flex items-center justify-center">
            <Button
              disabled={isPending}
              type="submit"
              className="w-full md:w-full flex justify-center items-center text-center"
              size="lg"
            >
              <Send className="mr-2" />
              <span className="hidden md:block">Send Message</span>
              <span className="md:hidden">Send</span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
