import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logo}
        alt="FitLog logo"
        priority
        className={`object-contain ${small ? "h-4 w-4" : "h-6 w-6"}`}
      />
      <span
        className={`font-display font-bold uppercase tracking-wide text-white ${
          small ? "text-sm" : "text-xl"
        }`}
      >
        FitLog
      </span>
    </Link>
  );
}