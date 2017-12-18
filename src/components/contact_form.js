import React from 'react';
import { connect } from 'react-redux';
import { createContacts } from '../actions';



class ContactForm extends React.Component {

    constructor(props) {

      super(props);

      this.onAddClick = this.onAddClick.bind(this);

    }



    onAddClick(event) {

      event.preventDefault();

      let contact = {};

      contact.name = this.refs.name.value;
      contact.email = this.refs.email.value;
      contact.phone = this.refs.phone.value;
      console.log(contact);

      this.props.createContacts(contact);

    }



    render() {

        return (

          <div>

            <form onSubmit={this.onAddClick}>

              <div className="form-group">

                <label>Name</label>

                <input type="text" className="form-control" ref="name" required/>

              </div>

              <div className="form-group">

                <label>Email</label>

                <input type="text"  className="form-control" ref="email" required/>

              </div>

              <div className="form-group">

                <label>Phone</label>

                <input type="text"  className="form-control" ref="phone" required/>

              </div>

              <div className="form-group">

                <input type="submit" value="Add Contact" className="btn btn-xs btn-primary"/>

              </div>

            </form>

          </div>

        );

    }

}
function mapStateToProps(state) {
  return { contacts: state.contacts};
}
export default  connect (mapStateToProps, { createContacts })(ContactForm);
