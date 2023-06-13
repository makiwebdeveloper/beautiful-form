import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      className={twMerge(
        "px-5 py-2 transition rounded-lg text-black/60 hover:text-black hover:bg-emerald-600/20 border border-white/20 hover:border-emerald-600 w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
