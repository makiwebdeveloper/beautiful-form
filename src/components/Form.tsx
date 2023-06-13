import { twMerge } from "tailwind-merge";
import { formButtons } from "../utils";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form() {
  const [type, setType] = useState<"login" | "signup">("login");

  return (
    <article
      className={
        "w-[350px] md:w-[450px] backdrop-blur-lg rounded-xl border border-white/50 shadow-lg bg-black/10"
      }
    >
      <div className="w-full flex border-b border-white/50">
        {formButtons.map((btn) => (
          <button
            className={twMerge(
              "px-5 py-2 transition rounded-lg flex-1 p-4 text-lg rounded-b-none text-black/60 hover:text-black hover:bg-emerald-600/20",
              btn.type === type
                ? "bg-emerald-600/20 text-black"
                : "hover:bg-emerald-600/10"
            )}
            key={btn.type}
            onClick={() => setType(btn.type)}
          >
            {btn.title}
          </button>
        ))}
      </div>
      <form className="p-4 space-y-4">
        <Input label="Email" type="email" placeholder="example@gmail.com" />
        <Input
          label="Password"
          type="password"
          placeholder="example@gmail.com"
        />
        <Button>{formButtons.find((btn) => btn.type === type)?.title}</Button>
      </form>
    </article>
  );
}
