import React from 'react'
import './TodoList.scss'

const Task = (props) => {
	const { title, done } = props
	return (
		<div styleName='task-container'>
			<div styleName='check-box'></div>
			<div>{title}</div>
		</div>
	)
}

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
		<div styleName='todo-list card'>
			<div>{todoList.date}</div>
			<ul>
				{todoList.tasks.map(task => <Task {...task} />)}
			</ul>
		</div>
	)
}

export default TodoList

