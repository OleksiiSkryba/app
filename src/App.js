import './App.css';
import {useState} from 'react';
import Contenteditable from './components/contenteditable/Contenteditable';
import Users from './components/users/Users';
import User from "./components/user/User";

export default function App() {

  let [user, setUser] = useState({});

  const [content, setContent] = useState("foo");
  // const [value, setValue] = useState("I am edittable");
  // const onChange = (e) => {
  //   const html = e.target.innerHTML;
  //   setValue(html);
  // };

  return (
      <div className={'App'}>
              <Contenteditable
                value={content}
                onChange={(updatedContent) => {
                  setContent(updatedContent);
                }}
              />
          {/* <h1 className={'header'}onChange={onChange} contentEditable>{value}</h1> */}
        <Users setUser={setUser}/>
          <User item={user}/>

      </div>
  );
}

