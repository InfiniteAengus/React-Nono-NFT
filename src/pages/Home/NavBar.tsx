// import { Link } from 'react-router-dom'

import './NavBar.scss'

interface Props {
  yPos: any;
}

const NavBar = (props: Props) => {
  return (
    <div
      className='nav-bar'
      id='nav-bar'
      style={{ transform: `translate(0, ${props.yPos * 2}px)` }}
    >
      <a href='/'>Top</a>
      <a href='/'>Origins</a>
      <a href='/'>Holder</a>
      <a href='/'>Roadmap</a>
      <a href='/'>Team</a>
      <a href='/'>QA</a>
      <a href='/'>Bottom</a>
    </div>
  )
}

export default NavBar
