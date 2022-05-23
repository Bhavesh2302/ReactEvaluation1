import React from "react";
import styles from "./addTask.module.css";
import dataa from "../../data/tasks.json"
import { useState } from "react";
import Tasks from "../Tasks/Tasks";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(data)
  const [query, setquery] = useState("")

  const [list, setlist] = useState([])



  const handleData=()=>{

    console.log("Hello")

    setlist(...list,dataa)
    return(
    <Tasks {...list}/>
    )




  }



  const handleChange=(e)=>{
// if(e.target.value==""){
//   return
// }
setquery(e.target.value)

  }



  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" query={query} onChange={handleChange} />
      <button data-cy="add-task-button" onClick={handleData}
    >Add</button>
      <div>{list.map((item)=>(
<Tasks {...item}/>
      ) )}
      </div>
    </div>
  );
};

export default AddTask;
