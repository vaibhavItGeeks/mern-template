import React from 'react'
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/Actions/apiActions/apiActions';

const Home = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const lohinUser = () => {
    console.log(username, password)
    dispatch(userLogin({ username: username, password: password }))
  }
  return (
    <div>Home
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value
      )} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value
      )} />
      {/* buttun to submit */}
      <button onClick={lohinUser}>submit</button>
    </div>
  )
}

export default Home