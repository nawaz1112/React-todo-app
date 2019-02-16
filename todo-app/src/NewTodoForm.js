import React from 'react';
import './index.css';
const NewTodoForm = (props) => {
  return (
   
      <form onSubmit={props.formSubmitted}>
  <div className="form-group">
    <h2 htmlFor="newTodo" className="text-center">New Todo</h2>
    <input onChange={props.newTodoChanged} className="form-control" id="newTodo"  name="newTodo" value={props.newTodo}/>
  </div>  
  <button type="submit" className="btn btn-outline-success btn-block">Add Todo</button>
</form>   
   
    
    
  )
};

export default NewTodoForm;
