import React, {useState} from 'react'
const List = () => {
    const [task, setTask] = useState([
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ])

    return (
        <div>
            {
                task.map((item) => {
                    return (
                        <p key={item.id}>{
                            item.task
                        }</p>
                    )
                })
            }
        </div>
    )
}

export default List;