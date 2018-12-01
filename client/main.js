import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';



Meteor.startup( () => {
  Tracker.autorun( () => {
    const players = Players.find().fetch();
    let title='Score Keep';
    let jsx = (
    <div>
      <TitleBar />
      {/*Render players to the screen*/}
      <PlayerList players={players}/>
      {/*Render AddPlayer below here*/}
      <AddPlayer />
      
    </div>
  );
  ReactDOM.render((jsx), document.getElementById('app'));

  });
});