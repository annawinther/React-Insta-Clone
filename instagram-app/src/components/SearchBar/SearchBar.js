import React from 'react';
import Icons from './img/instaIcons.png';
import InstaLogo from './img/instaTextLogo.png';
import styled from 'styled-components';
// import './SearchBar.css';

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content:space-between;

    .icons {
        margin:10px;
    }
`;

const Search = styled.div`
    margin-top: 20px;
    
    input{
        border: 1px solid black;
        padding: 5px;
    }
`;



const SearchBar = ({props}) => {
    return (
        <Header> 
                <div>
                    <img 
                        src={InstaLogo}
                        alt="insta logo"
                    />
                </div>
                <Search>
                    <input
                    type="text"
                    placeholder="Search"
                    />
                </Search>
                <div className="icons">
                    <img
                        src={Icons} 
                        alt="instagram icons"
                    />
                </div>
        </Header>
    )

}

export default SearchBar;