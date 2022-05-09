import handleViewport from 'react-in-viewport'

import FAQSection from './sections/FAQSection'
import HoldingSection from './sections/HoldingSection'
import MachineSection from './sections/MachineSection'
import OriginSection from './sections/OriginSection'
import RoadmapSection from './sections/RoadmapSection'
import TeamSection from './sections/TeamSection'
// import VideoSection from './sections/VideoSection'
import WelcomeSection from './sections/WelcomeSection'

import FadeInSection from 'components/MFadeIn'

const RoadmapViewPort = handleViewport(RoadmapSection)

const HomePage = () => {
  return (
    <main data-scroll-section>
      <WelcomeSection />
      <FadeInSection>
        <MachineSection />
      </FadeInSection>
      <OriginSection />
      <HoldingSection />
      <FadeInSection>
        <RoadmapViewPort />
      </FadeInSection>
      <FadeInSection>
        <TeamSection />
      </FadeInSection>
      {/* <VideoSection /> */}
      <FAQSection />
    </main>
  )
}

export default HomePage
