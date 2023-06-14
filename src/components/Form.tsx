import { twMerge } from "tailwind-merge";
import { formButtons } from "../utils";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { FormDataType, formSchema } from "../utils/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form() {
  const [type, setType] = useState<"login" | "signup">("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
  });

  const submitData = (data: FormDataType) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <article
      className={
        "w-[350px] md:w-[450px] backdrop-blur-lg rounded-xl border border-white/50 shadow-lg bg-black/10 dark:bg-transparent"
      }
    >
      <div className="w-full flex border-b border-white/50">
        {formButtons.map((btn) => (
          <button
            className={twMerge(
              "px-5 py-2 transition rounded-lg flex-1 p-4 text-lg rounded-b-none hover:bg-emerald-600/20",
              btn.type === type
                ? "bg-emerald-600/20 text-black dark:bg-white/10 dark:text-white"
                : "hover:bg-emerald-600/10 text-black/60  hover:text-black dark:hover:bg-white/5 dark:text-white/60 dark:hover:text-white"
            )}
            key={btn.type}
            onClick={() => setType(btn.type)}
          >
            {btn.title}
          </button>
        ))}
      </div>
      <form
        className="p-4 md:p-8 space-y-4 md:space-y-6"
        onSubmit={handleSubmit(submitData)}
      >
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          error={errors.email}
          register={register}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="example@gmail.com"
          error={errors.password}
          register={register}
        />
        <Button type="submit">
          {formButtons.find((btn) => btn.type === type)?.title}
        </Button>
      </form>
    </article>
  );
}
