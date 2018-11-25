import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

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

  return players.map(function (players){
    return <p key={players._id}> {players.name} has {players.score} points </p>;
  });
};

Meteor.startup(function (){
  //title -> Account Settings
  let name= 'Coderlog';
  let title='Score Keep';
  let jsx = (
  <div>
    {/* Render h1 tag with title var as text */}
    <h1> {title} </h1>
    <p>Hello {name}!</p><p>This is a second p.</p>
    {renderPlayers()}
  </div>
  );
  ReactDOM.render((jsx), document.getElementById('app'));
});