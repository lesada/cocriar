import Articles from "./components/Articles";
import Events from "./components/Events";
import HeroBanner from "./components/HeroBanner";
import InfoBanner from "./components/InfoBanner";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<Solutions />
			<InfoBanner />
			<Events />
			<Articles />
			<Testimonials />
		</main>
	);
}
