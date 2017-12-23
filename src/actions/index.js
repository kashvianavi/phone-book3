import axios from 'axios';

export const FETCH_CONTACTS = 'fetch_contacts';
export const CREATE_CONTACTS = 'create_contacts';
export const DELETE_CONTACTS = 'delete_contacts';

export function fetchContacts() {

  const request = axios.get("http://45.55.54.146:8081/v1/contacts");

  return {

    type:  FETCH_CONTACTS,

    payload: request

  };
}
  export function createContacts(contact) {

    const request = axios.post("http://45.55.54.146:8081/v1/contacts", contact);

    return {

      type:  CREATE_CONTACTS,

      payload: request

    };
}
export function deleteContacts(id) {
  console.log("Id is"+ id);
const request = axios.delete("http://45.55.54.146:8081/v1/contacts/{id}");

  return {

    type:  DELETE_CONTACTS,

    payload: id

  };
}
