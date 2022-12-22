import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
export class App extends Component {
  state = {
    name: '',
    number: '',
    contacts: [
      { id: 'id-1', text: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', text: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', text: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', text: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.addContact(this.state);
    // event.target.reset();
  };

  deleteToDo = id => {
    const filteredToDo = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: filteredToDo });
  };

  inputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
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
    const { name, number } = this.state;
    const filteredContacts = this.filteredContacts();
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          {/* <input onChange={this.inputChange} /> */}
          <input
            value={name}
            onChange={this.inputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            value={number}
            onChange={this.inputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <ContactsList list={filteredContacts} deleteToDo={this.deleteToDo} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          onChange={e => this.filterInputChange(e.target.value)}
        />
      </>
    );
  }
}
