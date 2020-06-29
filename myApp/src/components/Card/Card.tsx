import React from 'react';
export type Info={
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
function Card(props:Info) {
  const info = props.name ? ( <p>{props.name} <br/> {props.email} <br/> {props.phone}</p> ) : null;
  return (
        <div className="d-flex mb-4 border border-dark flex-column" style={{height: props.height, width: props.width}}>
            {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg}/> : null}
            {props.footer}
            {props.title}            
            <br/>
            {info ? info : null}
            <br />
            
        </div>
  );
}

export default Card;
