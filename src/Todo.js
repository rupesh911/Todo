import React, { useState } from 'react'

function Todo() {
    const [activity, setActivity] = useState("")
    const [list, setList] = useState([])
    function addActivity() {
        setList((list) => {
            const updatedList = [...list, activity]
            console.log(updatedList)
            setActivity('')
            return updatedList

        })


    }
    function removeActivity(i) {
        const updatedListData = list.filter((elem, id) => {
            return i != id

        })
        setList(updatedListData)
    }
    function removeall() {
        setList([])
    }
    return (
        <>
            <div className='container'>
                <div className="header">Todo List</div>
                <input type="text" placeholder='List Name' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p> all list</p>
                {
                    list != [] && list.map((data, i) => {
                        return (

                            <>
                                <p key={i}>
                                    <div>{data}</div>
                                    <div>
                                        <button onClick={() => removeActivity(i)}>remove</button>
                                    </div>



                                </p>
                            </>
                        )

                    })
                }
                {list.length >= 1 &&
                    <button onClick={removeall}>Remove All</button>}
            </div>
        </>
    )
}

export default Todo