import { useTheme } from '../../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Link } from '@tanstack/react-router'
import './Navbar.css'
export default function Navbar(){
const { theme, toggleTheme } = useTheme()
    return (
    <header className='navbar'>
        <Link to="/"><span className='navbarTitle'>Onside</span></Link>
         <label className="theme-toggle">    <input
              type="checkbox"      checked={theme === "dark"}
              onChange={toggleTheme}
          />
          <FaSun className="theme-toggle-icon theme-toggle-icon--sun" height={10} />
          <FaMoon className="theme-toggle-icon theme-toggle-icon--moon"  height={1}/>

    <span className="theme-toggle-track" />
  </label>
    </header>)
}