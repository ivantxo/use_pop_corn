import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NumResults from "./NumResults";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResults />
    </nav>
  );
}

export default NavBar;
