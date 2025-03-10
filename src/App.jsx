import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/posts/:post_id' element={<Post/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
