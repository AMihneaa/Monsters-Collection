//Import Styles
import "./card-box.styles.css";

const CardBox = ({ className, imgSrc, imgAlt, name, email }) => {
  return (
    <div className={className}>
      <img src={imgSrc} alt={imgAlt} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class CardBox extends Component {
//   render() {
//     const { className, imgSrc, imgAlt, name, email } = this.props;

//     return (
//       <div className={className}>
//         <img src={imgSrc} alt={imgAlt} />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default CardBox;
