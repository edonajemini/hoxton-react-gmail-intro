import LeftMenu from "./LeftMenuHeader"
import SearchBar from "./SearchBarHeader"
import Search from "./SearchBarHeader"

function Header() {
    return (
        <header className="header">

            <LeftMenu />

            <SearchBar />

        </header>
    )
}

export default Header