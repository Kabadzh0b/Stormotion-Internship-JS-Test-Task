import React, {useState} from 'react';
import './App.css';

let availableMatches:number = 25;
function App() {
    const makeTurn = (num:number)=>{
        setPlayerMatches(playerMatches+num);
        availableMatches-=num;
        if(availableMatches>3){
            if(num === 1){
                setAIMatches(AIMatches + 3);
                availableMatches-=3;
            }
            else if((availableMatches+num)%2!==0){
                setAIMatches(AIMatches + 5-num);
                availableMatches-=5-num;
            }
            else{
                setAIMatches(AIMatches + 4-num);
                availableMatches-=4-num;
            }
        }
        else{
            if((playerMatches+num) % 2 === 0){
                if(availableMatches === 3){
                    setAIMatches(AIMatches+2);
                    availableMatches-=2;
                }
                else{
                    setAIMatches(AIMatches+1);
                    availableMatches-=1;
                }
            }
            else{
                setAIMatches(AIMatches+availableMatches);
                availableMatches = 0;
            }
        }
    }
    const MATCHES: 25 = 25;
    const [AIMatches, setAIMatches] = useState<number>(0);
    const [playerMatches, setPlayerMatches] = useState<number>(0);
    return (
        <div className="App">
            <h1>Total matches:{MATCHES}</h1>
            <h2>Available matches:{availableMatches}</h2>
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
                <button onClick={()=>{makeTurn(1)}}>1</button>
                <button onClick={()=>{makeTurn(2)}}>2</button>
                <button onClick={()=>{makeTurn(3)}}>3</button>
            </div>
        </div>
    );
}

export default App;
