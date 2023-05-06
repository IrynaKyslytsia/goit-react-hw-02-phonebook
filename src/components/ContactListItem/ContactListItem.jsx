import React from "react";

const ContactListItem = ({ name, number, id }) => {
    return (
        <li key={id}>
            <p>{name}: {number}</p>
        </li>
    )
};

export default ContactListItem;