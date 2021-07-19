import * as React from 'react';
import * as Ant from 'antd';

import TodoItem from '../components/TodoItem';

const LIST_TASK = 'listTask';

const Body = () => {
  const [valueInput, setValueInput] = React.useState('');
  const [listTask, setListTask] = React.useState([]);
  const [isDone, setIsDone] = React.useState(true);
  const [indexEditing, setIndexEditing] = React.useState(null);

  React.useEffect(() => {
    const list = localStorage.getItem(LIST_TASK);
    if (list) {
      setListTask(JSON.parse(list));
    }
  }, []);

  const handleOnClick = () => {
    console.log('handleOnClick');
    if (valueInput.trim()) {
      const list = listTask;
      list.splice(indexEditing, 1, {
        content: valueInput,
        isDone: listTask[indexEditing].isDone,
      });
      localStorage.setItem(LIST_TASK, JSON.stringify(list));
      setListTask(list);
    }
  };

  const handleSaveTask = () => {
    if (valueInput.trim()) {
      const list = [
        ...listTask,
        {
          content: valueInput,
          isDone: true,
        },
      ];
      localStorage.setItem(LIST_TASK, JSON.stringify(list));
      setListTask(list);
    } else {
      setIndexEditing(null);
    }
  };
  // SyntheticBaseEvent
  return (
    <div style={{ padding: '10px 5px' }}>
      <div>
        <Ant.Input
          style={{ width: '50%' }}
          placeholder={indexEditing ? listTask[indexEditing].content : 'Add new task in here'}
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
        />
        {indexEditing ? (
          <>
            <Ant.Button onClick={handleSaveTask} type={'default'}>
              Save
            </Ant.Button>
            <Ant.Button onClick={() => setIndexEditing(null)} type={'dashed'}>
              Cancel
            </Ant.Button>
          </>
        ) : (
          <Ant.Button onClick={handleOnClick} type={'primary'}>
            Add New Task
          </Ant.Button>
        )}
      </div>
      <div>
        {listTask.length ? (
          listTask.map((item, index) => {
            if (indexEditing === index) return null;
            return (
              <TodoItem
                key={index}
                content={item.content}
                isDone={isDone}
                handleIsDone={() => setIsDone(false)}
                handleEdit={() => setIndexEditing(index)}
              />
            );
          })
        ) : (
          <p>No Task</p>
        )}
      </div>
    </div>
  );
};

export default Body;
