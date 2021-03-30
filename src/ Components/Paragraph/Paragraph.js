import s from './paragraph.module.css';

const Paragraph = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className={s.todo}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

export default Paragraph