import React from 'react';
import ReactDOM from 'react-dom';
import {Multi} from './multi.jsx'
export class HelloWorld extends React.Component {
  constructor() {
      super();
      this.state = {
        name: "",
      };
    }
  render(){
    console.log("HelloWorld",this.state)
    var multi = []
    if(this.state.name.length){
      for( let i = 0 ; i < this.state.name.length ; i++){
        multi.push(
          <Multi name={this.state.name} key={i} />
        )
      }
    }
    return (
      <div>
        <p> Hello World</p>
        {this.state.name.length ? null : <p> Is anyone there ?</p> }
        {/*  Input tag is used and onChange in value text is updated*/}
        <input value={this.state.name} onChange={ (e) => this.setState({name : e.target.value})} />
        {multi}
      </div>
    )
  }
}
ReactDOM.render(<HelloWorld/>, document.getElementById('main'));
