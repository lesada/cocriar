import Articles from './components/Articles'
import Events from './components/Events'
import InfoBanner from './components/InfoBanner'
import Solutions from './components/Solutions'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main>
      <Solutions />
      <InfoBanner />
      <Events />
      <Articles />
      <Testimonials />
    </main>
  )
}
