import React from 'react'
import "../css/Navbar.css"
import { MdLightMode, MdNightlight} from 'react-icons/md'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div>React Redux Todo</div>
        <button className='color-mode-btn'>Click Me!</button>
    </div>
  )
}
