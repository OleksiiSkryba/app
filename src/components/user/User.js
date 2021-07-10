import {useEffect, useState} from 'react';

export default function User({item: user}) {
	// let {item: user} = props;
// let id = user.id;
	let [posts, setPosts] = useState([]);


	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
			.then(value => value.json())
			.then(postsfromServer => {
				setPosts(postsfromServer);
			});
	}, []);
	//
	// console.log(user);
	// console.log(posts);
	return (
		<div>
			<br/>

			{user.id} - {user.name}
			<hr/>
			<ol>
			{posts.map(post =>
					// <User item={user}/>
						<li>
							{post.title} - {post.body}
						</li>
				)}
		    </ol>
		</div>
	);
}
