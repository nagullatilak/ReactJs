import React,{Component} from 'react'
import Counter  from './Counter'
class App2 extends Component{
    constructor(props){
        super(props)
        this.state={
            mount : true
        }
        this.mountCounter=()=>this.setState({mount: true})
        this.unmuntCounter=()=>this.setState({mount: false})
    }
    render(){
        return(
            <div>
            <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
            <button onClick={this.unmuntCounter} disabled={!this.state.mount}>UnMount Counter</button>
            {this.state.mount?<Counter/>:null}
        </div>)
    }
}
export default App2