import React from 'react';
import logo from "./bookmarkl.png";

export type Suka={
  title: string
}

function Card(props:Suka) {
  return (
    <div className="d-flex">
        <div className="border border-dark " style={{height: "300px", width: "300px"}}>
            <img src={logo} width="50" height="50"/>
            {props.title}
        </div>
    </div>
  );
}

export default Card;
