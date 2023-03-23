import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Dashboard from './components/dashboard/Dashboard'

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path='/'>
          <Route index element={<Dashboard/>} />
        </Route>
      </Routes>
    </div>
  </Router>
)

export default App