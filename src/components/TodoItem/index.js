// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteUser} = props
  const {title, id} = todoList
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
