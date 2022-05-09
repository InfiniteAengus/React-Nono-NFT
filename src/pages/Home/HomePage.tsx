import handleViewport from 'react-in-viewport'

import FAQSection from './sections/FAQSection'
import HoldingSection from './sections/HoldingSection'
import MachineSection from './sections/MachineSection'
import OriginSection from './sections/OriginSection'
import RoadmapSection from './sections/RoadmapSection'
import TeamSection from './sections/TeamSection'
// import VideoSection from './sections/VideoSection'
import WelcomeSection from './sections/WelcomeSection'

const RoadmapViewPort = handleViewport(RoadmapSection)
const WelcomeViewPort = handleViewport(WelcomeSection)

const HomePage = () => {
  return (
    <main data-scroll-section>
      <WelcomeViewPort />
      <MachineSection />
      <OriginSection />
      <HoldingSection />
      <RoadmapViewPort />
      <TeamSection />
      {/* <VideoSection /> */}
      <FAQSection />
    </main>
  )
}

export default HomePage
