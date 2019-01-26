    import React from "react"
    import "./style.css"


    class Main extends React.Component {

        render() {
    return (

        <div className="box">
        {this.props.children}
</div>


)
    }


}


export default Main;