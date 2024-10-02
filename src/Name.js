import React from "react";
import { useDataLayerValue } from "./DataLayer";
import Ticket from "./Ticket";
import "./Structure.css";
import Add from "./Add";
import Dots from "./Dots";
function Name() {
  const [{ tickets, users, priority, groupBy }] = useDataLayerValue();
  const per1 = [];
  const per2 = [];
  const per3 = [];
  const per4 = [];
  const per5 = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].userId === users[0].id) {
      per1.push(tickets[i]);
    } else if (tickets[i].userId === users[1].id) {
      per2.push(tickets[i]);
    } else if (tickets[i].userId === users[2].id) {
      per3.push(tickets[i]);
    } else if (tickets[i].userId === users[3].id) {
      per4.push(tickets[i]);
    } else {
      per5.push(tickets[i]);
    }
  }
  return (
    <div className="ParentContainer">
      <div className="Parent">
        <div className="heading">
          <div className="name">{users[0].name}</div>
          <div className="functionality">
            <div className="Add">
                <Add></Add>
            </div>
            <div className="dots">
                <Dots></Dots>
            </div>
          </div>
        </div>
        <div className="InProgress">
          {per1.map((item) => (
            <Ticket
              Ticket
              id={item.id}
              title={item.title}
              userId={item.userId}
              status={item.status}
              priority={item.priority}
              featureRequest={item.tag[0]}
            />
          ))}
        </div>
      </div>

      <div className="Parent">
        <div className="heading">
          <div className="name">{users[1].name}</div>
          <div className="functionality">
            <div className="Add">
                <Add></Add>
            </div>
            <div className="dots">
                <Dots></Dots>
            </div>
          </div>
        </div>
        <div className="Todo">
          {per2.map((item) => (
            <Ticket
              Ticket
              id={item.id}
              title={item.title}
              userId={item.userId}
              status={item.status}
              priority={item.priority}
              featureRequest={item.tag[0]}
            />
          ))}
        </div>
      </div>

      <div className="Parent">
        <div className="heading">
          <div className="name">{users[2].name}</div>
          <div className="functionality">
            <div className="Add">
                <Add></Add>
            </div>
            <div className="dots">
                <Dots></Dots>
            </div>
          </div>
        </div>
        <div className="Backlog">
          {per3.map((item) => (
            <Ticket
              Ticket
              id={item.id}
              title={item.title}
              userId={item.userId}
              status={item.status}
              priority={item.priority}
              featureRequest={item.tag[0]}
            />
          ))}
        </div>
      </div>
      <div className="Parent">
        <div className="heading">
          <div className="name">{users[3].name}</div>
          <div className="functionality">
            <div className="Add">
                <Add></Add>
            </div>
            <div className="dots">
                <Dots></Dots>
            </div>
          </div>
        </div>
        <div className="Cancelled">
          {per4.map((item) => (
            <Ticket
              Ticket
              id={item.id}
              title={item.title}
              userId={item.userId}
              status={item.status}
              priority={item.priority}
              featureRequest={item.tag[0]}
            />
          ))}
        </div>
      </div>
      <div className="Parent">
        <div className="heading">
          <div className="name">{users[4].name}</div>
          <div className="functionality">
            <div className="Add">
                <Add></Add>
            </div>
            <div className="dots">
                <Dots></Dots>
            </div>
          </div>
        </div>
        <div className="Done">
          {per5.map((item) => (
            <Ticket
              Ticket
              id={item.id}
              title={item.title}
              userId={item.userId}
              status={item.status}
              priority={item.priority}
              featureRequest={item.tag[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Name;
