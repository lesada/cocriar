import Articles from "./components/Articles";
import Events from "./components/Events";
import HeroBanner from "./components/HeroBanner";
import ScheduleCard from "./components/ScheduleCard";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<Solutions />
			<Events />
			<ScheduleCard />
			<Articles />
			<Testimonials />
		</main>
	);
}
