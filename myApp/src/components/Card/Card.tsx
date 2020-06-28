import React from 'react';
export type Suka={
  title?: string,
  logo?: any,
  email?: string,
  name? : string,
  phone? : string,
  height?: string,
  width?: string,
  footer?: string,
  heightImg?: string,
  widthImg? : string,
}
function Card(props:Suka) {
  const info = props.name ? ( <p>{props.name} <br/> {props.email} <br/> {props.phone}</p> ) : null;
  return (
    <div className="d-flex mr-4 mb-4">
        <div className="border border-dark " style={{height: props.height, width: props.width}}>
            {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg}/> : null}
            {props.title}            
            <br/>
            {info}
            <br />
            {props.footer}
        </div>
    </div>
  );
}

export default Card;
