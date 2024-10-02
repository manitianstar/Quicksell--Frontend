import React, { useState, useEffect } from 'react';
import './App.css';
import { useDataLayerValue } from './DataLayer';
import Card from './Card.js';
import Navbar from './Navbar.js';

function App() {

  const [ticket, setTicket] = useState([]);
  const [user, setUser] = useState([]);
  const [{tickets , users}, dispatch] = useDataLayerValue();


  useEffect( () => {
    async function getData() {
      const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        setTicket(json["tickets"]);
        setUser(json["users"]);
        // console.log(json["tickets"]);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, [])

  
  // getData();
  
  useEffect( () => {
    if(ticket.length != 0){
      dispatch({
        type: 'SET_TICKETS',
        tickets: ticket,
      })
    }
    if(user.length != 0){
      dispatch({
        type: 'SET_USER',
        users: user,
      })
    }
  }, [ticket, user])

  console.log(tickets);
  console.log(users);

  return (
    <div>
      <Navbar />
      {tickets.length != 0 ? (<Card />) : (<div></div>)}
    </div>
  )
}

export default App;