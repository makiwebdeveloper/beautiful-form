import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  label?: string;
  register?: any;
}

export default function Input({ error, label, register, ...props }: Props) {
  return (
    <label className="flex flex-col space-y-1">
      <div className="flex justify-between">
        <span
          className={twMerge(
            "text-black/60 dark:text-white/80",
            error && "text-red-500"
          )}
        >
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
          "outline-none transition px-4 py-2 bg-transparent placeholder:text-black/60 focus:bg-emerald-600/20 border border-white/20 focus:border-emerald-600 rounded-lg ",
          "dark:focus:bg-white/10 dark:text-white dark:placeholder:text-white/60 dark:focus:border-white/60 ",
          error &&
            "border-red-500 focus:border-red-500 focus:bg-red-500/10 dark:focus:border-red-500 dark:focus:bg-red-500/10"
        )}
        {...props}
        {...register(props.name)}
      />
    </label>
  );
}
