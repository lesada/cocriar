import Articles from "./components/Articles";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Solutions />
      <Articles />
      <Testimonials />
    </main>
  );
}
