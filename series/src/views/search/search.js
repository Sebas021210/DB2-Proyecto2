import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import CardPerson from '../../components/Card/CardPerson';
import CardGenre from '../../components/Card/CardGenre';
import CardPlatform from '../../components/Card/CardPlatform';
import SearchIcon from '@mui/icons-material/Search';
import './search.css';

function Search() {
    const [Series, setSeries] = useState([]);
    const [Actors, setActors] = useState([]);
    const [Directors, setDirectors] = useState([]);
    const [Genres, setGenres] = useState([]);
    const [Platforms, setPlatforms] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const seriesResponse = await fetch('http://localhost:5050/getSeries');
                const seriesData = await seriesResponse.json();
                setSeries(seriesData);

                const actorsResponse = await fetch('http://localhost:5050/getActors');
                const actorsData = await actorsResponse.json();
                setActors(actorsData);

                const directorsResponse = await fetch('http://localhost:5050/getDirectors');
                const directorsData = await directorsResponse.json();
                setDirectors(directorsData);

                const genresResponse = await fetch('http://localhost:5050/getGenres');
                const genresData = await genresResponse.json();
                setGenres(genresData);

                const platformsResponse = await fetch('http://localhost:5050/getPlatform');
                const platformsData = await platformsResponse.json();
                setPlatforms(platformsData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const limitedSeries = Series.slice(0, 50);
    const limitedActors = Actors.slice(0, 50);
    const limitedDirectors = Directors.slice(0, 50);

    const filteredSeries = limitedSeries.filter((serie) => {
        return serie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const filteredActors = limitedActors.filter((actor) => {
        return actor.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const filteredDirectors = limitedDirectors.filter((director) => {
        return director.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const filteredGenres = Genres.filter((genre) => {
        return genre.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const filteredPlatforms = Platforms.filter((platform) => {
        return platform.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="search">
            <div className="Search-NavBar">
                <NavBar />
            </div>
            <div className="Search-Content">
                <div className="Search">
                    <SearchIcon />
                    <input type="text" placeholder="Buscar..." className='form-control' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div className="Search-Cards">
                    <h3>Series</h3>
                    <div className="contentCards">
                        {filteredSeries.map((serie) => (
                            <Card
                                key={serie.id}
                                title={serie.title}
                                description={serie.descripcion}
                                rating={serie.rating}
                                ratingCount={serie.ratingCount}
                                year={serie.year}
                                duration={serie.Duracion}
                                Total_caps={serie.Total_caps}
                            />
                        ))}
                    </div>

                    <br />

                    <h3>Actores</h3>
                    <div className="contentCards">
                        {filteredActors.map((actor) => (
                            <CardPerson
                                key={actor.id}
                                name={actor.name}
                                nacionalidad={actor.nacionalidad}
                                edad={actor.edad}
                                premiado={actor.premiado}
                            />
                        ))}
                    </div>

                    <br />

                    <h3>Directores</h3>
                    <div className="contentCards">
                        {filteredDirectors.map((director) => (
                            <CardPerson
                                key={director.id}
                                name={director.name}
                                nacionalidad={director.nacionalidad}
                                edad={director.edad}
                                premiado={director.premiado}
                            />
                        ))}
                    </div>

                    <br />

                    <h3>Géneros</h3>
                    <div className="contentCards">
                        {filteredGenres.map((genre) => (
                            <CardGenre
                                key={genre.id}
                                name={genre.name}
                                des={genre.descripcion}
                                numSeries={genre.numSeries}
                            />
                        ))}
                    </div>

                    <br />
                    
                    <h3>Plataformas</h3>
                    <div className="contentCards">
                        {filteredPlatforms.map((platform) => (
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

export default Search;
