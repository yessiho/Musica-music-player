import "./Searchbar.css"
import search from "../../assets/search.svg"

const Searchbar = () => {
    return (
        <form action="">
            <img src={search} alt="" />
            <input type="text" placeholder="Search artists" className="search-bar" />
        </form>
    )
}

export default Searchbar