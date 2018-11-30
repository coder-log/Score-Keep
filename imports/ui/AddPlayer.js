import React from 'react';

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if(playerName) {
     e.target.playerName.value='';
      //insert players
      // Insert new document into players collection
      Players.insert({
        name: playerName,
        score: 0
    });
    console.log(Players.find().fetch());
    }
  };

export default class AddPlayer extends React.Component {
    render(){
        return(
            <div>
                <form onSubmit = {handleSubmit}>
                    <input type="text" name = "playerName" placeholder ="Player Name" />
                    <button>Add Player</button>
                </form>
            </div>
        );
    }

}