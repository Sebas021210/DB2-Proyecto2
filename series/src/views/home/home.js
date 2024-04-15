import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import CardPerson from '../../components/Card/CardPerson';
import CardGenre from '../../components/Card/CardGenre';
import CardPlatform from '../../components/Card/CardPlatform';
import './home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Home-NavBar">
                <NavBar />
            </div>
            <div className="Home-Content">
                <div className="Home-Cards">
                    <h3>Series favoritas</h3>
                    <div className="contentCards">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className="Home-Cards">
                    <h3>Actores favoritos</h3>
                    <div className="contentCards">
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                    </div>
                </div>
                <div className="Home-Cards">
                    <h3>Directores favoritos</h3>
                    <div className="contentCards">
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                        <CardPerson />
                    </div>
                </div>
                <div className="Home-Cards">
                    <h3>Géneros favoritos</h3>
                    <div className="contentCards">
                        <CardGenre />
                        <CardGenre />
                        <CardGenre />
                        <CardGenre />
                        <CardGenre />
                        <CardGenre />
                        <CardGenre />
                        <CardGenre />
                    </div>
                </div>
                <div className="Home-Cards">
                    <h3>Plataformas favoritas</h3>
                    <div className="contentCards">
                        <CardPlatform />
                        <CardPlatform />
                        <CardPlatform />
                        <CardPlatform />
                        <CardPlatform />
                        <CardPlatform />
                        <CardPlatform />
                        <CardPlatform />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
