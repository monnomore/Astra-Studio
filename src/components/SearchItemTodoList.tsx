export const SearchItemTodoList = ({ onSearchItemTodoList }) => {
  const onHandleSearchItemTodoList = (event) => {
    onSearchItemTodoList(event.target.value)
  }
  return (
    <div className="my-8 flex justify-center">
      <input
        type="text"
        placeholder="Search Todo Here!!"
        className="input input-bordered input-info w-full max-w-xs"
        onChange={onHandleSearchItemTodoList}
      />
    </div>
  )
}
