import React from 'react';
import {Players} from './../api/players'; 

// const handleSubmit = (e) => {
//     let playerName = e.target.playerName.value;
//     e.preventDefault();
//     if(playerName) {
//      e.target.playerName.value='';
//       //insert players
//       // Insert new document into players collection
//       Players.insert({
//         name: playerName,
//         score: 0
//     });
//     console.log(Players.find().fetch());
//     }
//   };

export default class AddPlayer extends React.Component {
    handleSubmit(e) {
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
    }
    render(){
        return(
            <div className="item">
                <form className="form" onSubmit = {this.handleSubmit.bind(this)}>
                    <input className="form__input" type="text" name = "playerName" placeholder ="Player Name" />
                    <button>Add Player</button>
                </form>
            </div>
        );
    }

}