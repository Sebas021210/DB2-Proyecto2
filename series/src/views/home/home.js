import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
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
                    <h3>Directores favoritos</h3>
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
                    <h3>Géneros favoritos</h3>
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
                    <h3>Plataformas favoritas</h3>
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
            </div>
        </div>
    );
}

export default Home;
