import _ from 'lodash';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchContacts, deleteContacts } from '../actions';
import ContactForm from './contact_form';




class ContactList extends Component {
  componentDidMount(){
    this.props.fetchContacts();
  }
  onDelete(id){
    console.log("ID >>>>>>>>>>>" + JSON.stringify(this.id));
    this.props.deleteContacts(id);

  }
  renderContacts(){

    return _.map(this.props.contacts, contact =>{

    return(<li className = "list-group-item" key = {contact._id}>
      {contact.name} {contact.email} {contact.phone}
<button id={contact._id} onClick={this.onDelete.bind(this)} className="btn btn-xs btn-danger pull-xs-right">Delete</button>
      </li>
    );
  });
  }
  render() {
    return(
      <div>
      <h3>Contacts List</h3>
      <ul className = "list-group">
      {this.renderContacts()}
      </ul>
    </div>


  );

  }
}
function mapStateToProps(state) {
  return { contacts: state.contacts};
}

export default  connect (mapStateToProps, { fetchContacts, deleteContacts })(ContactList);
