import React from 'react';
import ReactDOM from 'react-dom';
export class Multi extends React.Component {
  constructor(props) {
    super();
    console.log(this)
    this.state = {
      name : props.name || ""
    }
  }
  componentWillReceiveProps(newProps){
    this.setState({name : newProps.name })
  }
  render(){
    return (<p>Hello {this.state.name}</p>)
  }
}
