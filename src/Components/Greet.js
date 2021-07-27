import React from 'react'
function Greet(props){
    return (<div style={{backgroundColor : "skyblue"}}>
    <h1>Hello {props.name} </h1>
    <h1>{props.other.address} </h1>
    </div>)
}
export default Greet