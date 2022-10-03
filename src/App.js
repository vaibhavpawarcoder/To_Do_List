import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todolist from './TodoList';

function App() {
  const[inputList, setInputList] = useState("");
  const[Iteam, setIteam]=useState([])

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };
  const listOfItem = ()=>{
    setIteam( (oldIeam) =>{
      return [...oldIeam, inputList];
    });
    setInputList('');
    
  };

  const deleteIteam=(id)=>{
    console.log('delete');

    setIteam((oldIeam)=>{
      return oldIeam.filter((arrElem, index)=>{
        return index !== id;
      })
    })
};
  return (
    <div className="App">
      <div className='center_div'>
    <br/>
    <h1>To Do List</h1>
    <br/>
    <input type="text" placeholder='Add a iteam' value={inputList} onChange={itemEvent}/>
    <button onClick={listOfItem}> + </button>
    <ol>
      {/* <li> {inputList}</li> */}
      {
        Iteam.map( (iteamval, index) =>{
        return  <Todolist key={index} id={index} text={iteamval} onSelect={deleteIteam}/>;
        } )
      }
    </ol>
  </div>
    </div>
  );
}

export default App;
