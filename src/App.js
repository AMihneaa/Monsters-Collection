import { useEffect, useState } from "react";

import "./App.css";

// Components
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchFilter, setSearchFilter] = useState(" ");

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
      });
  }, [monsters]);

  useEffect(() => {
    const newMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchFilter)
    );

    setFilteredMonsters(newMonsters);
  }, [searchFilter, monsters]);

  const onSearchChange = (event) => {
    setSearchFilter(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className={"search-box"}
        placeHolder={"Search monsters"}
        onChangeHandler={onSearchChange}
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],

//       URL: "https://jsonplaceholder.typicode.com/users",

//       searchFilter: " ",
//     };
//   }

//   componentDidMount() {
//     fetch(this.state.URL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((users) => {
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log(this.state.monsters);
//           }
//         );
//       });
//   }

//   render() {
//     const { monsters, searchFilter } = this.state;
//     const { onSearchChange } = this;

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className={"search-box"}
//           placeHolder={"Search monsters"}
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monster={filterMonster} />
//       </div>
//     );
//   }
// }

export default App;
