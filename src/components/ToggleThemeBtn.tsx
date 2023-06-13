import { BsMoonStars, BsSun } from "react-icons/bs";

interface Props {
  theme: "light" | "dark";
  onClick: () => void;
}

export default function ToggleThemeBtn({ theme, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-white bg-black/80 p-3 rounded-full transition hover:bg-black/60"
    >
      {theme === "dark" ? (
        <BsMoonStars className="w-4 h-4" />
      ) : (
        <BsSun className="w-4 h-4" />
      )}
    </button>
  );
}
