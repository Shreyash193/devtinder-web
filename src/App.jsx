import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './Login';
import Profile from './Profile';
import Body from './Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './Feed';
import Connections from "./Connections";
import Requests from "./Requests";

function App() {
  

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
        <Route path='/' element={<Feed/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/connections' element={<Connections/>}></Route>
        <Route path='/requests' element={<Requests/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
      
    </>
  )
}

export default App;