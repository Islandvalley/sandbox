import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import HelloWorldContainer from '../containers/HelloWorldContainer'
import Test from '../components/Test'

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HelloWorldContainer} />
        <Route path="/test" component={Test} />
      </div>
    )
  }
}
