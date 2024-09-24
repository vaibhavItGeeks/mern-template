import React, { useState } from 'react'
import ButtonComponent from './utiles/Button'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { InputPasswordComponent } from './utiles/InputComponent';
import { CiLock } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createNewpassword } from '../store/Actions/apiActions/apiActions';
const formikSchema = Yup.object().shape({
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
const CreatePassword = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector(state => state.someReducer.isLoading)
  const { id } = useParams()
  const formik = useFormik({
    initialValues: {
      id: id || '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: formikSchema,
    onSubmit: (values) => dispatch(createNewpassword(values)),
  })
  return (
    <div className='w-full h-[100vh] flex items-center justify-center flex-col gap-[20px]'>
      <InputPasswordComponent icon={<CiLock />} showPassword={showPassword} setShowPassword={() => setShowPassword(prev => !prev)} placeholder={'Password'} name={'password'} value={formik?.values?.password} changeHandler={formik.handleChange} errors={formik?.errors?.password} touched={formik?.touched?.password} />
      <InputPasswordComponent icon={<CiLock />} showPassword={showPassword} setShowPassword={() => setShowPassword(prev => !prev)} placeholder={'Confirm Password'} name={'confirmPassword'} value={formik?.values?.confirmPassword} changeHandler={formik.handleChange} errors={formik?.errors?.confirmPassword} touched={formik?.touched?.confirmPassword} />
      <ButtonComponent buttonText={'Save'} handler={formik.handleSubmit} loader={isLoading} bg={'black'} />
    </div>
  )
}

export default CreatePassword