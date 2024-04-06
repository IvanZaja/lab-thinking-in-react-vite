
function SearchBar() {
  return (
    <form role="search" className="">
        <input className="form-control me-2 my-3" type="search" placeholder="Search" aria-label="Search"/>
        <div className="form-check d-flex gap-2 justify-content-center">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Only show products in stock
            </label>
        </div>
    </form>
  )
}

export default SearchBar;