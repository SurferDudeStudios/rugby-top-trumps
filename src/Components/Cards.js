import players from '../JSON/rugby-players.json';

const Cards = () => {
    return (
        <CardContent players={players.Players}></CardContent>
    )
};

export default Cards;