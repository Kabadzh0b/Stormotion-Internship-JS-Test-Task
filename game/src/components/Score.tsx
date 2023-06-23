import React from "react";
import {ScoreProps} from "../types/ScoreProps";


const Score = ({playerMatches, AIMatches}:ScoreProps)=>{
    return(
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
    )
}
export default Score;
