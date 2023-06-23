import React, {useState} from 'react';
import './App.css';

function App() {
    const MATCHES: 25 = 25;
    const [AIMatches, setAIMatches] = useState<number>(0);
    const [playerMatches, setPlayerMatches] = useState<number>(0);
    return (
        <div className="App">
            <h1>{MATCHES}</h1>
            <div className="flex-container">
                <div className="score-box">
                    <h2>Your matches:</h2>
                    <h1>{playerMatches}</h1>
                </div>
                <div className="score-box">
                    <h2>Bot matches:</h2>
                    <h1>{AIMatches}</h1>
                </div>
            </div>
            <div>
                <h1>Add Matches:</h1>
                <button onClick={()=>{setPlayerMatches(playerMatches+1)}}>1</button>
                <button onClick={()=>{setPlayerMatches(playerMatches+2)}}>2</button>
                <button onClick={()=>{setPlayerMatches(playerMatches+3)}}>3</button>
            </div>
        </div>
    );
}

export default App;
