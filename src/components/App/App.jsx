import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  render() {
    return (
      <div>
        <section className='phonebook'>
          <h2 className='sectionTitle'>Phonebook</h2>
          <form>
            <label>
              Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            </label>
            <button>Add contact</button>
          </form>
        </section>
        <section className='contacts'>
          <h2 className='sectionTitle'>Contacts</h2>
          <ul></ul>
        </section>
      </div>
    );
  }
};

export default App;