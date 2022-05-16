import { useState } from 'react'

export const AddTodoList = ({ onAddTodoList }) => {
  
  const [inputValue, setInputValue] = useState('')

  const onHandelChangeInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const onClickBtnAddTodo = () => {
    onAddTodoList(inputValue)
    setInputValue('')
  }

  return (
    <div className="flex justify-center">
      <div className="form-control">
        <label className="label">
          <span className="label-text">To Do List</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            className="input input-bordered"
            placeholder="Text Here"
            value={inputValue}
            onChange={onHandelChangeInputValue}
          />
          <button className="btn btn-primary" onClick={onClickBtnAddTodo}>
            Add To Do
          </button>
        </label>
      </div>
    </div>
  )
}
