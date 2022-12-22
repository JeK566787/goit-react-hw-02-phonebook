import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  addContact = state => {
    const repeatCheck = state.contacts.find(contact => {
      return contact.text === state.name;
    });
    if (repeatCheck) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      number: state.number,
      text: state.name,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    this.setState({ name: '', number: '' });
  };
}
