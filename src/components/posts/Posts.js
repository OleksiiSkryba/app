import './Posts.css';
import Comments from '../comments/Comments';
import {getAllPosts} from "../../services/api";
import {useEffect, useState} from 'react';
export default function Posts(){
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then(value => {
            setPosts([...value.data]);
        });
    }, []);
    return(<div>{posts &&
            <ol>{posts.map((post, index) =>
                <li key={index}><br/>
                    <summary>{post.title}</summary>
                    <details>{post.body}</details>
                    <Comments item={post.id}/><hr/>
                </li>
            )}
            </ol>}</div>
    )
}