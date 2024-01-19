import { Link } from "react-router-dom"



const NavBar = () => {


  return (
    <nav  className="nav-link">
      <ul>
        <li>
          <Link to='/'> Main </Link>
        </li>
        <li>
          <Link to='/list'> Entries </Link>
        </li>
        <li>
          <Link to='/new'> New Entry</Link>
        </li><li>
          <Link to='/games'> Mini Games</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar