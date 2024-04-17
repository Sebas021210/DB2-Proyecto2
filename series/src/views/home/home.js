import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import CardPerson from '../../components/Card/CardPerson';
import CardGenre from '../../components/Card/CardGenre';
import CardPlatform from '../../components/Card/CardPlatform';
import './home.css';

function Home() {
    const [favoriteSeries, setFavoriteSeries] = useState([]);
    const [favoriteActors, setFavoriteActors] = useState([]);
    const [favoriteDirectors, setFavoriteDirectors] = useState([]);
    const [favoriteGenres, setFavoriteGenres] = useState([]);
    const [favoritePlatforms, setFavoritePlatforms] = useState([]);

    useEffect(() => {
        const email = localStorage.getItem('email');
    
        const fetchData = async () => {
            try {
                const seriesResponse = await fetch('http://localhost:5050/getFavoriteSeries', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
    
                if (seriesResponse.ok) {
                    const dataSeries = await seriesResponse.json();
                    const uniqueSeries = dataSeries.filter((serie, index, self) =>
                        index === self.findIndex(s => (
                            s.title === serie.title
                        ))
                    );
                    console.log(uniqueSeries);
                    setFavoriteSeries(uniqueSeries);
                } else {
                    console.log("Error al obtener las series favoritas", seriesResponse.status);
                }
    
                const actorsResponse = await fetch('http://localhost:5050/getViewedActors', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
    
                if (actorsResponse.ok) {
                    const dataActores = await actorsResponse.json();
                    const uniqueActors = dataActores.filter((actor, index, self) =>
                        index === self.findIndex(a => (
                            a.name === actor.name
                        ))
                    );
                    console.log(uniqueActors);
                    setFavoriteActors(uniqueActors);
                } else {
                    console.log("Error al obtener los actores favoritos", actorsResponse.status);
                }

                const directorsResponse = await fetch('http://localhost:5050/getViewedDirectors', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });

                if (directorsResponse.ok) {
                    const dataDirectors = await directorsResponse.json();
                    const uniqueDirectors = dataDirectors.filter((director, index, self) =>
                        index === self.findIndex(d => (
                            d.name === director.name
                        ))
                    );
                    console.log(uniqueDirectors);
                    setFavoriteDirectors(uniqueDirectors);
                } else {
                    console.log("Error al obtener los directores favoritos", directorsResponse.status);
                }

                const genresResponse = await fetch('http://localhost:5050/getViewedGenres', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });

                if (genresResponse.ok) {
                    const dataGenres = await genresResponse.json();
                    const uniqueGenres = dataGenres.filter((genre, index, self) =>
                        index === self.findIndex(g => (
                            g.name === genre.name
                        ))
                    );
                    console.log(uniqueGenres);
                    setFavoriteGenres(uniqueGenres);
                } else {
                    console.log("Error al obtener los géneros favoritos", genresResponse.status);
                }

                const platformsResponse = await fetch('http://localhost:5050/getFavoritePlatforms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });

                if (platformsResponse.ok) {
                    const dataPlatforms = await platformsResponse.json();
                    const uniquePlatforms = dataPlatforms.filter((platform, index, self) =>
                        index === self.findIndex(p => (
                            p.name === platform.name
                        ))
                    );
                    console.log(uniquePlatforms);
                    setFavoritePlatforms(uniquePlatforms);
                } else {
                    console.log("Error al obtener las plataformas favoritas", platformsResponse.status);
                }
                
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchData();
    }, []);

    return (
        <div className="Home">
            <div className="Home-NavBar">
                <NavBar />
            </div>
            <div className="Home-Content">
                <div className="Home-Cards">
                    <h3>Series favoritas</h3>
                    <div className="contentCards">
                        {favoriteSeries.map(series => (
                            <Card
                                key={series.id}
                                title={series.title}
                                description={series.descripcion}
                                rating={series.rating}
                                ratingCount={series.ratingCount}
                                year={series.year}
                                duration={series.Duracion}
                                Total_caps={series.Total_caps}
                            />
                        ))}
                    </div>
                </div>
                <div className="Home-Cards">
                    <h3>Actores favoritos</h3>
                    <div className="contentCards">
                        {favoriteActors.map(actor => (
                            <CardPerson
                                key={actor.id}
                                name={actor.name}
                                nacionalidad={actor.nacionalidad}
                                edad={actor.edad}
                                premiado={actor.premiado}
                            />
                        ))}
                    </div>
                </div>
                <div className="Home-Cards">
                    <h3>Directores favoritos</h3>
                    <div className="contentCards">
                        {favoriteDirectors.map(director => (
                            <CardPerson
                                key={director.id}
                                name={director.name}
                                nacionalidad={director.nacionalidad}
                                edad={director.edad}
                                premiado={director.premiado}
                            />
                        ))}
                    </div>
                </div>
                <div className="Home-Cards">
                    <h3>Géneros favoritos</h3>
                    <div className="contentCards">
                        {favoriteGenres.map(genre => (
                            <CardGenre
                                key={genre.id}
                                name={genre.name}
                                des={genre.descripcion}
                                numSeries={genre.numSeries}
                            />
                        ))}
                    </div>
                </div>
                <div className="Home-Cards">
                    <h3>Plataformas favoritas</h3>
                    <div className="contentCards">
                        {favoritePlatforms.map(platform => (
                            <CardPlatform
                                key={platform.id}
                                name={platform.name}
                                tipo={platform.tipo}
                                precio={platform.precio}
                                lanzamiento={platform.lanzamiento}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
