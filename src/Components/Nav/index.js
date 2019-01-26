import React from "react"
import "./style.css"


class Nav extends React.Component {

    render() {
return (

<ul className="nav justify-content-center">
  <li className="nav-item">
    <p className="nav-link">Clicky Game</p>
  </li>
  <li className="nav-item">
    <p className="nav-link">Click image to begin!</p>
  </li>
  <li className="nav-item">
  <h4 className="nav-link ">Top Score :{this.props.topscore} | Score :{this.props.score} </h4>
  </li>
</ul>


)
    }


}


export default Nav