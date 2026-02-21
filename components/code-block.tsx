import CopyButton from "@/components/copy-button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({
  children,
  language,
}: {
  children: string;
  language?: string;
}) {
  return (
    <div className="relative group">
      <SyntaxHighlighter
        language={language || "text"}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: "0.75rem",
          padding: "1rem 1.5rem",
          fontSize: "0.875rem",
          lineHeight: "1.625",
        }}
      >
        {children}
      </SyntaxHighlighter>

      <CopyButton
        text={children}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
  );
}
