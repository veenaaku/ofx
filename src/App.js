import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ofxForm from './Form'
import QuickQuote from './QuickQuote'
import './App.css'
import { FormProvider } from './FormContext'

class App extends Component {
  render () {
    return (
      <FormProvider>
        <Router>
          <div className='App'>
            <h1>QuickQuote</h1>
            <Route exact path='/' component={ofxForm} />
            <Route exact path='/quote' component={QuickQuote} />
          </div>
        </Router>
      </FormProvider>
    )
  }
}

export default App
