import React from "react";
import { useDataLayerValue } from "./DataLayer";
import Ticket from "./Ticket";
import "./Structure.css";
import Add from "./Add";
import Dots from "./Dots";

function Status() {
  const [{ tickets, users, priority, groupBy }] = useDataLayerValue();
  const inProgress = [];
  const todo = [];
  const backlog = [];
  const done = [];
  const cancelled = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].status === "In progress") {
      inProgress.push(tickets[i]);
    } else if (tickets[i].status === "Cancelled") {
      cancelled.push(tickets[i]);
    } else if (tickets[i].status === "Todo") {
      todo.push(tickets[i]);
    } else if (tickets[i].status === "Backlog") {
      backlog.push(tickets[i]);
    } else {
      done.push(tickets[i]);
    }
  }
  return (
    <div className="ParentContainer">
      <div className="Parent">
        <div className="heading">
          <div className="statusname">
            <div className="statuslogo">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  fill="white"
                  stroke="#F2BE00"
                  stroke-width="2"
                />
                <path
                  d="M9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7Z"
                  stroke="#F2BE00"
                  stroke-width="4"
                />
              </svg>
            </div>
            <div className="name">In Progress</div>
          </div>
          <div className="functionality">
            <div className="Add">
              <Add />
            </div>
            <div className="dots">
              <Dots />
            </div>
          </div>
        </div>
        <div className="InProgress">
          {inProgress.map((item) => (
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
          <div className="statusname">
            <div className="statuslogo">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#B8B8B8"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="name">Todo</div>
          </div>
          <div className="functionality">
            <div className="Add">
              <Add />
            </div>
            <div className="dots">
              <Dots />
            </div>
          </div>
        </div>
        <div className="Todo">
          {todo.map((item) => (
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
          <div className="statusname">
            <div className="statuslogo">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  stroke="#95999F"
                  stroke-width="2"
                  stroke-dasharray="1.4 1.74"
                />
              </svg>
            </div>
            <div className="name">Backlog</div>
          </div>
          <div className="functionality">
            <div className="Add">
              <Add />
            </div>
            <div className="dots">
              <Dots />
            </div>
          </div>
        </div>
        <div className="Backlog">
          {backlog.map((item) => (
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
          <div className="statusname">
            <div className="statuslogo">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  fill="#96A3B4"
                  stroke="#96A3B4"
                  stroke-width="2"
                />
                <path
                  d="M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z"
                  stroke="#96A3B4"
                  stroke-width="6"
                  stroke-dasharray="18.85 100"
                />
                <path
                  d="M6.99682 7.68089L4.81753 9.86018C4.72008 9.95763 4.60934 10.0041 4.48532 9.99971C4.36129 9.99528 4.25055 9.94434 4.15311 9.84689C4.05566 9.74945 4.00693 9.6365 4.00693 9.50804C4.00693 9.37959 4.05566 9.26663 4.15311 9.16919L6.31911 7.00318L4.13982 4.82388C4.04237 4.72643 3.99586 4.61348 4.00029 4.48503C4.00472 4.35657 4.05566 4.24362 4.15311 4.14617C4.25055 4.04872 4.36351 4 4.49196 4C4.62041 4 4.73337 4.04872 4.83081 4.14617L6.99682 6.32547L9.17612 4.14617C9.27357 4.04872 9.38652 4 9.51497 4C9.64343 4 9.75638 4.04872 9.85383 4.14617C9.95128 4.24362 10 4.35657 10 4.48503C10 4.61348 9.95128 4.72643 9.85383 4.82388L7.67453 7.00318L9.85383 9.18247C9.95128 9.27992 10 9.39066 10 9.51468C10 9.63871 9.95128 9.74945 9.85383 9.84689C9.75638 9.94434 9.64343 9.99307 9.51497 9.99307C9.38652 9.99307 9.27357 9.94434 9.17612 9.84689L6.99682 7.68089Z"
                  fill="#E8EAED"
                />
              </svg>
            </div>
            <div className="name">Cancelled</div>
          </div>
          <div className="functionality">
            <div className="Add">
              <Add />
            </div>
            <div className="dots">
              <Dots />
            </div>
          </div>
        </div>
        <div className="Cancelled">
          {cancelled.map((item) => (
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
          <div className="statusname">
            <div className="statuslogo">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                  fill="#5E6AD2"
                  stroke="#5E6AD2"
                  stroke-width="2"
                />
                <path
                  d="M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z"
                  stroke="#5E6AD2"
                  stroke-width="6"
                  stroke-dasharray="18.85 100"
                />
                <path
                  d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z"
                  fill="#FBFBFB"
                />
              </svg>
            </div>
            <div className="name">Done</div>
          </div>
          <div className="functionality">
            <div className="Add">
              <Add />
            </div>
            <div className="dots">
              <Dots />
            </div>
          </div>
        </div>
        <div className="Done">
          {done.map((item) => (
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

export default Status;
