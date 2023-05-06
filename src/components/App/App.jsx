import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  addContact = (data) => {
    console.log(data);
    const newContact = {
      ...data,
      id: nanoid()
    };
    
    this.setState((prevState) => {
      return {contacts: [...prevState.contacts, newContact]}
    });
  };

  handleChangeFilter = (e) => {
    this.setState({filter: e.target.value})
  };

  render() {
    const { filter } = this.state;
    return (
      <div className='container'>        
          <h2 className='sectionTitle'>Phonebook</h2>         
          <ContactForm onAddContact={this.addContact} />        
          <h2 className='sectionTitle'>Contacts</h2>
          <Filter value={filter} onChange={this.handleChangeFilter}/>
          <ContactList contacts={this.state.contacts}  />
        
      </div>
    );
  }
};

export default App;