import './Posts.css';
import Comments from '../comments/Comments';
import {getPosts} from "../../services/api";
import {useEffect, useState} from 'react';
export default function Posts({item: id}){
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts(id).then(value => {
            setPosts([...value.data]);
        });
    }, [id]);
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