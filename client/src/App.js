import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/Actions/apiActions/apiActions';
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  
  // const isLoading = useSelector((state) => state.users.isLoading);
  // const error = useSelector((state) => state.users.error);
  useEffect(() => {
   const users= fetchUsers();
   console.log(users)
  }, [1])
  console.log(users)
  return (
    <div className="bg-rose-400">
      <header className="text-[100px]">
        MERN TEMPLATE
      </header>
      {/* {users?.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))} */}
    </div>
  );
}

export default App;
