import React, { useState, useEffect } from 'react';
import { useDataLayerValue } from './DataLayer';
import Ticket from './Ticket';
import Structure from './Structure';

function Card(){
    const [{tickets}] = useDataLayerValue();
    console.log(tickets);
    console.log(tickets.map(ticket => (console.log(ticket.title))))
    
    {/* {console.log(tickets[0].id)}
    {tickets.map(ticket =>(
        <Ticket id={ticket.id} title = {ticket.title} userId={ticket.userId} status={ticket.status} priority={ticket.priority} featureRequest={ticket.tag[0]}/>
    ))} */}

    return(
        <div>
            <Structure />
        </div>
    )
}

export default Card;