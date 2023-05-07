import React from "react";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(({ name, number, id }) => (
              <li key={id}>
              <p>{name}: {number}</p>
              <button type="button" onClick={() => onDelete(id)}>Delete</button>
          </li>
            ))}
          </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}