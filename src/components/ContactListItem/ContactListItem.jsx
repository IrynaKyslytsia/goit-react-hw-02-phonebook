import React from "react";
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';


const ContactListItem = (contacts, onDeleteContact) => {
    const { name, number } = contacts;
    return (
        <>
            <p>{name}: {number}</p>
            <button className={css.delete__btn} 
            type="button" 
            onClick={onDeleteContact}>Delete</button>
        </>
     );
        };

export default ContactListItem;

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        }).isRequired
        ),
    onDeleteContact: PropTypes.func.isRequired,
};