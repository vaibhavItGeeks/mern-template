import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/Actions/apiActions/apiActions';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  // const isLoading = useSelector((state) => state.users.isLoading);
  // const error = useSelector((state) => state.users.error);
  useEffect(() => {
    const users = fetchUsers();
    console.log(users)
  }, [1])
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
