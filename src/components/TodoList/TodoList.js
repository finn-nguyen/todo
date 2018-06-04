import React from 'react'
import './TodoList.scss'


const TodoList = () => {
	const todoList = {
		date: '05/06/2018',
		archived: false,
		tasks: [
			{ title: 'Listen english in 1 hour', done: false },
			{ title: 'Read 1 chapter of Sapiens', done: false },
			{ title: 'Study 5 new words', done: false },
			{ title: 'Do exercise', done: false }
		]
	}
	return (
		<div>
			{todoList.map(item) => {
				return (
					<div>{item.date}</div>
					<ul>
						{item.tasks.map(task => <li>{task.title} - {task.done}</li>)}
					</ul>
				)
			}}
		</div>
	)
}

export default TodoList

