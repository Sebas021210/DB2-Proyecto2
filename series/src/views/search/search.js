import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import CardPerson from '../../components/Card/CardPerson';
import CardGenre from '../../components/Card/CardGenre';
import CardPlatform from '../../components/Card/CardPlatform';
import SearchIcon from '@mui/icons-material/Search';
import './search.css';

function Search() {
    return (
        <div className="search">
            <div className="Search-NavBar">
                <NavBar />
            </div>
            <div className="Search-Content">
                <div className="Search">
                    <SearchIcon />
                    <input type="text" placeholder="Buscar..." className='form-control' />
                </div>
                <div className="Search-Cards">
                    <div className="contentCards">
                        <Card />
                        <Card />
                        <CardPerson />
                        <CardPerson />
                        <CardGenre />
                        <CardGenre />
                        <CardPlatform />
                        <CardPlatform />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
