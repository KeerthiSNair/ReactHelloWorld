import React from 'react';
import ReactDOM from 'react-dom';
export class HelloWorld extends React.Component {
  constructor() {
      super();
      this.state = {
        name: "",
      };
    }
  render(){
    console.log("HelloWorld",this.state)
    return (
      <div>
        <p> Hello World</p>
        {this.state.name.length ? null : <p> Is anyone there ?</p> }
        {/*  Input tag is used and onChange in value text is updated*/}
        <input value={this.state.name} onChange={ (e) => this.setState({name : e.target.value})} />
        {this.state.name.length ? <p>Hello {this.state.name}</p> : null }
      </div>
    )
  }
}
ReactDOM.render(<HelloWorld/>, document.getElementById('main'));
