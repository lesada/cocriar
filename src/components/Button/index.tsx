import clsx from "clsx";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  variant?: Variant;
  outlined?: boolean;
} & ComponentProps<"button">;

const baseClasses =
  "w-3xs h-14 py-4 px-8 flex items-center justify-center gap-2.5 shrink-0 rounded-3xl font-semibold";

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue-800 text-neutral-0 border-blue-800",
  secondary: "bg-cyan-600 text-neutral-0 border-cyan-600",
  tertiary: "bg-gold-200 text-neutral-0 border-gold-200",
};

const outlinedClasses: Record<Variant, string> = {
  primary: "bg-transparent text-blue-800 border-blue-800",
  secondary: "bg-transparent text-cyan-600 border-cyan-600",
  tertiary: "bg-transparent text-gold-200 border-gold-200",
};

function Button({
  variant = "primary",
  disabled = false,
  outlined = false,
  className,
  ...rest
}: ButtonProps) {
  const variantStyle = outlined
    ? outlinedClasses[variant]
    : variantClasses[variant];

  const disabledClasses =
    "bg-neutral-400 text-neutral-800 border-neutral-400 cursor-not-allowed";

  return (
    <button
      className={twMerge(
        clsx(
          baseClasses,
          outlined && "border-2",
          !disabled && "cursor-pointer",
          disabled ? disabledClasses : variantStyle,
          className
        )
      )}
      disabled={disabled}
      {...rest}
    />
  );
}

export default Button;
