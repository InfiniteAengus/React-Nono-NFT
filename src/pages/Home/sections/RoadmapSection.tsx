import { useEffect } from 'react'
import { gsap } from 'gsap'

import './RoadmapSection.scss'

const roadmap = [
  {
    title: 'Giveback Raffle',
    content:
      'Launching of our twitter and discord. Lorem ipsum dolor sit amet, consectetur dipiscing elit.Lorem ipsum dolor sit amet, consectetur dipiscing elit. Fusce at aliquet nisi. Praesent ultricies dapibustristique. Aliquam eget justo quis diam vehicula luctus id et sem. Nulla dignissim',
  },
  {
    title: 'Application for YesYes DAO',
    content:
      'During those days, you will have the opportunity to receive $86,000 in gifts to congratulate you for taking action.In other words, there will be $8,600 in gifts each day, tracked and dispatched depending on the events.',
  },
  {
    title: 'Fully 3D',
    content:
      'Get into the system and gain access to private and secret investment opportunities :Real estate off market deals, access early rounds investment in startups, angel investing, Launchpad ICOs, IDOs, etc ...',
  },
  {
    title: 'Staking for $GALAXY Activated',
    content:
      'Imagine a world where the flapping of a butterflys wing causes the biggest hurricanes.This is the power of the BRAIN 3.0Our first global event will take place in February in Miami. Many others will take place virtually through masterminds on Zoom or directly in the Metaverse ! ',
  },
  {
    title: 'YesYes DAO Season 1 Begins',
    content:
      'In the hope of seeing the accomplishment of other children to whom NOTHING encourages their success :$50,000 as well as 10% of our royalties will be donated to the association 27-12 & Motema Foundation in Ivory Coast to help children with childhood illnesses and perhaps save the world of tomorrow once again.',
  },
  {
    title: 'YesYes DAO Season 4 Ends',
    content:
      'Millions of people appropriated our image to the point of becoming a brand : Cyborg 86.‍Today you have the opportunity to be the first ambassadors.Join those who change the world, who fulfill their destiny',
  },
  {
    title: 'Launch Game: NoNo',
    content:
      'This information is confidential for now. All we can share with you is that our team is currently developing our own P2E game.What does our own game mean ? Our Own Cryptocurrency.',
  },
]
const RoadmapSection = (props: any) => {
  const { inViewport, forwardedRef } = props

  useEffect(() => {}, [])
  useEffect(() => {
    if (inViewport) {
      gsap.from(forwardedRef.current, { scale: 0.5, opacity: 0, duration: 3 })
      gsap.to(forwardedRef.current, { scale: 1, opacity: 1, duration: 3 })
    }
  }, [inViewport, forwardedRef])

  return (
    <section className='section-roadmap container' id='roadmap'>
      <h2>Roadmap</h2>
      {/* <img src='/images/home/roadmap.gif' alt='roadmap' /> */}

      <div className='roadmap-wrapper'>
        <div className='timeline-progress'></div>
        {roadmap.map((item, ind) => (
          <div className='timeline-item' key={`roadmap_item_${ind}`}>
            <div className='roadmap-content'>
              {Math.ceil((100 / 7) * (ind + 1))} %
            </div>
            <div className='roadmap-line'>
              <div className='circle'></div>
            </div>
            <div className='roadmap-title'>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RoadmapSection
