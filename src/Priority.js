import React from "react";
import { useDataLayerValue } from "./DataLayer";
import Ticket from "./Ticket";
import "./Structure.css";
import Add from "./Add";
import Dots from "./Dots";
function Priority() {
  const [{ tickets, users, priority, groupBy }] = useDataLayerValue();
  const pri1 = [];
  const pri2 = [];
  const pri3 = [];
  const pri4 = [];
  const pri5 = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].priority === 1) {
      pri1.push(tickets[i]);
    } else if (tickets[i].priority === 2) {
      pri2.push(tickets[i]);
    } else if (tickets[i].priority === 3) {
      pri3.push(tickets[i]);
    } else if (tickets[i].priority === 4) {
      pri4.push(tickets[i]);
    } else if (tickets[i].priority === 5) {
      pri5.push(tickets[i]);
    }
  }
  return (
    <div className="ParentContainer">
      <div className="Parent">
        <div className="heading">
          <div className="information">
            <div className="name">No Priority</div>
            <div className="count">{pri1.length}</div>
          </div>
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
          {tickets.map((item) =>
            item.priority === 1 ? (
              <Ticket
                Ticket
                id={item.id}
                title={item.title}
                userId={item.userId}
                status={item.status}
                priority={item.priority}
                featureRequest={item.tag[0]}
              />
            ) : null
          )}
        </div>
      </div>

      <div className="Parent">
        <div className="heading">
          <div className="information">
            <div className="name">Low</div>
            <div className="count">{pri2.length}</div>
          </div>
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
          {tickets.map((item) =>
            item.priority === 2 ? (
              <Ticket
                Ticket
                id={item.id}
                title={item.title}
                userId={item.userId}
                status={item.status}
                priority={item.priority}
                featureRequest={item.tag[0]}
              />
            ) : null
          )}
        </div>
      </div>

      <div className="Parent">
        <div className="heading">
          <div className="information">
            <div className="name">Medium</div>
            <div className="count">{pri3.length}</div>
          </div>
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
          {tickets.map((item) =>
            item.priority === 3 ? (
              <Ticket
                Ticket
                id={item.id}
                title={item.title}
                userId={item.userId}
                status={item.status}
                priority={item.priority}
                featureRequest={item.tag[0]}
              />
            ) : null
          )}
        </div>
      </div>
      <div className="Parent">
        <div className="heading">
          <div className="information">
            <div className="name">High</div>
            <div className="count">{pri4.length}</div>
          </div>
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
          {tickets.map((item) =>
            item.priority === 4 ? (
              <Ticket
                Ticket
                id={item.id}
                title={item.title}
                userId={item.userId}
                status={item.status}
                priority={item.priority}
                featureRequest={item.tag[0]}
              />
            ) : null
          )}
        </div>
      </div>
      <div className="Parent">
        <div className="heading">
          <div className="information">
            <div className="name">Urgent</div>
            <div className="count">{pri5.length}</div>
          </div>
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
          {tickets.map((item) =>
            item.priority === 5 ? (
              <Ticket
                Ticket
                id={item.id}
                title={item.title}
                userId={item.userId}
                status={item.status}
                priority={item.priority}
                featureRequest={item.tag[0]}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Priority;
