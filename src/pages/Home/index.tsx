import handleViewport from 'react-in-viewport'

import FAQSection from './sections/FAQSection'
import HoldingSection from './sections/HoldingSection'
import OriginSection from './sections/OriginSection'
import RoadmapSection from './sections/RoadmapSection'
import TeamSection from './sections/TeamSection'
import WelcomeSection from './sections/WelcomeSection'

import FadeInSection from 'components/MFadeIn'

const RoadmapViewPort = handleViewport(RoadmapSection)

const HomePage = () => {
  return (
    <main data-scroll-section>
      <WelcomeSection />
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
