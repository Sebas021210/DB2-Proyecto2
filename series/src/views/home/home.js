import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Home-NavBar">
                <NavBar />
            </div>
            <div className="Home-Content">
                <h1>HOME</h1>
            </div>
        </div>
    );
}

export default Home;
