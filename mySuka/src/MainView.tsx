import React, {useState, FunctionComponent} from 'react';
import Card from './Card'
import './MainView.css';

interface MyCard {
    title?: string;
  }


const MainView:FunctionComponent<MyCard> = props => {
    const [cards, setCards] = useState([{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"}]);

    return <>{cards.map( (card:MyCard) => <Card title={card.title!} /> )}</>
}

export default MainView;
