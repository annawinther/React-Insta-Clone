import React from 'react';
import Icons from './img/instaIcons.png';
import InstaLogo from './img/instaTextLogo.png';
import './SearchBar.css';

const SearchBar = ({props}) => {
    return (
        <div className="search-bar"> 
                <div className="logo">
                    <img 
                        src={InstaLogo}
                        alt="insta logo"
                    />
                </div>
                <div className="searchInput">
                    <input
                    type="text"
                    placeholder="Search"
                    />
                </div>
                <div className="icons">
                    <img
                        src={Icons} 
                        alt="instagram icons"
                    />
                </div>
        </div>
    )

}

export default SearchBar;