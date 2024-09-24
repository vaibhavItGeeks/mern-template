import React, { useState } from 'react'
import { CiMail } from 'react-icons/ci'
import ButtonComponent from './utiles/Button';
import { useDispatch, useSelector } from 'react-redux';
import { forgotpassword } from '../store/Actions/apiActions/apiActions';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.someReducer.isLoading)
    const handleForgotPassword = async () => {
        dispatch(forgotpassword(email))
    }
    return (
        <div className='w-full h-[100vh] flex items-center justify-center flex-col gap-[20px]'>
            <div className='bg-gray-100 p-[10px] w-1/2 flex items-center gap-[10px] font-bodyFont relative'>
                <div className='text-gray-700'><CiMail /></div>
                <input type='text' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                    className='bg-gray-100 outline-none text-[14px] w-full ' />
            </div>
            <ButtonComponent buttonText={'Save'} handler={handleForgotPassword} loader={isLoading} bg={'black'} />
        </div>
    )
}

export default ForgotPassword