import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function ModeToggle() {
    return (
        <header className="p-4 flex justify-end ">
           <AnimatedThemeToggler className="cursor-pointer" duration={300} />
        </header>
    );
}