import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <section className="mt-12 border-t pt-4 pb-6 max-w-2xl mx-auto">
      <footer className="text-sm text-muted-foreground flex justify-between items-center w-full mono">
        <div>© 2025 Anurag Sharma</div>
        <Link
          href="https://github.com/OM2309"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <FaGithub className="text-xl" /> GitHub
        </Link>
      </footer>
    </section>
  );
}
