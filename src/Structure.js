import React from "react";
import { useDataLayerValue } from "./DataLayer";
import Ticket from "./Ticket";
import "./Structure.css";
import Status from "./Status";
import Name from "./Name";
import Priority from "./Priority";

function Structure() {
  const [{ tickets, users, priority, groupBy }] = useDataLayerValue();
  let result = 0;
  if (groupBy === "status" && priority === "null") result = 1;
  else if (groupBy === "name" && priority === "null") result = 2;
  else if (groupBy === "priority" && priority === "null") result = 3;
  return (
    <div>
      {result === 1 ? (
        <Status />
      ) : result === 2 ? (
        <Name />
      ) : result === 3 ? (
        <Priority />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Structure;
