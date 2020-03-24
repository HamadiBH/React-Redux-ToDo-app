import React, { Component } from 'react'
import {connect} from "react-redux"
import{addTodo,deleteTodo,switcher} from"../actions/actions"

class Form extends Component {


    state = {
        inputValue: '',
        
    };


    onChange = (event) => {
        this.setState({
            
            inputValue: event.target.value
        });
        
    }

    handleAdd=()=>{

        if (this.state.inputValue.length){
            
            this.props.addTodo({
            
                name:this.state.inputValue,
            
                id:Math.random(),
            
                isComplete:false
            })

            this.setState({
                inputValue:''
            })
        }

        else {
                alert("Add ToDo!");
        }
    }



    

    render() {
        return (


            <div>
                <div id='todoform'>
                    <div className="hdl">
                        <h1>ToDo List</h1>
                        <h3>Add New ToDo</h3>
                        <input id="newinpt" placeholder="New ToDo..." type="text" onChange={this.onChange} value={this.state.inputValue} />
                        <button id="inpt"  onClick={this.handleAdd} >Add</button>
                    </div>
                </div>

                <div id="lst">

                <h2>DO IT!</h2>
                <div id="tasklist">
      

{
                  this.props.todoItems.map((item, i) => 
       
                    <div className="card" key={item.id}>  
                         
                        <h3 className={item.isComplete? 'linetgh':'inpttxt'}>{item.name}</h3>
                        <div className='btns'>
                            <button className='cmplt' onClick={()=>this.props.switcher(item.id)}>{item.isComplete ?'Undo':'Complete'}</button>
                            <button className='dlt' onClick={()=>this.props.deleteTodo(item.id)}>Delete</button>
                        </div>
                    </div> 
                  )
}
            
        
       
                </div>
            </div>
                
            </div>
        )
    }
}


const mapStateToProps=state=>{
    return{ todoItems:state}
}

const mapDispatchToProps=dispatch=>{
    return { addTodo:(payload)=>dispatch(addTodo(payload)),
        deleteTodo:(payload)=>dispatch(deleteTodo(payload)),
        switcher:(payload)=>dispatch(switcher(payload))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)  (Form)