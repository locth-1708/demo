const TodoItem = (props) => {
  return (
    <div>
      <span>{props.content}</span>
      <span>
        {props.isDone && <button onClick={props.handleIsDone}>isDone</button>}
        <button onClick={props.handleEdit}>Edit</button>
        <button
          onClick={() => {
            const isDelete = window.confirm('bạn mún xóa thật à???');
            console.log('TodoItem ~ isDelete', isDelete);
            if (isDelete) {
              return alert('bạn đã xóa thành công');
            }
          }}
        >
          Delete
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
