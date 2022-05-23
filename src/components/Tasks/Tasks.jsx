import React from "react";
import styles from "./tasks.module.css";
import data from "../../data/tasks.json"
import Task from "../Task/Task";

const Tasks = (list) => {

  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
      
        <Task
        {...list}/>

      
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
