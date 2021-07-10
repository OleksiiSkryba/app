import {useEffect, useState} from 'react';

export default function Comments({item: postId}) {
    // console.log(postId);

    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(value => value.json())
            .then(commentsfromServer => {
                setComments(commentsfromServer);
            });
    }, []);
    let [toggle, setToggle] = useState('hide');
        return (
            <div>
            <button onClick={() => {
                if (toggle === 'show'){
                    setToggle('hide')
                }else if (toggle === 'hide'){
                    setToggle('show')
                }
            }
            }>Comments</button>
              <ol className={toggle}>{comments.map((comment, index) =>
                <li key={index}>{comment.email}
                    <summary>{comment.name}</summary>
                    <details>{comment.body}</details>
                    <hr/>
                </li>
            )}</ol>
        </div>)
}
