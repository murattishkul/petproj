import React, {useState, FunctionComponent} from 'react';
import Card from '../Card/Card'
import logo from "../../static/bookmarkl.png";
import { render } from '@testing-library/react';
// import './MainView.css';

interface MyCard {
    title?: string;
  }


const MainView:FunctionComponent<MyCard> = props => {
    const [cards] = useState([{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"},{title:"Hi i am type"}]);
    return (
          <div className="mt-4 row">
            {/* <div className="col-6"> */}
              {cards.map( (card:MyCard) => <div className="col-6"><Card logo={logo!} title={card.title!} height="20rem" width="100%" heightImg="50px" widthImg="50px"/></div> )}
            {/* </div> */}
          </div>
          )
}

export default MainView;
