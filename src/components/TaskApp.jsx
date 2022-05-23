import React from "react";

import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
import data from "../data/tasks.json"
// import data from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
// console.log(data)

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */} Todolist
      {/* Add Task */} <AddTask
      {...data}/>
      {/* Tasks */}<Tasks />
    </div>
  );
};

export default TaskApp;
