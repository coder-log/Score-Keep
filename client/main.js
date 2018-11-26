import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';


const renderPlayers = function (playersList) {

  return playersList.map(function (player){
    return <p key={player._id}> {player.name} has {player.score} points </p>;
  });
};

Meteor.startup(function (){
  // STEP 1. INCLUDE
  //Call tracker.autorun
  Tracker.autorun( function () {

    //title -> Account Settings
    // Create a variable called players -> set equal to fetch query
  const players = Players.find().fetch();
  let title='Score Keep';
  let jsx = (
  <div>
    {/* Render h1 tag with title var as text */}
    <h1> {title} </h1>
    <p>Hello!</p>
    {/*Render players to the screen*/}
    {renderPlayers(players)}
  </div>
  );
  ReactDOM.render((jsx), document.getElementById('app'));

  });

  // Insert new document into players collection

  Players.insert({
    name: 'John',
    score: 13
  });

  console.log(Players.find().fetch());
  
});