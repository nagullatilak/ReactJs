import React , {Component} from 'react' 
class MyClass extends Component{
    constructor(){
        super();
        this.state={
            data :1
        }
    }
    updateData(){
        console.log(this.data)
        if(this.state.data === 10){
           this.setState({data:1})
        }
        else
        this.setState({data : this.state.data+1})
    }
     render(){
        return(
        <div><h1>{this.state.data}</h1>
        <button onClick = {() => this.updateData()}>Update Number</button>
        </div>);
    }
}

export default MyClass