import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  label?: string;
}

export default function Input({ error, label, ...props }: Props) {
  return (
    <label className="flex flex-col space-y-1">
      <div className="flex justify-between">
        <span className={twMerge("text-black/60", error && "text-red-500")}>
          {label}
        </span>
        {error && (
          <span className="text-sm text-red-500/80">
            {error?.message || "Error"}
          </span>
        )}
      </div>
      <input
        type="text"
        className={twMerge(
          "outline-none transition px-4 py-2 bg-transparent placeholder:text-black/60 focus:bg-emerald-600/20 border border-white/20 focus:border-emerald-600 rounded-lg",
          error && "border-red-500"
        )}
        {...props}
      />
    </label>
  );
}
