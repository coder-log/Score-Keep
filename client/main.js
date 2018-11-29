import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';


const renderPlayers = (playersList) => {

  return playersList.map((player) => {
    return (
       <p key={player._id}> 
       {player.name} has {player.score} points
       <button onClick ={()=>{
          Players.update({_id: player._id}, {$inc: {score:1}})
       }}>+1</button>
       <button onClick ={()=>{
         Players.update({_id: player._id}, {$inc: {score: -1}})
       }}>-1</button>
       <button onClick ={()=>{
         Players.remove({_id:player._id});
         alert('deleted');

        }}>X</button>
       </p>
    );
  });
};

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



Meteor.startup( () => {
  Tracker.autorun( () => {
    const players = Players.find().fetch();
    let title='Score Keep';
    let jsx = (
    <div>
      <TitleBar />
      {/*Render players to the screen*/}
      {renderPlayers(players)}
      {/*Render AddPlayer below here*/}
      <AddPlayer />
      <form onSubmit = {handleSubmit}>
        <input type="text" name = "playerName" placeholder ="Player Name" />
        <button>Add Player</button>
      </form>
    </div>
  );
  ReactDOM.render((jsx), document.getElementById('app'));

  });
});