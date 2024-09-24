import React, { useState } from 'react'
import ButtonComponent from './utiles/Button'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { InputPasswordComponent, InputTextComponent } from './utiles/InputComponent';
import { CiLock, CiMail } from 'react-icons/ci';
import { useSelector } from 'react-redux';
const formikSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required.')
    .email('Invalid email address.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password must be at least 8 characters long.')
    .max(30, 'Password must be less than 30 characters long.')
    .test('has-lowercase', 'Password must contain at least one lowercase letter.', value => /[a-z]/.test(value))
    .test('has-uppercase', 'Password must contain at least one uppercase letter.', value => /[A-Z]/.test(value))
    .test('has-number', 'Password must contain at least one number.', value => /\d/.test(value))
    .test('has-special-char', 'Password must contain at least one special character.', value => /[@$!%*?&]/.test(value)),
  confirmPassword: Yup.string()
    .required('Please confirm your password.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
});
const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector(state => state.someReducer.isLoading)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: formikSchema,
    onSubmit: (values) => console.log(values),
  })
  return (
    <div className='w-full h-[100vh] flex items-center justify-center flex-col gap-[20px]'>
      <div className='bg-gray-100 p-[10px] w-1/2 flex items-center gap-[10px] font-bodyFont relative'>
        <div className='text-gray-700'><CiMail /></div>
        <input type='text' placeholder='Email' name='email' value={formik?.values?.email} onChange={formik.handleChange}
          className='bg-gray-100 outline-none text-[14px] w-full ' />
        {formik?.errors?.email && formik?.touched?.email && <p className='absolute text-[10px] bottom-[-4px] text-red-400'> {formik?.errors?.email}</p>}
      </div>
      <InputPasswordComponent icon={<CiLock />} showPassword={showPassword} setShowPassword={() => setShowPassword(prev => !prev)} placeholder={'Password'} name={'password'} value={formik?.values?.password} changeHandler={formik.handleChange} errors={formik?.errors?.password} touched={formik?.touched?.password} />
      <InputPasswordComponent icon={<CiLock />} showPassword={showPassword} setShowPassword={() => setShowPassword(prev => !prev)} placeholder={'Confirm Password'} name={'confirmPassword'} value={formik?.values?.confirmPassword} changeHandler={formik.handleChange} errors={formik?.errors?.confirmPassword} touched={formik?.touched?.confirmPassword} />
      <ButtonComponent buttonText={'Save'} handler={formik.handleSubmit} loader={isLoading} bg={'black'} />
    </div>
  )
}

export default ForgotPassword