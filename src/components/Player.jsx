import { useState } from "react";
export default function Player({initialName, symbol, isActive, onNameChange}){
    const [playerName , setPlayerName] = useState(initialName);
    const [edit, setEdit] = useState(false);

    function handleEdit(){
        setEdit((edit) => !edit);
        if(edit){
            onNameChange(symbol,playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editPlayerName = <span className="player">{playerName}</span>
    if (edit){
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{edit? "Save" : "Edit"}</button>
        </li>
    );
}