import React, { createContext } from "react";

export const TaskListContext = createContext([]);

const TaskListContextProvider = (props) => {
  const [WishList, setWishlist] = React.useState([]);

  // Add tasks
  const addTask = (title) => {
    setWishlist(title);
  };

  return (
    <TaskListContext.Provider
      value={{
        WishList,
        addTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
