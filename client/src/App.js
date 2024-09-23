import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/Actions/apiActions/apiActions';
function App() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.someReducer.users);
  const isLoading = useSelector((state) => state.someReducer.isLoading);
  const error = useSelector((state) => state.someReducer.error);
  useEffect(() => {
    dispatch(fetchUsers())
  }, [1])

  return (
    <div className="bg-rose-400">
      <header className="text-[100px]">
        MERN TEMPLATE
      </header>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-rose-600" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : (
        usersData?.map((user) => (
          <p key={user._id}>{user.name}</p>
        ))
      )}
    </div>
  );
}

export default App;
