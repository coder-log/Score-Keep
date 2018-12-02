import React from 'react';
import {Players} from  './../api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component{
    render() {
        return (
        <div key={this.props.player._id} className="item">
            <p> 
            {this.props.player.name} has {this.props.player.score} points
            </p>
            <button onClick ={()=>{
                Players.update({_id: this.props.player._id}, {$inc: {score:1}})
            }}>+1</button>
            <button onClick ={()=>{
                Players.update({_id: this.props.player._id}, {$inc: {score: -1}})
            }}>-1</button>
            <button onClick ={()=>{
                Players.remove({_id:this.props.player._id});
                alert('deleted');
            }}>X</button>
        </div>
    
        );
    }
};

// Setup prop types. player should be a required objetc

Player.propTypes = {
    player: PropTypes.object.isRequired
};





