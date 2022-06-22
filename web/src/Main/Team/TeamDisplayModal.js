import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addGoalkeepers} from './TeamSelectReducer'

class TeamDisplayModal extends Component {
    constructor(props) {
        super(props)
        this.createPlayerOption = this.createPlayerOption.bind(this);
    }
    state = {
        error_message: null
    }

    createPlayerOption(playerId) {
        let player
        for (let i=0; i<this.props.team.allGoalkeepers.length; i++){
            if (this.props.team.allGoalkeepers[i][0] == playerId){
                player = this.props.team.allGoalkeepers[i]
                return <option key={player[0]} player-id={player[0]}>{player[2]} {player[3]}</option>
            }
        }
    }

    render() {
        return(
            <div>
                <div>
                    <div><b>Goalkeepers</b></div>
                    {this.props.team.players.goalkeepers.map(this.createPlayerOption)}
                </div>

            </div>
        )
    }

}

const mapDispatchToProps = () => {
    return{
        addGoalkeepers
    };
}

const mapStateToProps = state => ({
    user: JSON.parse(window.localStorage.getItem('user')) || state.auth.user,
    loggedIn: JSON.parse(window.localStorage.getItem('loggedIn')) || state.auth.loggedIn,
    team: state.team
});


export default connect(mapStateToProps, mapDispatchToProps())(TeamDisplayModal);