import React, { Component } from 'react';
import './App.css';
import PreviousResults from "./previous-results";
class LeagueTable extends Component {

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.state = {
            showResults: false,
            isItemContentVisible: {}
        }

    }

    showContent(id) {
        // merge new value with existing visibility status into new object
        this.setState({
            isItemContentVisible: {
                ...this.state.isItemContentVisible,
                [id]: !this.state.isItemContentVisible[id]
            }
        });
    }

    render() {
        return(
        this.props.league.map((team, index) => {
            return (
                <div key={team.identifier} onClick={() => this.showContent(team.identifier)}>
                    {team.position}. {team.team}
                    {this.state.isItemContentVisible[team.identifier] ?
                        <PreviousResults team={team.team}/> : null}
                </div>
            );
        })
        )
    }

    onEdit() {
        this.props.onEdit();
    }
    onDelete() {
        const item = this.props.item;
        if(window.confirm("Are you sure to delete item: " + item.name + " ?")) {
            this.props.onDelete(item.link);
        }
    }
    onSelect(team) {
        this.setState(prevState => ({
            showResults: !prevState.showResults
        }));

        // console.log(showResults);
        // this.clearState();
        // this.itemService.getItem(league).then(item => {
        //         this.setState({
        //             showResults: true,
        //             // selectedItem: item
        //         });
        //     }
        // );
    }
}
export default LeagueTable;
