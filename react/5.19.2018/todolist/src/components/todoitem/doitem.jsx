import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import ToDoList from '../todolist/todolist';


const ToDoItem = ({items, deleteItems}) => {
    const taskArr = items.map((item) =>
        <li key={item.id} data-id={item.id}>{item.text}</li>
    );

    return (
        <ul className="theList" onClick={deleteItems}>
            <FlipMove>
                {taskArr}
                </FlipMove>
        </ul>
    )
};

ToDoItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
  })),
    deleteItems: PropTypes.func,
};

export default ToDoItem;