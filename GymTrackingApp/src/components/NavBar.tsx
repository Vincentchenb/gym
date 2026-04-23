import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/app', label: 'App' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <nav className="navbar">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar