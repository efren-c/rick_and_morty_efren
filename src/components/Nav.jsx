import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {

  const handleLogOut = () => {
    setAccess(false)
  }

  return (
    <nav>
      {/* <Link to={"/"}>Log Out</Link> */}
      <button onClick={handleLogOut}>Log Out</button>
      <SearchBar onSearch={onSearch} />

      <div>
        <Link to='/home'> Home </Link>
        <Link to='/about'> About </Link>
        <Link to='/favorites'> Favorites </Link>
      </div>
    </nav>
  );
};

export default Nav;