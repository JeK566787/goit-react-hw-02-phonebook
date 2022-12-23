import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Message } from './App.styled';
export class App extends Component {
  state = {
    contacts: [],
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

  deleteContacts = id => {
    const filteredContact = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: filteredContact });
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
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        {this.state.contacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <Filter filterInputChange={this.filterInputChange} />
            <ContactsList
              list={filteredContacts}
              deleteContacts={this.deleteContacts}
            />
          </>
        ) : (
          <Message>Contacts list is empty yet</Message>
        )}
      </Container>
    );
  }
}
