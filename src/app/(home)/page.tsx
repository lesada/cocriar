import Articles from "./components/Articles";
import Events from "./components/Events";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";

export default function Home() {
	return (
		<main>
			<Solutions />
			<Events />
			<Articles />
			<Testimonials />
		</main>
	);
}
