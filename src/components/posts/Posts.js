import './Posts.css';
import {useEffect, useState} from 'react';
import Comments from '../comments/Comments';
export default function Posts({item: id}){
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(postsfromServer => {
                setPosts(postsfromServer);
            });
    }, []);
    let [toggle, setToggle] = useState('hide');

    return(<div>
    <button onClick={() => {
        // console.log('Click!');
        if (toggle === 'show'){
            setToggle('hide')
        }else if (toggle === 'hide'){
            setToggle('show')
        }
    }
    }>Posts</button>
    <ol className={toggle}>{posts.map((post, index)=>
        <li key={index}><summary>{post.title}</summary>
            <details>{post.body}</details>
            <Comments item={post.id}/>
            <hr/>
        </li>
    )}
    </ol>
    </div>
    )
}