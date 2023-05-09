import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from "components/ContactListItem/ContactListItem";
import css from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(({ name, number, id }) => (
              <li key={id} className={css.item}>
                <ContactListItem 
                name={name}
                number={number}
                onDeleteContact={deleteContact} />
              </li>
            ))}
        </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};