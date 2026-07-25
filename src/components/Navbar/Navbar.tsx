import { useTheme } from '../../context/ThemeContext'
import { IoFootball } from 'react-icons/io5'
import { FaMoon, FaSun } from 'react-icons/fa'
import './Navbar.css'
export default function Navbar(){
const { theme, toggleTheme } = useTheme()
    return (
    <header className='navbar'>
        <IoFootball/>
         <label className="theme-toggle">    <input
              type="checkbox"      checked={theme === "dark"}
              onChange={toggleTheme}
          />
          <FaSun className="theme-toggle-icon theme-toggle-icon--sun" />
          <FaMoon className="theme-toggle-icon theme-toggle-icon--moon" />

    <span className="theme-toggle-track" />
  </label>
    </header>)
}