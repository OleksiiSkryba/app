import './App.css';
import {useState} from 'react';
import Users from './components/users/Users';
import User from "./components/user/User";

export default function App() {

  let [user, setUser] = useState({});

  const [value, setValue] = useState("I am edittable");
  const onChange = (e) => {
    const html = e.target.innerHTML;
    setValue(html);
  };

  return (
      <div className={'App'}>
          <h1 className={'header'}onChange={onChange} contentEditable>{value}</h1>
        <Users setUser={setUser}/>
          <User item={user}/>

      </div>
  );
}

