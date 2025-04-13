import { ComponentPropsWithoutRef, ElementType } from "react";
import { TCard } from "./types";

export type CardProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T> &
  TCard;

function Card<T extends ElementType = "button">({
  as,
  image,
  subtitle,
  tag,
  title,
  children,
  className,
  ...rest
}: CardProps<T>) {
  const Component = as ?? "button";

  return (
    <Component
      className={`bg-neutral-0 shadow-lg p-4 flex flex-col gap-4 shrink-0 w-80 rounded text-left ${className}`}
      {...rest}
    >
      <div className="w-full h-48">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <h5 className="bg-blue-500 text-neutral-0 px-3 py-1 w-fit rounded-xl text-sm font-inter">
        {tag}
      </h5>
      <h4 className="text-xl text-neutral-800 font-poppins font-semibold">
        {title}
      </h4>
      <p className="text-lg text-neutral-700 font-inter leading-relaxed">
        {subtitle}
      </p>
      {children}
    </Component>
  );
}

export default Card;
