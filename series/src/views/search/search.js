import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './search.css';

function Search() {
    return (
        <div className="search">
            <div className="Search-NavBar">
                <NavBar />
            </div>
            <div className="Search-Content">
                <h1>SEARCH</h1>
            </div>
        </div>
    );
}

export default Search;
