import React, { useEffect, useRef } from 'react'
import { TweenLite } from 'gsap'
import './TeamMember.scss'

interface Props {
  imgUrl: string
  name: string
  role: string
  description: string
}

const MTeamMember = (props: Props) => {
  const boxRef = useRef<any>()

  const handleMouseMove = (event: any) => {
    const boxRect = boxRef.current.getBoundingClientRect()

    const x = event.clientX - boxRect.left
    const y = event.clientY - boxRect.top

    const xPos = x / boxRect.width - 0.5,
      yPos = y / boxRect.height - 0.5

    TweenLite.to(boxRef.current, 1, {
      rotationY: 45 * xPos,
      rotationX: 45 * yPos,
      ease: Power1.easeOut,
      transformPerspective: 900,
      transformOrigin: 'center',
    })
  }

  const handleMouseLeave = () => {
    TweenLite.to(boxRef.current, 1, {
      rotationY: 0,
      rotationX: 0,
      ease: Power1.easeOut,
      transformPerspective: 900,
      transformOrigin: 'center',
    })
  }

  useEffect(() => {
    boxRef.current.addEventListener('mousemove', handleMouseMove)
    boxRef.current.addEventListener('mouseleave', handleMouseLeave)
  }, [])

  return (
    <div className='team-member-item'>
      <div className='img-container'>
        {/* <div className='line'></div>
        <div className='line line-first'></div>
        <div className='line line-last'></div> */}
        <div className='img-wrapper' ref={boxRef}>
          <img src={props.imgUrl} alt='team-member' />
        </div>
      </div>
      <h3>{props.name}</h3>
      <h4>{props.role}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default MTeamMember
