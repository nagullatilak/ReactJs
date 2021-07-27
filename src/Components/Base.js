import React , {Component} from 'react' 
import Employee  from './Employee';
class Base extends Component{
    constructor(){
        super();
        this.state={
            employee : [
                {name : "Tilak",exp : 2},
                {name : "Tharun",exp : 3}
            ]
            }
        }
        updateState=()=>{
            this.setState({
                employee : [
                    {name : "TilakUpdated",exp : 2},
                    {name : "TharunUpdated",exp : 3}
                ]
            })
        }
        render(){
            return(
                <div>
                <Employee name ={this.state.employee[0].name}    exp ={this.state.employee[0].exp}/>
                <Employee name ={this.state.employee[1].name}    exp ={this.state.employee[1].exp}/>
                <button onClick={this.updateState}>Update State</button>                
                </div>
            )
        }
    }
    export default Base