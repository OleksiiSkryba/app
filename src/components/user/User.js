import './User.css'
import UserPosts from  '../user-posts/UserPosts';
export default function User({item: user}) {
	return (<div className={'main'}>
			<h2>
			 	{user.name}
			</h2>
			<br/>
			<UserPosts item={user.id}/>
			<br/>
	</div>
	);
}
