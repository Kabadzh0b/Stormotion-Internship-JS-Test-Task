export interface MatchesButtonsProps{
    availableMatches:number,
    setAvailableMatches:(value:number)=>void,
    playerMatches:number,
    setPlayerMatches:(value:number)=>void,
    AIMatches:number,
    setAIMatches:(value:number)=>void,
}