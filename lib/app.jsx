import React from 'react';
import ReactDOM from 'react-dom';
export class HelloWorld extends React.Component {
  render(){
    console.log("HelloWorld")
    return (
      <div>
        <p> Hello World</p>
        <p> Is anyone there ?</p>
      </div>
    )
  }
}
ReactDOM.render(<HelloWorld/>, document.getElementById('main'));
