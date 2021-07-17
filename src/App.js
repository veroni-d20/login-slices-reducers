import './App.css';
//import { selectUser } from './slice/loginSlice';
import Logout from './components/Logout';
import Login from './components/Login';
import {useSelector} from 'react-redux';

function App() {
  //const user = useSelector(selectUser);
  const {user} = useSelector((state) => state.logReducer);
  return (
    <div>{user?<Logout/>:<Login/>}</div>
    //<Login/>
  );
}

export default App;
