import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './OriginSection.scss'

const OriginSection = () => {
  const nftRef = useRef<any>()
  const descriptionRef = useRef<any>()

  const handleStartAnimation = () => {
    if (descriptionRef.current.style.opacity !== '0') return
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, marginTop: 100 },
      { opacity: 1, marginTop: 0, duration: 1 }
    )
  }

  useEffect(() => {
    gsap.set(descriptionRef.current, { opacity: 0 })
    // welcomeBackRef.current.addEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className='section-origin container' id='about'>
      <div className='origin-background' />
      <div className='origin-header'>
        <h3>NoNo</h3>
        <div className='line'></div>
      </div>
      <div className='image-wrapper'>
        <p ref={descriptionRef}>
          NoNo is an assistant robot from a game called SEER (赛尔号). In SEER,
          players captured and trained monsters to defeat bosses in order to
          gather resources and unlock missions.
          <br />
          <br /> It would not be possible without the help of NoNo. NoNo’s tasks
          includes check mission status, passively gather XP, heal, train,
          upgrade monsters, and keep the monsters and players happy.
        </p>
        <img
          src='/images/home/origin.gif'
          alt='origin-nft'
          ref={nftRef}
          onMouseOver={handleStartAnimation}
        />
      </div>
      <div className='line line-main'></div>
      <div className='origin-description'>
        <h3>NoNo Origins</h3>
        <p>
          NoNo is an assistant robot from a game called SEER (赛尔号). In SEER,
          players captured and trained monsters to defeat bosses in order to
          gather resources and unlock missions.
          <br />
          <br /> It would not be possible without the help of NoNo. NoNo’s tasks
          includes check mission status, passively gather XP, heal, train,
          upgrade monsters, and keep the monsters and players happy.
          <br />
          <br /> Back in 2008, when NoNo performed a task, its battery and
          happiness decreaseed. Therefore, it was important for players to
          charge and play with NoNo to maintain its functionality.
          <br />
          <br /> Today, with the power of Super Crystals and the Blockchain,
          NoNos can now advance fearlessly into Web 3.
        </p>
      </div>
    </section>
  )
}

export default OriginSection
