import React from 'react';
import './App.css';


class HeaderThree extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      tardis : {
        name: 'Time and Relative Dimension in Space',
        caps: false
      }
    }

this.changeIt = this.changeIt.bind(this)
  }

  
  changeIt = (text) => {

    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }


  render() {
    return (
      <div>
       <h3 onClick={()=>this.changeIt(this.state.tardis.name)}>
         {this.state.tardis.name}
        </h3>
      </div>
    )
  }
}


class HeaderTwo extends React.Component {
  render() {
    let combine = this.props.combine
    return (
         <div>
           <HeaderThree/>
           <HeaderThree/>
         </div>
      )
  }
}



class HeaderOne extends React.Component {

  render() {
    
    return (
      <HeaderTwo/>
    )
  }
}


class App extends React.Component {

 
  render() {
    
    return (
      <div className="App">
       <HeaderOne/>
      </div>
    )
  }
}

export default App;
