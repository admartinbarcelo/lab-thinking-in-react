import { useState } from "react";

function SearchBar({searchProducts}) {
    const [search, setSearch] = useState("")

    const searchHandler = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value);
        searchProducts(e.target.value);
    }
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={search} onChange={searchHandler} />
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
