import logo from "../assets/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg";

function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="30" height="24" />
          </a>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
