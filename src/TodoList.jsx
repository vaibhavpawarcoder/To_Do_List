import React from "react";

const Todolist =(props) =>{

   
    return (
    <>
    <div className="todo_style">
    <i className="bi bi-x-lg" id='x' onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    <li id="li"> {props.text}</li>
    <br/>
    <br/>
    </div>
    
    </>
    );
}

export default Todolist;