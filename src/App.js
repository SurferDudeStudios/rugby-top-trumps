import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DefaultOpening from "./Components/DefaultOpening";
import LawsOfGame from "./Components/LawsOfGame";
import PlayGame from "./Components/PlayGame";
import ViewCards from "./Components/ViewCards";
import "bootstrap/dist/css/bootstrap.min.css";

const playerData = "http://localhost:3000/JSON/rugby-players.json";
const supportData = "http://localhost:3000/JSON/rugby-urls.json";

//const playerData =
//  "https://www.surferdudestudios.co.uk/json/rugby-players.json";
//const supportData = "https://www.surferdudestudios.co.uk/json/rugby-urls.json";

export default function App() {
  const [gameState, setGameState] = useState("DefaultOpening");
  const [players, setPlayers] = useState([]);
  const [supportingData, setSupportingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchPlayers() {
      try {
        setIsLoading(true);
        const res = await fetch(playerData);

        if (!res.ok)
          throw new Error(
            "Something went wrong, please check your internet connection."
          );

        const data = await res.json();
        if (data.Response === "false")
          throw new Error("Players data not found");

        //console.log(data);

        setPlayers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPlayers();
  }, []);

  useEffect(function () {
    async function fetchSupportData() {
      try {
        setIsLoading(true);
        const res = await fetch(supportData);

        if (!res.ok)
          throw new Error(
            "Something went wrong, please check your internet connection."
          );

        const data = await res.json();
        if (data.Response === "false")
          throw new Error("Players data not found");

        setSupportingData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSupportData();
  }, []);

  function handleNavChange(nav) {
    setGameState(nav);
  }

  return (
    <div className="App">
      <Header onNavChange={handleNavChange} />
      <main>
        <div className="container clearfix">
          {isLoading && <Loader />}
          {!isLoading && !error && gameState === "DefaultOpening" && (
            <DefaultOpening onNavChange={handleNavChange} />
          )}
          {error && <ErrorMessage message={error} />}
          {gameState === "playGame" && <PlayGame players={players} />}
          {gameState === "lawsOfGame" && <LawsOfGame />}
          {gameState === "viewAll" && (
            <ViewCards players={players} supportingData={supportingData} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Loader() {
  return <p>Loading...</p>;
}

function ErrorMessage({ message }) {
  return <p>{message}</p>;
}
