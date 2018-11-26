import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

Tracker.autorun( function() {
console.log('Players List', Players.find().fetch());
});

const players = [
  {
    _id:1,
    name: 'Lauren',
    score: 99
  },
  {
    _id:2,
    name: 'Mike',
    score: -1
  },
  {
    _id:3,
    name: 'Megan',
    score: -12
  }
];

const renderPlayers = function (playersList) {

  return playersList.map(function (player){
    return <p key={player._id}> {player.name} has {player.score} points </p>;
  });
};

Meteor.startup(function (){

  //Call tracker.autorun
  // Create a variable called players -> set equal to fetch query
  // Render players variable to the screen
  
  //title -> Account Settings
  let name= 'Coderlog';
  let title='Score Keep';
  let jsx = (
  <div>
    {/* Render h1 tag with title var as text */}
    <h1> {title} </h1>
    <p>Hello {name}!</p><p>This is a second p.</p>
    {renderPlayers(players)}
  </div>
  );
  ReactDOM.render((jsx), document.getElementById('app'));
});