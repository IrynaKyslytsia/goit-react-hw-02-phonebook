import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };

    handleSabmit = (e) => {
        e.preventDefault();

        this.props.onAddContact(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    };

    render() {
        return (
            <form htmlFor={nanoid()} className={css.form} onSubmit={this.handleSabmit}>
            <label className={css.form__label}>Name</label>
            <input className={css.form__input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
           
            <label htmlFor={nanoid()} className={css.form__label}>Number</label>
            <input className={css.form__input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            
            <button className={css.form__button} type='submit'>Add contact</button>
          </form>
        )
    }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};