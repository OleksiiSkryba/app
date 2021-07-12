import './App.css';
import {useState} from 'react';
import Users from './components/users/Users';
import User from "./components/user/User";
export default function App() {
  let [user, setUser] = useState({});
  return (
      <div className={'App'}>
          <h1 className={'header'}>hw2</h1>
        <Users setUser={setUser}/>
          <User item={user}/>

      </div>
  );
}

