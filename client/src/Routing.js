import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from './components/LoginSignup'
import Home from './components/Home'
import Header from './components/common/Header'
const Routing = () => {
    return (
        <>
            <Toaster />
            <div className='flex flex-col gap-[15px] relative'>
                <Header/>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/loginsignup' element={<LoginSignup />} />
            </Routes>
        </>
    )
}

export default Routing