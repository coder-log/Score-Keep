import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function (){
  //title -> Account Settings
  let name= 'Coderlog';
  let title='Score Keep';
  let jsx = (
  <div>
    {/* Render h1 tag with title var as text */}
    <h1> {title} </h1>
    <p>Hello {name}!</p><p>This is a second p.</p>
  </div>
  );
  ReactDOM.render((jsx), document.getElementById('app'));
});