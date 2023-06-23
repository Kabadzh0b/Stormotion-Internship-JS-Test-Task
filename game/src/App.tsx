import React, {useState} from 'react';
import './App.css';
import MatchesButtons from "./components/MatchesButtons";
import Score from "./components/Score";

function App() {

    const MATCHES: 25 = 25;
    const [AIMatches, setAIMatches] = useState<number>(0);
    const [playerMatches, setPlayerMatches] = useState<number>(0);
    const [availableMatches, setAvailableMatches] = useState<number>(MATCHES);
    return (
        <div className="App">
            <div className="flex-container content-space-between width100">
                <button className="small-button restart" onClick={()=>{
                    setAIMatches(0);
                    setPlayerMatches(0);
                    setAvailableMatches(MATCHES);
                }}>Restart</button>
                <h1>Total matches:{MATCHES}</h1>
                <button className="small-button info">info</button>
            </div>

            <h2>Available matches:{availableMatches}</h2>
            <Score playerMatches={playerMatches} AIMatches={AIMatches}></Score>
            <MatchesButtons availableMatches={availableMatches} setAvailableMatches={setAvailableMatches}
                            playerMatches={playerMatches}
                            setPlayerMatches={setPlayerMatches} AIMatches={AIMatches}
                            setAIMatches={setAIMatches}></MatchesButtons>
        </div>
    );
}

export default App;
