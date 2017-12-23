import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(){
    console.log("ID >>>>>>>>>>>" + this.props.id);
    this.props.onDelete(this.props.id);
  }

  render(){
   console.log("Rendering contact" + this.props.name);
    return(
      <li className = "list-group-item">
      {this.props.name} {this.props.email} {this.props.phone} <button  onClick={this.onDelete} className="btn btn-xs btn-danger pull-xs-right">Delete</button>
      </li>
    );
  }
}
