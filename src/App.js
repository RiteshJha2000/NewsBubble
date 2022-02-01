
import './App.css';

import React,{useState} from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import About from './component/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = (props) => {

  const [progress, setprogress] = useState(0)
  
  const page=5;
  const api=process.env.REACT_APP_NEWS_API;

    return (
      <div>
        <Router>
         
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        {/* <News  setprogress={setprogress} api={api}    key="home" pagesize={page} country="in" category="general"/> */}
        <Routes>
          <Route exact path="/" element = {<News  setprogress={setprogress} api={api}    key="home" pagesize={page} country="in" category="general"  badge="primary"/>}></Route>
          <Route exact path="/About" element = {<About setprogress={setprogress} />}></Route>
          <Route exact path="/business" element = {<News  setprogress={setprogress} api={api}    key="business" pagesize={page} country="in" category="business" badge="success"/>}></Route>
          <Route exact path="/entertainment" element = {<News  setprogress={setprogress} api={api}    key="entertainment" pagesize={page} country="in" category="entertainment" badge="danger"/>}></Route>
          <Route exact path="/general" element = {<News  setprogress={setprogress} api={api}    key="general" pagesize={page} country="in" category="general" badge="warning"/>}></Route>
          <Route exact path="/health" element = {<News  setprogress={setprogress} api={api}    key="health" pagesize={page} country="in" category="health"  badge="info"/>}></Route>
          <Route exact path="/science" element = {<News  setprogress={setprogress} api={api}    key="science" pagesize={page} country="in" category="science"  badge="success"/>}></Route>
          <Route exact path="/sports" element = {<News  setprogress={setprogress} api={api}    key="sports" pagesize={page} country="in" category="sports"  badge="warning"/>}></Route>
          <Route exact path="/technology" element = {<News  setprogress={setprogress} api={api}    key="technology" pagesize={page} country="in" category="technology"  badge="danger"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App

