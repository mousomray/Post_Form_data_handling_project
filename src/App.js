import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import AddUser from './Components/Adduser'
import Showuser from './Components/Showuser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <ToastContainer />
            
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<AddUser />} />
                    <Route path='/showuser' element={<Showuser />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
