import React, {useState} from 'react';

export default function Fops({person}) {
    
    const [detailed, setDetailed]= useState(false);

    function toggleDetails() {
        setDetailed(!detailed);
      }
    
    return <li><button onClick={toggleDetails}>{person.name}</button>
        {detailed ? <div><div>Адреса: {person.address}</div><div>Контакти: {person.contacts}</div><div>Дата реєстрації: {person.reg_date}</div><div>Статус: {person.state_name}</div></div> : null}
        </li>
}