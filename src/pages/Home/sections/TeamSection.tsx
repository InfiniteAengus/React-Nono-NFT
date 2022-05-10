import MTeamMember from 'components/MTeamMember'

import './TeamSection.scss'

const teamList = [
  {
    imgUrl: './images/team/frontend.png',
    name: 'James',
    role: 'NoNo Developer',
  },
  {
    imgUrl: './images/team/designer.png',
    name: 'Joey',
    role: 'NoNo Designer',
  },
  {
    imgUrl: './images/team/founder.png',
    name: 'Joshua Dang',
    role: 'NoNo Founder',
  },
  {
    imgUrl: './images/team/animator.png',
    name: 'Anna',
    role: 'NoNo Animator',
  },
  {
    imgUrl: './images/team/blockchain.png',
    name: 'Everest',
    role: 'NoNo Developer',
  },
]

const TeamSection = () => {
  return (
    <section className='section-team container' id='team'>
      <div className='line'></div>

      <h2>NoNo Team</h2>
      <div className='team-list'>
        <div className='team-background'></div>
        {teamList.map((team, index) => (
          <MTeamMember {...team} key={`team_member_${index}`} />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
