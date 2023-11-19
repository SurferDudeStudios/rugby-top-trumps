import players from '../JSON/rugby-players.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const ViewCards = () => {
    return (
        <CardContent players={players.Players}></CardContent>
    )
};

const PlayerImage = ({img, name}) => {
    let imageLibrary = "/img/player-images/";
    let defaultImage = "player-default.jpg";
    let returnImage = imageLibrary.concat(img);
    let defaultReturnImage = imageLibrary.concat(defaultImage);
    return (
      <Card.Img
        variant="top"
        src={returnImage}
        alt={name}
        onError={(e) => {
          e.target.src = defaultReturnImage;
        }}
        />
    )
};

const PlayerAge = ({dob}) => {
  //Best practice date of birth should be ISO 8601 - ie. YYYY-MM-DD
  let today = new Date();
  let birthDate = new Date(dob);
  let returnAge = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    returnAge--;
  }
  //Check for missing data
  if (returnAge === "" || returnAge === null || isNaN(returnAge)) {
    returnAge = "No age available";
  };
  return (
    <Button variant="primary">Age: <span className='card-button-value'>{returnAge}</span></Button>
  )
};

const PlayerText = ({text}) => {
  let returnText = text.replace(/\s+/g, '-').toLowerCase();
  return (
    <Card.Text className={returnText}>{text} <a href="#" target="_blank"><FontAwesomeIcon icon={faCircleInfo} /></a></Card.Text>
  )
};

const CardContent = ({players}) => {
    return (
        <>
        {players.map((player) => (
          <Card key={player.name} className='card-player'>
          <Card.Header>
           <PlayerImage img={player.img} name={player.name} ></PlayerImage>
          </Card.Header>
          <Card.Body>
            <Card.Title>{player.name}</Card.Title>
            <PlayerText text={player.position}></PlayerText>
            <PlayerText text={player.club}></PlayerText>
            <PlayerText text={player.country}></PlayerText>
            <ButtonGroup aria-label="Player statistic buttons" className='mt-3'>
             <PlayerAge dob={player.dob}></PlayerAge>{' '}
             <Button variant="primary">Caps: <span className='card-button-value'>{player.caps}</span></Button>{' '}
             <Button variant="primary">Height: <span className='card-button-value'>{player.height}cm</span></Button>{' '}
             <Button variant="primary">Weight: <span className='card-button-value'>{player.weight}kg</span></Button>{' '}
             <Button variant="primary">Points: <span className='card-button-value'>{player.points}</span></Button>{' '}
             <Button variant="primary">Red cards: <span className='card-button-value'>{player.reds}</span></Button>{' '}
             <Button variant="primary">Yellow cards: <span className='card-button-value'>{player.yellows}</span></Button>{' '}
             <Button variant="primary">Percent: <span className='card-button-value'>{player.percent}%</span></Button>{' '}
            </ButtonGroup>
          </Card.Body>
          </Card>
        ))}
        </>
    )
};

export default ViewCards;