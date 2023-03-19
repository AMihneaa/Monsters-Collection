import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],

      URL: "https://jsonplaceholder.typicode.com/users",

      searchFilter: " ",
    };
  }

  componentDidMount() {
    fetch(this.state.URL)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state.monsters);
          }
        );
      });
  }

  render() {
    const filterMonster = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchFilter)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type={"search"}
          placeholder={"Search monsters"}
          onChange={(ev) => {
            const searchFilter = ev.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchFilter };
            });
          }}
        />
        {filterMonster.map((monsterElem) => {
          return (
            <div key={monsterElem.id}>
              <h1>{monsterElem.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
