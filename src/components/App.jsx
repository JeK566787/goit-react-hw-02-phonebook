import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', text: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', text: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', text: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', text: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = state => {
    const repeatCheck = this.state.contacts.find(contact => {
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

  deleteToDo = id => {
    const filteredToDo = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: filteredToDo });
  };

  filterInputChange = filter => {
    this.setState({ filter: filter });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterInputChange={this.filterInputChange} />
        <ContactsList list={filteredContacts} deleteToDo={this.deleteToDo} />
      </>
    );
  }
}
