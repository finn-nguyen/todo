// @flow

import React from 'react'
import TodoList from 'components/TodoList'
import './App.scss'

class App extends React.Component<void> {
  render () {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default App
