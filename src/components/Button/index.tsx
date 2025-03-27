import clsx from "clsx";
import { ComponentProps } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
} & ComponentProps<"button">;

function Button({
  variant = "primary",
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-3xs h-14 py-4 px-8 flex items-center justify-center gap-2.5 shrink-0  rounded-3xl text-neutral-0 ",
        {
          "bg-blue-800": variant === "primary",
          "bg-cyan-600": variant === "secondary",
          "bg-gold-200": variant === "tertiary",
          "cursor-pointer": !disabled,
          "bg-neutral-400 text-neutral-800 cursor-not-allowed": disabled,
        }
      )}
      disabled={disabled}
      {...rest}
    />
  );
}

export default Button;
