import { Component } from "react";

// Import Components
import CardBox from "./card-component/card-box.component";

// Import Styles
import "./card-list-styles.css";

class CardList extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div className="card-list">
        {monster.map((monsterElem) => {
          const { name, id, email } = monsterElem;

          return (
            <CardBox
              className="card-container"
              key={id}
              imgSrc={`https://robohash.org/${id}?set=set2&size=180x180`}
              imgAlt={`Monster ${name}`}
              name={name}
              email={email}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
