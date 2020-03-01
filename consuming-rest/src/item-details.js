import React, { Component } from 'react';
import './App.css';
class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    render() {
        const item = this.props.item;
        return (
            <div className="input-panel">
                <div><span className="field-name"></span>{item.name}</div>
                <div><span className="field-name"></span>{item.nation}</div>
                {/*<div><span className="field-name">Year:</span><br/> {item.year}</div>*/}
                {/*<div><span className="field-name">Country:</span><br/> {item.country}</div>*/}
                {/*<div><span className="field-name">Description:</span><br/> {item.description}</div>*/}
                {/*<br/>*/}
                {/*<button onClick={() => this.onDelete()}>Delete</button>*/}
                {/*<button onClick={() => this.onEdit()}>Edit</button>*/}
            </div>
        );
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
}
export default ItemDetails;
