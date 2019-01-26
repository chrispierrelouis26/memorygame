import React, { Component } from 'react';
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import friends from "./friends.json";


class App extends Component {
 state ={
   friends:friends,
   score:0,
   topscore:0,
   gameover:""
 }
 removeCard = id => {
   // Filter this.state.pokemon for pokemon with an id not equal to the id being removed
   const friends = this.state.pokemon.filter(friend => friend.id !== id);
   // Set this.state.pokemon equal to the new pokemon array
   this.setState({ friends });
   this.setState({ score: this.state.score + 1});
 };
 updateTopScore = score => {
   this.state.topscore < score ? this.setState({ topscore: score}): this.setState({ topscore: this.state.topscore})
 };
 updateScore = id => {
   // filter the array friends to display only the index with id of id
  const filtered  = this.state.friends.filter(data => data.id === id);
  // checks if the filtered var has any index in it
 if (filtered.length > 0){
   //checks if the filtered index has the value clicked set to true
   if (filtered[0].clicked){
     //if yes the game over
     this.setState({ gameover: "Game Over!"});
     this.updateTopScore(this.state.score);
     this.newGame();
   }else {
     //if not , set that index .clicked to true
     filtered[0].clicked = true;
     // update the score
     this.setState({ score: this.state.score + 1});
     // shuffle the images
     this.randomizeBoard();
   }
 }
}

newGame(){
 let friends = this.state.friends.map(data => {

   data.clicked =false
   return data;
 })


 this.setState({score:0});
 this.setState({friends});
 this.setState({ gameover: ""});
}
 randomizeBoard = (id) => {
   // initialize the var
   let sourceArray=this.state.friends
  // loop the array and randomizes its indexes
     for (var i = 0; i < sourceArray.length - 1; i++) {
         var j = i + Math.floor(Math.random() * (sourceArray.length - i));
 // creates a temp var to hold the index
         var temp = sourceArray[j];
         //set the array index j with the value of the old array
         sourceArray[j] = sourceArray[i];
         //then sets the original index position to the temp value
         sourceArray[i] = temp;
     }
     // update the object array with its new order
     this.setState({ friends:sourceArray });





 }
 render() {
   return (
     <div className="App">
     <Nav
     score={this.state.score}
     topscore={this.state.topscore}
     />
     <Header />
     <Main>
     {this.state.friends.map((chars, index) =>{
       return (
             <Card
                 key={chars.id}
                 id={chars.id}
                 name={chars.name}
                 image={chars.image}
                 updateScore={this.updateScore}
              

             />

               )
                 })}
       <Card />
     </Main>
      <Footer />
     </div>
   );
 }
}
export default App














// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Footer from "./Components/Footer"
// import Header from "./Components/Header"
// import Nav from "./Components/Nav"
// import Main from "./Components/Main"
// import Card from "./Components/Card"
// import friends from "./friends.json";

// class App extends Component {

//   state = {
//     friends: friends,
//     score: 0,
//     topscore:0
//   }

//   randomizeBoard = () => {
//     // initialize the var
//     let sourceArray=this.state.friends
//    // loop the array and randomizes its indexes
//       for (var i = 0; i < sourceArray.length - 1; i++) {
//           var j = i + Math.floor(Math.random() * (sourceArray.length - i));
//   // creates a temp var to hold the index
//           var temp = sourceArray[j];
//           //set the array index j with the value of the old array
//           sourceArray[j] = sourceArray[i];
//           //then sets the original index position to the temp value
//           sourceArray[i] = temp;
//       }
//       // update the object array with its new order
//       this.setState({ friends:sourceArray });
 
//   }
//   updateTopScore = score => {
//    if ( this.state.topscore < score) {
//     this.setState({ topscore: score})
//    }
//   };

//   updateScore = id => {
//     // filter the array friends to display only the index with id of id
//    const filtered  = this.state.friends.filter(data => data.id === id);
//    // checks if the filtered var has any index in it 
//   if (filtered.length > 0){
//     //checks if the filtered index has the value clicked set to true
//     if (filtered[0].clicked){
//       //if yes the game over
//       alert("game over");
//       this.setState({ score: 0});
  
//       this.updateTopScore(this.state.score);
//     }else {
//       //if not , set that index .clicked to true 
//       filtered[0].clicked = true;
//       // update the score 
//       this.setState({ score: this.state.score + 1});
//       // shuffle the images
//       this.randomizeBoard();
//     }
    

//   }
  
  
//     // Filter this.state.pokemon for pokemon with an id not equal to the id being removed
   
//     // Set this.state.friends equal to the new friends array
   
//   };



//   render() {
//     return (

//       <div className="App">
//         <Nav 
//         score = {this.state.score} 
//         topscore={this.state.topscore}/>
//         <Header />
//         <Main >
//            {this.state.friends.map((chars, index) => {
//             return (
//               <Card
//               updateScore={this.updateScore}
//               removeCard = {this.removeCard}
//                  key = {chars.id}
//                 id= {chars.id}
//                 name={chars.name}
//                 image ={chars.image}
//               />
//             )

//           })}
//           <Card />
//         </Main>
//         <Footer />
//       </div>
//     );
//         }
//       }


//     export default App