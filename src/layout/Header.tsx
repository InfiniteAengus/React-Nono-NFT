import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { enableBodyScroll } from 'body-scroll-lock'
import $ from 'jquery'

const navLinks = [
  {
    id: 'about',
    text: 'About Us',
  },
  {
    id: 'roadmap',
    text: 'Roadmap',
  },
  {
    id: 'team',
    text: 'Team',
  },
  {
    id: 'faq',
    text: 'Questions and Answers',
  },
]

const Header = () => {
  const navigate = useNavigate()
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  const handleNavClick = (id: string) => {
    navigate('/')
    
    if (!document.getElementById('welcome')?.classList.contains('hidden')) {
      document
        .getElementById('welcome-container')
        ?.classList.add('opacity-down')

      setTimeout(() => {
        document.getElementById('welcome')?.classList.add('hidden')
        document.getElementById('machine')?.classList.add('opacity-up')
        document.getElementById('about')?.classList.add('opacity-up')
        enableBodyScroll(document.body)
      }, 1500)

      setTimeout(() => {
        $('html, body').animate(
          {
            scrollTop: ($(`#${id}`).offset()?.top || 100) - 100,
          },
          800
        )
      }, 2300)
    } else {
      $('html, body').animate(
        {
          scrollTop: ($(`#${id}`).offset()?.top || 100) - 100,
        },
        800
      )
    }
  }

  return (
    <header data-scroll-section>
      <div className='container'>
        <div className='logo'>
          <a href='/'>
            <img src='./images/logo.svg' alt='logo' />
          </a>
        </div>

        <ul className='nav-links'>
          {navLinks.map((navLink) => (
            <li key={navLink.text} onClick={() => handleNavClick(navLink.id)}>
              {navLink.text}
            </li>
          ))}
        </ul>

        <div className='social-links'>
          <a href='/'>
            <img src='./images/social-icons/twitter.svg' alt='twitter' />
          </a>
          <a href='/'>
            <img src='./images/social-icons/instagram.svg' alt='twitter' />
          </a>
          <a href='/'>
            <img src='./images/social-icons/discord.svg' alt='twitter' />
          </a>
        </div>

        <nav
          className={`mobile-menu-wrap ${menuOpened && 'opened'}`}
          onClick={toggleMenu}
        >
          <span className='cls'></span>
          <span>
            <ul className='mobile-menu'>
              {navLinks.map((navLink) => (
                <li
                  key={navLink.text}
                  onClick={() => handleNavClick(navLink.id)}
                >
                  {navLink.text}
                </li>
              ))}
            </ul>
          </span>
          <span className='cls'></span>
        </nav>
      </div>
    </header>
  )
}

export default Header
