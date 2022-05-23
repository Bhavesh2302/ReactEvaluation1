import React from "react";
import styles from "./task.module.css";
import data from "../../data/tasks.json"
import { useState } from "react";
import Counter from "../Counter/Counter"

const Task = (list) => {
  // NOTE: do not delete `data-cy` key value pair
console.log(list)

 
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />

      
      
      <div data-cy="task-text">
      {list.text}
      </div>
      {/* Counter here */}<Counter/>
      <button data-cy="task-remove-button" >Delete</button>
    </li>
  );
};

export default Task;
