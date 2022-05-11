import { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';

const GameList = () => {
    // States de données
    const [games, setGames] = useState([]);
    // State de mon UI
    const [isFiltered, setIsFiltered] = useState(false);
    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleFilter = () => {
        setIsFiltered(!isFiltered)
    }

    useEffect(() => {
        const url = "https://apis.wilders.dev/wild-games/games/"
        axios
        .get(url)
        .then(res => res.data)
        .then(data => setGames(data))
        // Optionnel pour faire écho au cours sur l'asynchrone et la gestion plus
        // poussée des fetch
        .catch(err => { setIsError(!isError); setError({error})})
        .finally(() => setLoading(!loading))
    }, [])

    return (
        <div>
            <button onClick={handleFilter}>
                {isFiltered ? 'All games' : 'Best Games'}
            </button>
            <div>
                {games && !isFiltered 
                ?
                games
                .map(game =>
                    <div key={game.id}>
                        <Game game={game} />
                    </div>)
                :
                games
                .filter(game => game.rating > 4.5)  
                .map(game =>
                    <div key={game.id}>
                        <Game game={game} />
                    </div>)  
                }
            </div>
        </div>
    )
}

export default GameList