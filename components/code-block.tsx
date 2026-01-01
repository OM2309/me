import CopyButton from "@/components/copy-button";

export function CodeBlock({
  children,
  language,
}: {
  children: string;
  language?: string;
}) {
  return (
    <div className="relative group">
      <pre className="bg-muted/50 border border-border rounded-xl overflow-x-auto py-4 px-6 text-sm font-mono leading-relaxed">
        <code className={`language-${language || "text"}`}>{children}</code>
      </pre>

      <CopyButton
        text={children}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
}
