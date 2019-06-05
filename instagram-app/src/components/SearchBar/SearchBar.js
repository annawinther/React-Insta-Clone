import React from 'react';
import Icons from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/SearchBar/img/instaIcons.png';
import InstaLogo from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/SearchBar/img/instaTextLogo.png';
// import InstaTest from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/assets/ig_search_bar.png';
// import InstaLogo from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/assets/instagram-text-logo.png'
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