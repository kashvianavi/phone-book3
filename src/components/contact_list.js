import _ from 'lodash';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';
import ContactForm from './contact_form';




class ContactList extends Component {
  componentDidMount(){
    this.props.fetchContacts();
  }
  renderContacts(){
    console.log("printing contacts from list component" +JSON.stringify(this.props.contacts));
    return _.map(this.props.contacts, contact =>{
      console.log("printing contact from list component" +contact);
    return(<li className = "list-group-item" key = {contact.id}>
      {contact.name} {contact.email} {contact.phone}
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

export default  connect (mapStateToProps, { fetchContacts })(ContactList);
