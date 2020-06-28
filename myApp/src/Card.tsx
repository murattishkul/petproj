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
  const info:string = props.name! + '\n' + props.email! + '\n' + props.phone!+ '\n';
  return (
    <div className="d-flex">
        <div className="border border-dark " style={{height: props.height, width: props.width}}>
            {props.logo ? <img src={props.logo} width={props.widthImg} height={props.heightImg}/> : null}
            {props.title}            
            <br/>
            {info ? info : null}
            <br />
            {props.footer}
        </div>
    </div>
  );
}

export default Card;
