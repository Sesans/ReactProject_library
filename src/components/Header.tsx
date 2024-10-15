import '../styles/Header.css';
import { useState } from 'react';
import { IoMdBook } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { CreateModal } from './Create-modal';

//This functions implements all the functionalities about the Header section from the e-commerce;
function Header(){

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev);
    }

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

            {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
            <button onClick={handleOpenModal}>add</button>
            
        </div>
        </header>
    );
}

export default Header;