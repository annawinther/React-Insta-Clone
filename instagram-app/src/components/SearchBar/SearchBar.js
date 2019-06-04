import React from 'react';
import InstaTextLogo from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/SearchBar/img/instaLogos.png';
import InstaLogo from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/instagram-app/src/components/SearchBar/img/instaTextLogo.png';
// import InstaTest from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/assets/ig_search_bar.png';
// import InstaLogo from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/assets/instagram-text-logo.png'

const SearchBar = ({props}) => {
    return (
        <div className="search-bar"> 
            <div className="logo-section">
                <div className="logo">
                    <img 
                        src={InstaLogo}
                        alt="insta logo"
                    />
                </div>
                <div className="text-logo">
                    <img
                        src={InstaTextLogo}
                        alt="insta text"
                    />
                </div>
            </div>
            <div className="search-section">
                <input
                type="text"
                placeholder="Search"
                />
            </div>
            <div className="user-activity-section">
            </div>
        </div>
    )

}

export default SearchBar;