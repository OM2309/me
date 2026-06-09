"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
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
import { ArrowRight } from "lucide-react";
import { sendContactEmail } from "@/actions/mail";
import { useTransition } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      const result = await sendContactEmail({
        ...data,
        phone: "Not provided",
      });
      if (result.success) {
        toast.success("Message sent successfully");
        form.reset();
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-tag-bg)]/50 p-6 sm:p-7">
      <div className="mb-6 space-y-2">
        <h2 className="font-serif text-xl text-foreground">Send a Message</h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          Prefer to write? Fill out the form and I&apos;ll get back to you within
          24 hours.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-foreground">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="h-11 bg-[var(--color-button-bg)] border-[var(--color-border-subtle)] text-[15px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-foreground">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    className="h-11 bg-[var(--color-button-bg)] border-[var(--color-border-subtle)] text-[15px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-foreground">
                  Your Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project..."
                    className="min-h-[140px] resize-none bg-[var(--color-button-bg)] border-[var(--color-border-subtle)] text-[15px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isPending}
            className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-button-bg)] text-[15px] font-medium text-foreground transition-colors hover:bg-[var(--color-tag-bg)] disabled:opacity-50"
          >
            {isPending ? "Sending..." : "Send Message"}
            {!isPending && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </Form>
    </div>
  );
}
