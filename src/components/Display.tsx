import { AddTodoList } from '@/components/AddToDo'
import { useState } from 'react'
import { ShowTodoList } from '@/components/ShowTodoList'
import { SearchItemTodoList } from '@/components/SearchItemTodoList'

export const Display = () => {
  const [itemTodoList, setItemTodoList] = useState([])
  const [searchItemTodoList, setSearchItemTodoList] = useState('')

  const onAddTodoList = (value) => {
    const data = {
      id: Math.floor(Math.random() * 10000) + 1,
      isEdit: false,
      value,
    }
    setItemTodoList([data, ...itemTodoList])
  }

  const onClickBtnClearTodoList = () => {
    setItemTodoList([])
  }

  const onSearchItemTodoList = (value) => {
    if (value) {
      setSearchItemTodoList(value)
    } else {
      setSearchItemTodoList('')
    }
  }

  const onEdit = (value) => {
    setItemTodoList(
      itemTodoList.map((item) => {
        if (item.id === value.id) {
          return {
            ...item,
            isEdit: true,
          }
        }
        return item
      })
    )
  }

  const onEditCancel = (value) => {
    setItemTodoList(
      itemTodoList.map((item) => {
        if (item.id === value.id) {
          return {
            ...item,
            isEdit: false,
          }
        }
        return item
      })
    )
  }

  const onEditOk = (value) => {
    setItemTodoList(
      itemTodoList.map((item) => {
        if (item.id === value.id) {
          return {
            ...item,
            value: value.value,
            isEdit: false,
          }
        }
        return item
      })
    )
  }

  return (
    <div className="bg-base-100 py-12">
      <AddTodoList onAddTodoList={onAddTodoList} />
      {itemTodoList.length > 0 ? (
        <div>
          <SearchItemTodoList onSearchItemTodoList={onSearchItemTodoList} />
          <ShowTodoList
            itemTodoList={itemTodoList}
            searchItemTodoList={searchItemTodoList}
            setItemTodoList={setItemTodoList}
            onEdit={onEdit}
            onEditOk={onEditOk}
            onEditCancel={onEditCancel}
          />
          <div className="mt-6 flex justify-center">
            <button
              className="btn btn-outline btn-secondary"
              onClick={onClickBtnClearTodoList}
            >
              Clear TodoList
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
