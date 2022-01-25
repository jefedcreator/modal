import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {
  return <aside className={`slider show-sidebar`}>
    <div className="sidebar-header">
      <img src={logo} className='logo' alt="coding addict" />
      <button className="close-btn">
        <FaTimes/>
      </button>
    </div>
    <ul className="links">
      {links.map((link)=>{
        return <li key={link.id}>
          <a href={link.url}>
            {link.icon}
            {link.text}
            </a>
        </li>
      })}
    </ul>
    <ul className='social-icons'>
      {
        social.map((link) =>{
          return (
            <li key={link.id}>
                <a href={link.url}>{link.icon}</a>
            </li>
          )
        })
      }
    </ul>
  </aside>
}

export default Sidebar
