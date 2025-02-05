import { useState } from "react";

export default function Player({ initialName, symbol, ...props }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdite(){
    setIsEditing(editing => !editing)
  }
  function handleChange(event){
    setName(event.target.value)
  }
  return (
    <li {...props}>
      <span className="player">
        {isEditing ?
          <input type="text" value={name} onChange={handleChange} required /> :
          <span className="player-name">{name}</span>
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      
        <button onClick={handleEdite} >{isEditing ?"Save":"Edit"}</button>
    </li>
  );
}
