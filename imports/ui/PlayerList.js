import React from 'react';
import Player from './Player'; 

// const renderPlayers = (playersList) => {
//     return playersList.map((player) => {
//       return <Player key={player._id} player={player} />;
      
//     });
//   };

export default class PlayerList extends React.Component {
    renderPlayers() {
        if(this.props.players.length === 0) {
            //JSX to show a message "add your first player"
            return <p>Add your first player</p>
        } else {
        return this.props.players.map((player) => {
            return <Player key={player._id} player={player} />;
        });
        }   
    }
    render() {
        return(
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
};