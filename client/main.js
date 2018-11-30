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
      
    </div>
  );
  ReactDOM.render((jsx), document.getElementById('app'));

  });
});