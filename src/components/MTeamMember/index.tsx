import React from 'react'
import './TeamMember.scss'

interface Props {
  imgUrl: string
  name: string
  role: string
}

const MTeamMember = (props: Props) => {
  return (
    <div className='team-member-item'>
      <div className='img-wrapper'>
        <img src={props.imgUrl} alt='team-member' />
      </div>
      <h3>{props.name}</h3>
      <h4>{props.role}</h4>
    </div>
  )
}

export default MTeamMember
