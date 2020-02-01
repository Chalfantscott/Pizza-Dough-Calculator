import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      water: '',
      flour: ''
    }
  }
 

  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(this.state)

  }

  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pizza Dough Calculator</h1>
        </header>

        
          <form onSubmit={this.handleSubmit}>
            
            <p>flour weight:  
              <input 
                type="text"
                placeholder="flour weight"
                value={this.state.flour} onChange={(e) => this.setState({ flour: e.target.value })}>
              </input>
            </p>
            <p>water:
              <input 
                type="text"
                placeholder="hydration"
                value={this.state.water} onChange={(e) => this.setState({ water: e.target.value })}>
                
              </input>
            </p>
          
            <button >Calculate</button>
          </form>
          <p className="results">your dough is hydrated!</p>
        

      </div>
    );
  }
}

export default App;
