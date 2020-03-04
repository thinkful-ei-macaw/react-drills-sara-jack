import React from 'react';

class Bomb extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
    }
  }
  
  componentDidMount(){
    this.timer = setInterval(() => {
      this.countUp()
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  countUp(){
    if(this.state.count < 8 ){
      this.setState({ count: this.state.count + 1 })
    }
    else{
      clearInterval(this.timer)
    }
  }

  render(){
    return(
      <div>
        <p>
          {this.state.count % 2 === 0 && 
            this.state.count < 8 && "tick"}
          {this.state.count % 2 !== 0 && 
            this.state.count < 8 && "tock"}
          {this.state.count >= 8 && "BOOM!!!!"}
        </p>
      </div>
    )
  }
}


export default Bomb ;