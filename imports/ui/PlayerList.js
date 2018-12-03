import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
    renderPlayers() {
        if(this.props.players.length === 0) {
            //JSX to show a message "add your first player"
            return <div className="item">
            <p className="item__message">Add your first player</p>
            </div>
        } else {
        return this.props.players.map((player) => {
            return <Player key={player._id} player={player} />;
        });
        }   
    }
    render() {
        return(
            
            <div>
                <FlipMove>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
};