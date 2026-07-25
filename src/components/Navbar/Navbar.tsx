import { useTheme } from '../../context/ThemeContext'
export default function Navbar(){
const { theme, toggleTheme } = useTheme()
    return (
    <header> 
        <img src="logo.png"/>
         <label className="theme-toggle">    <input
      type="checkbox"      checked={theme === "dark"}
      onChange={toggleTheme}
    />
    <span className="theme-toggle-track" />
  </label>
    </header>)
}