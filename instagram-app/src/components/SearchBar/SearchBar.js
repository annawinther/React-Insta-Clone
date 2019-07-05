import React from 'react';
import Icons from './img/instaIcons.png';
import InstaLogo from './img/instaTextLogo.png';
import styled from 'styled-components';
// import './SearchBar.css';

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    background: white;

    .icons {
        margin:10px;
    }
`;

const SearchStyle = styled.div`
    margin-top: 20px;
    
    input{
        border: 1px solid grey;
        border-radius: 2px 2px 2px 2px;
        padding: 5px;
        text-align: center;
        background-color: #efefef;
    }
`;



const SearchBar = ({props}) => {
    return (
        <HeaderStyle> 
                <div>
                    <img 
                        src={InstaLogo}
                        alt="insta logo"
                    />
                </div>
                <SearchStyle>
                    <input
                    type="text"
                    placeholder="Search"
                    />
                </SearchStyle>
                <div className="icons">
                    <img
                        src={Icons} 
                        alt="instagram icons"
                    />
                </div>
        </HeaderStyle>
    )

}

export default SearchBar;