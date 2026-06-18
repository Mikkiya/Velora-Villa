import Link from "next/link";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  external = false,
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-xs tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-white text-black hover:bg-white/90 active:scale-95",
    outline:
      "border border-white/40 text-white hover:bg-white hover:text-black active:scale-95",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
