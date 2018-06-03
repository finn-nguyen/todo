// @flow

import React from 'react'
import './App.scss'

type SampleProps = {
  text: string
}

const Sample = (props: SampleProps) => {
  const { text } = props
  return <div>{text}</div>
}

class App extends React.Component<void> {
  render () {
    return (
      <div styleName='App'>
        <header styleName='App-header'>
          <img src='/images/logo.svg' styleName='App-logo' alt='logo' />
          <h1 styleName='App-title'>Welcome to React</h1>
        </header>
        <p styleName='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Sample text='Hello World' />
      </div>
    )
  }
}

export default App
