import { Carousel } from '3d-react-carousal'
import MButton from 'components/MButton'
import './HoldingSection.scss'

let slides = [
  <img src='/images/home/holding/holding-1.gif' alt='holding-1' />,
  <img src='/images/home/holding/holding-2.gif' alt='holding-2' />,
  <img src='/images/home/holding/holding-3.gif' alt='holding-3' />,
  <img src='/images/home/holding/holding-4.gif' alt='holding-4' />,
]

const HoldingSection = () => {
  return (
    <section className='section-holding container'>
      <div className='line'></div>
      <div className='holding-content'>
        <div className='holding-description'>
          <h3>Holding a NoNo</h3>
          <p>
            <ul>
              <li>Ability to Staking for $GALAXY</li>
              <br />
              <li>Permission to apply to YesYes DAO</li>
              <br />
              <li>Access to all information released from YesYes DAO</li>
              <br />
              <li>NoNo Brand Merchandise</li>
              <br />
              <li>Art Extensions - 3D NoNos, Animations</li>
              <br />
              <li>Attribute boosting in game</li>
              <br />
              <li>Airdrops: Capsule, Battery, Spaceship, $GALAXY</li>
              <br />
            </ul>
          </p>
          <MButton text='Read Whitepaper' />
        </div>
        <div className='line line-main'></div>
        <div className='image-wrapper'>
          <div className='images-desktop'>
            <img src='/images/home/holding/holding-1.gif' alt='holding-1' />
            <img src='/images/home/holding/holding-2.gif' alt='holding-2' />
            <img src='/images/home/holding/holding-3.gif' alt='holding-3' />
            <img src='/images/home/holding/holding-4.gif' alt='holding-4' />
          </div>
          <Carousel slides={slides} interval={5000} autoplay={true} />
        </div>
      </div>
      <div className='line'></div>
    </section>
  )
}

export default HoldingSection
