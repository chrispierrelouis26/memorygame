import React from "react";
import "./style.css"


class Card extends React.Component {

    render() {
return (
    
<div className ="card" onClick = {() => this.props.updateScore(this.props.id)}>
  {/* <p class = "text=muted">{this.props.name}</p> */}
  <img alt = {this.props.image} src = {this.props.image} />
  </div>
  



)
    }


}


export default Card


// // function FriendCard(props) {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Address:</strong> {props.location}
//           </li>
//         </ul>
//       </div>
//       <span className="remove"onClick={() => props.removeFriend(props.id)}>𝘅</span>
//     </div>
//   );
// }

// export default FriendCard;