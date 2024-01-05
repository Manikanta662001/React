import React,{Suspense, lazy} from 'react';
import './App.css';
// import About from './components/About';
import Contact from './components/Contact';
import Content from './components/Content';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import Nopage from './components/Nopage';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import Searchquery from './components/Searchquery';
import Protected from './components/Protected';
import { useState } from 'react';
import Profile from './components/Profile';
import Lock from './components/Lock';
const About = lazy(()=>import('./components/About'))

function App() {
  const [islogedin,setislogedin] = useState(true)
  console.log(islogedin,"Login")
  return (
    <div className="App">
      
      <Header/>
      <button onClick={()=>setislogedin(!islogedin)}>{islogedin?'LOGOUT':'LOGIN'}</button>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/about' element={
          <Suspense fallback={()=><div>loading.....</div>}>
            <About/>
          </Suspense>
        }/>
        <Route path='/contact' element={<Contact/>}>
          <Route path='lock' element={<Lock/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userdetails/:id/:name' element={<UserDetails/>}/>
        <Route path='/searchquery' element={<Searchquery/>}/>
        <Route path='/profile' element={
          <Protected login={islogedin}>
              <Profile/>
          </Protected>
        }/>
        <Route path='*' element={<Nopage/>}/>
      </Routes>
    </div>
  );
}

export default App;
