import React from 'react'
import "../css/Navbar.css"
import { useSelector, useDispatch } from 'react-redux'
import { MdLightMode, MdNightlight } from 'react-icons/md'
import { FcTodoList } from 'react-icons/fc'
import { toggleTheme } from '../store/reducers/themeReducer'
import { useEffect } from 'react'

export const Navbar = () => {

  const darkMode = useSelector(state => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.querySelector(':root').classList.toggle('dark');
  }, [darkMode])
  
  return (
    <div className='navbar'>
        <div><FcTodoList /> React Redux Todo</div>
        <button className='round' onClick={() => {dispatch(toggleTheme()); }}>
          {darkMode ? <MdLightMode /> : <MdNightlight />}
        </button>
    </div>
  )
}
