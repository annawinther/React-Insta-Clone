import React from 'react';
import pt from 'prop-types';


const SearchBar = ({props}) => {
    return (
        <div> 
            <div className="logo-section">
            <div>
                <img
                    src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwil-7ur2c3iAhWMHRQKHVFNBQEQjRx6BAgBEAU&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AInstagram_logo.svg&psig=AOvVaw03IT1ttU9-Je66M_mUb0lv&ust=1559664545095851"
                    width={25}
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