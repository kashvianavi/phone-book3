import _ from 'lodash';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchContacts, deleteContacts } from '../actions';
import ContactForm from './contact_form';
import Contact from './contact';




class ContactList extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchContacts();
  }
  onDelete(id){
    console.log("ID >>>>>>>>>>>" + id);
    this.props.deleteContacts(id);

  }
  renderContacts(){
    console.log("Contacts >>>> " + JSON.stringify(this.props.contacts));
    return _.map(this.props.contacts, contact =>{
        <Contact key={contact._id}  id={contact._id} name={contact.name} email={contact.email} phone={contact.phone} onDelete={this.onDelete}/>
    })
  }
  render() {
    return(
      <div>
      <h3>Contacts List</h3>
      <ul className = "list-group">
        {
          this.renderContacts()
        }
      </ul>
    </div>


  );

  }
}
function mapStateToProps(state) {
  return { contacts: state.contacts};
}

export default  connect (mapStateToProps, { fetchContacts, deleteContacts })(ContactList);
