import React , {Component} from 'react'
class MyComponent extends Component{
    constructor(){
        super()
        this.state={
            counter : 0
        }
        this.increment = ()=>this.setState({counter : this.state.counter+1})
        this.decrement = ()=>this.setState({counter : this.state.counter-1})
    }
    
    render(){
        return(
            <div>
                
         <h1>Hello Tilak</h1>
         <div id = "counter">{this.state.counter}</div>
         <button id ="increment-btn" onClick={this.increment}>Increment</button>
         <button id ="decrement-btn" onClick={this.decrement}>Increment</button>
         </div>
        )
    }
}
export default MyComponent