import React, { Component } from 'react';
import request from 'superagent';
import { Button } from 'react-bootstrap';
import {FieldGroup} from 'react-bootstrap';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data: ""};
    this.state_2 = {message: []};
    this.onSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

handleSubmit(e){
    e.preventDefault();

    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    request
      .post('http://localhost:3000/test/submit')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({
              "value": self.refs.task.value
            }))
      .end(function(err, res){
        alert("El valor ingresado es: " + res.body.value);
    });  
    // fetch('http://localhost:3000/test/submit',{
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({
    //       "value": self.refs.task.value
    //     }),
    // }).then(function(response){
    //   //self.setState.data = response.json();
    //     return response.json(); 
    // }).then(function(body){        
    //     alert(body.value);
    // });
}


  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <h1>Pasar Valores</h1>          
          <input type="text" ref="task"/>
          <Button type="submit" className="btn btn-primary">Go!</Button>
        </form>
      </div>
    );
  }
}

export default App;



// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       users: []
//     }
//   }


//   render() {
//     this.val = "fff";
//     this.oo = function (e) {
//       console.log(e)
//       request
//       .post('http://localhost:3000/test/submit')
//       .set('Content-Type', 'application/x-www-form-urlencoded')
//       .end(function(err, res){
//         console.log(res);
//       });  
//     }

//     var users = this.state.users.map((user, i) => {
//       return <li key={i}>{user.nombre}</li>
//     });
//     return(
//         <div>
//           <h1>Pasar Valores</h1>
//           <input type="text" name="val" id="val" ref="topic"/>
//           <button onClick={this.oo}>Go!</button>
//           <h1>{this.val}</h1>
//         </div>
//     )
//   }
// }


// export default App;
