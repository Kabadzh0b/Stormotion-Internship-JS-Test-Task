import React, {useEffect, useState} from 'react';
import './App.css';
import MatchesButtons from "./components/MatchesButtons";
import Score from "./components/Score";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header";
import ModeComponent from "./components/ModeComponent/ModeComponent";

function App() {
    const MATCHES: 25 = 25;
    const [AIMatches, setAIMatches] = useState<number>(0);
    const [playerMatches, setPlayerMatches] = useState<number>(0);
    const [availableMatches, setAvailableMatches] = useState<number>(MATCHES);
    const [infoModalActive, setInfoModalActive] = useState<boolean>(false);
    const [warningModalActive, setWarningModalActive] = useState<boolean>(false);
    const [playerGoFirst, setPlayerGoFirst] = useState<boolean>(true);

    const gameRestart = (): void => {
        if (playerGoFirst) {
            setAIMatches(0);
            setPlayerMatches(0);
            setAvailableMatches(MATCHES);
        } else {
            setAIMatches(3);
            setPlayerMatches(0);
            setAvailableMatches(MATCHES - 3);
        }
    }

    useEffect(gameRestart, [playerGoFirst]);

    return (
        <div className="App">

            <Header MATCHES={MATCHES} gameRestart={gameRestart} setInfoModalActive={setInfoModalActive}></Header>
            <h2>Available matches:{availableMatches}</h2>
            <Score playerMatches={playerMatches} AIMatches={AIMatches}></Score>
            <MatchesButtons availableMatches={availableMatches} setAvailableMatches={setAvailableMatches}
                            playerMatches={playerMatches}
                            setPlayerMatches={setPlayerMatches} AIMatches={AIMatches}
                            setAIMatches={setAIMatches}></MatchesButtons>
            <ModeComponent playerGoFirst={playerGoFirst} playerMatches={playerMatches}
                           setPlayerGoFirst={setPlayerGoFirst}
                           setWarningModalActive={setWarningModalActive}></ModeComponent>
            <Modal infoActive={infoModalActive} setInfoActive={setInfoModalActive} warningActive={warningModalActive}
                   setWarningActive={setWarningModalActive} playerGoFirst={playerGoFirst}
                   setPlayerGoFirst={setPlayerGoFirst}></Modal>
        </div>
    );
}

export default App;
