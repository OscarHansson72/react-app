import logo from "../assets/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg";

interface Props {
  logoSrc: string;
  logoAlt?: string;
  onSearch: (query: string) => void;
  children: React.ReactNode;
}

function Navbar({ logoSrc, logoAlt = "Logo", onSearch, children }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.currentTarget as HTMLFormElement)
      .search as HTMLInputElement;
    onSearch?.(input.value);
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="30" height="24" />
          </a>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {children && <div className="ms-3">{children}</div>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
