import '../styles/Header.css';
import { IoMdBook } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";

function Header(){
    return(
        <header className='header'>
        <div className='nav-logo'>
            <IoMdBook className='logo-icon'/>
            <h2>Digital Library</h2>
        </div>
        <div className='nav-items'>
            <form className='search-bar'>
                <input type="search" placeholder='Search items' className='search-input' required />

                <button type='submit' className='search-button'>
                <BiSearchAlt />
                </button>
            </form>

        </div>
        </header>
    );
}

export default Header;