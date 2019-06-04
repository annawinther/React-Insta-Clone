import React from 'react';
import pt from 'prop-types';
import InstaTextLogo from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/assets/instagram-logo.png';
// import InstaTest from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/assets/ig_search_bar.png';
import InstaLogo from '/Users/Anna/Lambda School/Sprint 7 - Intermediate React/Day 1 - React Tooling/React-Insta-Clone/assets/instagram-text-logo.png'

const SearchBar = ({props}) => {
    return (
        <div> 
            <div className="logo-section">
            <div>
                <img
                    src={InstaLogo} 
                    width={50}
                    alt="insta"
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