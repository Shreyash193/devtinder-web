import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './Login';
import Profile from './Profile';
import Body from './Body';

function App() {
  

  return (
    <>
      <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
   
      <h1 className='text-3xl font-bold text-cyan-700'>Hello World</h1>
    </>
  )
}

export default App
