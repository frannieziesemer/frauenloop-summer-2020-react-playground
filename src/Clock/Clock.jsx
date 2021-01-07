import React from "react";

// import ReactDom from "react-dom";
// function component
    //function Clock(props) {
    //     return (
    //       <div>
    //         <h1>Hello, world!</h1>
    //         <h2>It is {props.date.toLocaleTimeString()}.</h2>
    //       </div>
    //     );
    // }

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      date: new Date(),
    };
    console.log('constructor');
  }


  componentDidMount(){
    console.log('component did mount');
    this.timerID = setInterval(
      () => this.tick(), 
      1000
    );
  }        
  
  componentWillUnmount(){
    console.log('component umount');
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  }

  //refeshButton
  refreshHandler = () => {
    this.setState({ date: new Date() });
  }


  render() {
    console.log('render');
    return(
      <div>
        <h1>Hello World!</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}. </h2>
        <button onClick={this.refreshHandler}>Refresh</button>
      </div>
    )
  }  
}

export default Clock;