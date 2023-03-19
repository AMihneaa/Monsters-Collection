import { Component } from "react";

import "./App.css";

// Components
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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

  onSearchChange = (ev) => {
    const searchFilter = ev.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchFilter };
    });
  };

  render() {
    const { monsters, searchFilter } = this.state;
    const { onSearchChange } = this;

    const filterMonster = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchFilter)
    );

    return (
      <div className="App">
        <SearchBox
          className={"search-box"}
          placeHolder={"Search monsters"}
          onChangeHandler={onSearchChange}
        />
        <CardList monster={filterMonster} />
      </div>
    );
  }
}

export default App;
