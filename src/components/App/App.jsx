import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    
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

  render() {
    return (
      <div className='container'>        
          <h2 className='sectionTitle'>Phonebook</h2>         
          <ContactForm onAddContact={this.addContact} />
        
          <h2 className='sectionTitle'>Contacts</h2>
          <ContactList contacts={this.state.contacts}  />
        
      </div>
    );
  }
};

export default App;