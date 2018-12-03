import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {


}); 

let name = 'John';
let location ="Philadelphia";
let age = 35;


let stuff = {
    name,
    location,
    age
}
console.log(stuff);