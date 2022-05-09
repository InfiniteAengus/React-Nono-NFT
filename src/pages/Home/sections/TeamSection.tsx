import MTeamMember from 'components/MTeamMember'

import './TeamSection.scss'

const teamList = [
  {
    imgUrl: './images/team/BLUE BLACK B.jpg',
    name: 'Geneva Diaz',
    role: 'Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit. Pellente gravida tristique massa a maximus. Suspendisse tempus interdum diam ac egestas. Nam venenatis.  Fusce at aliquet nisi.',
  },
  {
    imgUrl: './images/team/BLUE BLACK B.jpg',
    name: 'Geneva Diaz',
    role: 'Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit. Pellente gravida tristique massa a maximus. Suspendisse tempus interdum diam ac egestas. Nam venenatis.  Fusce at aliquet nisi.',
  },
  {
    imgUrl: './images/team/BLUE BLACK B.jpg',
    name: 'Geneva Diaz',
    role: 'Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit. Pellente gravida tristique massa a maximus. Suspendisse tempus interdum diam ac egestas. Nam venenatis.  Fusce at aliquet nisi.',
  },
  {
    imgUrl: './images/team/BLUE BLACK B.jpg',
    name: 'Geneva Diaz',
    role: 'Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit. Pellente gravida tristique massa a maximus. Suspendisse tempus interdum diam ac egestas. Nam venenatis.  Fusce at aliquet nisi.',
  },
  {
    imgUrl: './images/team/BLUE BLACK B.jpg',
    name: 'Geneva Diaz',
    role: 'Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit. Pellente gravida tristique massa a maximus. Suspendisse tempus interdum diam ac egestas. Nam venenatis.  Fusce at aliquet nisi.',
  },
  {
    imgUrl: './images/team/BLUE BLACK B.jpg',
    name: 'James',
    role: 'Frontend Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit. Pellente gravida tristique massa a maximus. Suspendisse tempus interdum diam ac egestas. Nam venenatis.  Fusce at aliquet nisi.',
  },
]

const TeamSection = () => {
  return (
    <section className='section-team container' id='team'>
      <div className='line'></div>
      <h2>Our Team</h2>
      <div className='team-list'>
        {teamList.map((team, index) => (
          <MTeamMember {...team} key={`team_member_${index}`} />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
