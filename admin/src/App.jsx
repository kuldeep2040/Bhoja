
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'
function App() {
  const url = "http://localhost:4000";
  return (
   
  <>
  <ToastContainer />
    <Navbar/>
    <hr />
    <div className="app-content">
      <Sidebar/>
    <Routes>
      <Route path='/add' element={<Add url={url} />}/>
      <Route path='/list' element={<List url={url}/>}/>
      <Route path='/orders' element={<Orders/>}/>
    </Routes>
    </div>
    {/* <Sidebar/> */}
    </>
  )
}

export default App
