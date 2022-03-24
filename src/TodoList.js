import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [item, setItem] = useState('')
    const [itemList, setItemList] = useState([])

    const addItem = () => {
        if (!item) {

        } else {
            setItemList([...itemList, item])
            setItem('')
        }
    }

    const remove = (id) => {
        const updatedItemList = itemList.filter((ele, ind) => ind !== id)
        setItemList(updatedItemList)
    }

    return (
        <>
            <div className='todo'>
                <div className='todoHeader'>
                    <h1>Todo List!</h1>
                    <p>A Simple React Todo List App.</p>
                </div>
                {itemList.map((currEle, ind) => {
                    return (
                        <div className='todoItem' key={ind}>
                            {currEle}
                            <i class="fa-solid fa-trash" onClick={() => remove(ind)}></i>
                        </div>
                    )
                })}
                <div className='todoInput'>
                    <p>New Todo</p>
                    <input type='text' placeholder="New Todo" value={item} onChange={(e) => setItem(e.target.value)} />
                    <button className='addTodo' onClick={addItem}>ADD TODO</button>
                </div>
            </div>
        </>
    )
}

export default TodoList;