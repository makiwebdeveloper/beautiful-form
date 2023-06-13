import Form from "./components/Form";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className={theme === "dark" ? "dark" : ""}>
      <section className="w-screen h-screen bg-cover center bg-light dark:bg-dark">
        <Form />
        <div className="absolute top-5 right-5 md:top-10 md:right-10">
          <ToggleThemeBtn theme={theme} onClick={toggleTheme} />
        </div>
      </section>
    </main>
  );
}
