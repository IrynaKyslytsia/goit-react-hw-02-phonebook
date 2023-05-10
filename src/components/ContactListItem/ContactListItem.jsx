import React from "react";
import PropTypes from 'prop-types';
import { Text, DeleteBtn } from 'components/ContactListItem/ContactListItem.styled';


const ContactListItem = ({name, number, id, onDeleteContact}) => {
    return (
        <>
            <Text>{name}: {number}</Text>
            <DeleteBtn 
            type="button" 
            onClick={() => {onDeleteContact(id)}}>Delete</DeleteBtn>
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