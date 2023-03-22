import "./search-box.styles.css";

const SearchBox = ({ className, placeHolder, onChangeHandler }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
};

// class SearchBox extends Component {
//   render() {
//     const { className, placeHolder, onChangeHandler } = this.props;
//     return (
//       <input
//         className={className}
//         type="search"
//         placeholder={placeHolder}
//         onChange={onChangeHandler}
//       />
//     );
// }
// }

export default SearchBox;
