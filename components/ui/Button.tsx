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
      "bg-primary hover:bg-primary/90 text-white font-semibold shadow-md hover:shadow-lg hover:shadow-primary/30",
    outline:
      "border border-primary/30 hover:border-primary/50 bg-transparent hover:bg-primary/5 text-foreground-primary font-medium",
    ghost: "bg-transparent hover:bg-white/5 text-foreground-secondary hover:text-foreground-primary",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const commonClasses = cn(
    "rounded-full font-medium transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );

  if (isAnchorProps(props)) {
    const {
      href,
      variant: _variant,
      size: _size,
      fullWidth: _fullWidth,
      className: _className,
      children: _children,
      ...anchorProps
    } = props;
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

  const {
    variant: _variant,
    size: _size,
    fullWidth: _fullWidth,
    className: _className,
    children: _children,
    ...buttonProps
  } = props;
  return (
    <button
      className={commonClasses}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
