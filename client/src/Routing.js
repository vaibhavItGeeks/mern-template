import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useLocation } from 'react-router-dom'
import LoginSignup from './components/LoginSignup'
import Home from './components/Home'
import Header from './components/common/Header'
import ForgotPasswordNew from './components/ForgotPassword'
import ForgotPassword from './components/CreatePassword'
const Routing = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/loginsignup'
    const isForgot = location.pathname === '/forgotpassword'
    return (
        <>
            <Toaster />
            {!isLoginPage && !isForgot && <div className='flex flex-col gap-[15px] relative'>
                <Header />
            </div>}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/loginsignup' element={<LoginSignup />} />
                <Route path='/forgotpassword' element={<ForgotPasswordNew />} />
                <Route path='/create-password/:id' element={<ForgotPassword />} />
            </Routes>
        </>
    )
}

export default Routing