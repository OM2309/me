import ContactForm from "@/components/contact-form";
import ContactLinks from "@/components/contact-links";

export default function Contact() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
          Let&apos;s work together
        </p>
        <h1 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight">
          Contact
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
        <ContactLinks />
        <ContactForm />
      </div>
    </div>
  );
}
