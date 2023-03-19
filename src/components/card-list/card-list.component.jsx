import { Component } from "react";

class CardList extends Component {
  render() {
    const { monster } = this.props;

    return (
      <div>
        {monster.map((monsterElem) => {
          return <h1 key={monsterElem.id}>{monsterElem.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
