import React, {useState, FunctionComponent} from 'react';
import Card from '../Card/Card'
import logo from "./../../static/bookmarkl.png";
import { render } from '@testing-library/react';
// import './MainView.css';

interface MyCard {
    title?: string;
  }


const MainView:FunctionComponent<MyCard> = props => {
    const [cards, setCards] = useState([{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"}]);
    return (
          <div className="d-flex flex-wrap justify-content-start mt-4">
            {cards.map( (card:MyCard) => <div><Card logo={logo!} title={card.title!} height="27rem" width="27rem" heightImg="50px" widthImg="50px"/></div> )}
          </div>
          )
}

export default MainView;
