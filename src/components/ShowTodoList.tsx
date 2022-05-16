import { useState } from 'react'

export const ShowTodoList = ({
  itemTodoList,
  searchItemTodoList,
  setItemTodoList,
  onEdit,
  onEditOk,
  onEditCancel,
}) => {
  const [input, setInput] = useState('')

  const onClickBtnDelete = (value) => {
    const newValue = itemTodoList.filter(
      (item) => itemTodoList.indexOf(item) != itemTodoList.indexOf(value)
    )
    setItemTodoList(newValue)
  }

  const filterSearch = itemTodoList.filter((item) => {
    return item.value.indexOf(searchItemTodoList) !== -1
  })

  const onClickBtnEdit = (value) => {
    onEdit(value)
  }

  const inputChange = (event) => {
    setInput(event.target.value)
  }

  const onClickBtnOk = (value) => {
    onEditOk({
      id: value.id,
      value: input,
    })
  }

  const onClickBtnCancel = (value) => {
    onEditCancel(value)
  }
  return (
    <>
      {filterSearch.map((item) => (
        <div className="flex justify-center" key={item.id}>
          <div className="card w-96 bg-neutral text-neutral-content ">
            <div className="card-body items-center text-center">
              {item.isEdit === true ? (
                <div>
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Text Here"
                    onChange={inputChange}
                  />
                  <button
                    className="btn btn-outline btn-info"
                    onClick={() => onClickBtnOk(item)}
                  >
                    O
                  </button>
                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => onClickBtnCancel(item)}
                  >
                    X
                  </button>
                </div>
              ) : (
                <p>{item.value}</p>
              )}
              <div className="card-actions">
                <button
                  className="btn btn-active btn-accent"
                  onClick={() => onClickBtnEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    onClickBtnDelete(item)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
