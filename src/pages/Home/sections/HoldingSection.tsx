import { Carousel } from '3d-react-carousal'
import MButton from 'components/MButton'
import './HoldingSection.scss'

let slides = [
  <img src='/images/home/holding/fur1.gif' alt='holding-1' />,
  <img src='/images/home/holding/fur2.gif' alt='holding-2' />,
  <img src='/images/home/holding/green.gif' alt='holding-3' />,
  <img src='/images/home/holding/jail.gif' alt='holding-4' />,
]

const HoldingSection = () => {
  return (
    <section className='section-holding container'>
      <div className='line'></div>
      <div className='holding-content'>
        <div className='holding-description'>
          <h3>Owning a NoNo</h3>
          <p>
            <ul>
              <li>Ability to Staking for $GALAXY</li>
              <li>
                Receive all future airdrops:
                <p> - $GALAXY</p>
                <p> - Spaceships</p>
                <p> - Batteries</p>
                <p> - Monster Pills</p>
              </li>
              <li>Permission to apply to YesYes DAO</li>
              <li>Access to all information released from YesYes DAO</li>
              <li>NoNo Brand Merchandise</li>
              <li>Art Extensions - 3D NoNos, Animations</li>
              <li>Attribute boosting in game</li>
            </ul>
          </p>
          <MButton text='Read Whitepaper' />
        </div>
        <div className='image-wrapper'>
          <div className='image-wrapper-background'></div>
          <div className='images-desktop'>
            <img src='/images/home/holding/fur1.gif' alt='holding-1' />
            <img src='/images/home/holding/fur2.gif' alt='holding-2' />
            <img src='/images/home/holding/green.gif' alt='holding-3' />
            <img src='/images/home/holding/jail.gif' alt='holding-4' />
          </div>
          <Carousel slides={slides} interval={5000} autoplay={true} />
        </div>
      </div>
      <div className='line'></div>
    </section>
  )
}

export default HoldingSection
