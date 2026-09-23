import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

interface LogoProps {
  small?: boolean;
  hideTextOnMobile?: boolean;
}

export default function Logo({
  small = false,
  hideTextOnMobile = false,
}: LogoProps) {
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
        } ${hideTextOnMobile ? "hidden min-[420px]:inline" : ""}`}
      >
        FitLog
      </span>
    </Link>
  );
}