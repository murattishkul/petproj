import React, {useState, FunctionComponent} from 'react';
import Card from './Card'
import logo from "./bookmarkl.png";
// import './MainView.css';

interface MyCard {
    title?: string;
    logo?: any;
  }


const MainView:FunctionComponent<MyCard> = props => {
    const [cards, setCards] = useState([{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"}]);

    return <>
            {cards.map( (card:MyCard) => <Card logo={logo!} title={card.title!} height="300px" width="300px" heightImg="50px" widthImg="50px"/> )}
          </>
}

export default MainView;
