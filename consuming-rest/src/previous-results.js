import React, { Component } from 'react';
import './App.css';
class PreviousResults extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const team = this.props.team;

        return (
            <div className="input-panel">
                <div><span className="field-name"></span>{team} - Last 5 results</div>
                <br/>
                Testing
                <br/>
            </div>
        );
    }

}
export default PreviousResults;
