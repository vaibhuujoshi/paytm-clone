import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import Appbar from './components/Appbar';

function App() {
    return (
        <div className='bg-linear-to-b from-black to-[#001831] w-full min-h-screen text-mariner-50 flex flex-col p-8 md:p-16 font-inter md:items-center'>
            <BrowserRouter>
                <Routes>
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/send' element={<SendMoney />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App