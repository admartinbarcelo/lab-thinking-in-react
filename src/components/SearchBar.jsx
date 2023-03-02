import { useState } from "react";

function SearchBar({searchProducts}) {
    const [search, setSearch] = useState("")

    const searchHandler = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value);
        searchProducts(event.target.value);
    }
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input className="form-control " type="text" placeholder="Search products..."  value={search} onChange={searchHandler} />
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
