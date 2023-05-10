import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from "components/ContactListItem/ContactListItem";
import { List, Item } from 'components/ContactList/ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <List>
            {contacts.map(({ name, number, id }) => (
              <Item key={id}>
                <ContactListItem 
                name={name}
                number={number}
                id={id}
                onDeleteContact={deleteContact} />
              </Item>
            ))}
        </List>
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