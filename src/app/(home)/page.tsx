import Articles from "./components/Articles";
import Events from "./components/Events";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <main>
      <Solutions />
      <Events />
      <Articles />
    </main>
  );
}
