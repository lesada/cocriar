import Articles from "./components/Articles";
import Events from "./components/Events";
import HeroBanner from "./components/HeroBanner";
import InfoBanner from "./components/InfoBanner";
import ScheduleCard from "./components/ScheduleCard";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<Solutions />
			<InfoBanner />
			<Testimonials />
			<Events />
			<ScheduleCard />
			<Articles />
		</main>
	);
}
