import {useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js'
import List from './Components/List.js'
import MyClass from './Components/MyClass.js';
import OtherComponent from './Components/useStateAdEffect';
import Counter from './Components/Counter';
import App2 from './Components/App2.js'
import Base from './Components/Base'
import { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux'
import Button from './Components/button/button.js'

class App extends Component{
  // const [name,setName] =useState("Tilak")
  // const[count,setCount] = useState(5)
  // const[secondCount,setSecondCount] = useState(1)
  // useEffect(() =>{
  //     setCount(count+1)
  // },[secondCount]);
  render(){
  return (
    <div className="App">
     {/* <Greet name ={name} other ={{address:"Gudivada",mobile : "779800653"}}/>
      {/*<!--<List/>*
      <MyClass/>
      <button onClick = {()=>{setName("Tharun")}}>Update Name</button>
      <MyClass/>
      <OtherComponent count = {count} secondCount = {secondCount}/>
      <button onClick = {()=>{setCount(count+1)}}>Increment</button>
      <button onClick = {()=>{setSecondCount(secondCount+1)}}>Second Count</button>
       <Counter/>
      <App2/>
     {/* <Base/>
      <div>
        <div>Age : <span>{this.props.age}</span></div>
        <button onClick = {this.props.onAgeUp}>Age Up</button>
        <button onClick = {this.props.onAgeDown}>Age Down</button>
      </div>*/}
      <Button label="Click me please"></Button>

     
    </div>
  );
}
}
const mapStateToProps=(state) =>{
  return{
    age:state.age
  }
};
const mapDispachToProps = (dispach)=>{
  return {onAgeUp :()=>dispach({type:'AGE_UP'}),
   onAgeDown :()=>dispach({type:'AGE_DOWN'})
}
}

export default connect( mapStateToProps,mapDispachToProps)(App)
