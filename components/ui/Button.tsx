import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
  href?: never;
};

type ButtonAsAnchor = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function isAnchorProps(props: ButtonProps): props is ButtonAsAnchor {
  return "href" in props && props.href !== undefined;
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "default",
    size = "md",
    fullWidth = false,
  } = props;

  const variantClasses = {
    default:
      "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-blue-500/30",
    outline:
      "border-2 border-slate-300 hover:border-blue-400 bg-transparent text-slate-100 hover:text-white font-medium",
    ghost: "bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-slate-100",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const commonClasses = cn(
    "rounded-lg font-medium transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  if (isAnchorProps(props)) {
    const { href, ...anchorProps } = props;
    return (
      <a
        href={href}
        className={commonClasses}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { ...buttonProps } = props;
  return (
    <button
      className={commonClasses}
      {...buttonProps}
    >
      {children}
    </button>
  );
}