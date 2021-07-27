import React ,{Component} from 'react'
class Counter extends Component{
    constructor(props){
        console.log('Constructor')
        super(props)
        this.state={
            counter : 0
        }
        this.increment = ()=>this.setState({counter : this.state.counter+1})
        this.decrement = ()=>this.setState({counter : this.state.counter-1})
    }
    componentDidMount(){
        console.log('Component did mount')
        console.log('----------------------')
    }
    render(){
        console.log('Render')
        return(<div>
        <h1>Counter :{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        </div>
        )}
        componentDidUpdate(){
            console.log('Component did update')
        }
        componentWillUnmount(){
            console.log('Component will unmount')
            console.log('---------------')
        }
}
export default Counter