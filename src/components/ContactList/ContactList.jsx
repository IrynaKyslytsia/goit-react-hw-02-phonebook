import React from "react";
import ContactListItem from "components/ContactListItem/ContactListItem";

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({ name, number, id }) => (
              <ContactListItem 
                name={name}
                number={number}
                id={id}
              />
            ))}
          </ul>
    )
};

export default ContactList;