import './User.css'
import Posts from  '../posts/Posts'
export default function User({item: user}) {
	return (<div className={'main'}>
			<h2>
			 	{user.name}
			</h2>
			<br/>
			<Posts item={user.id}/>
			<br/>
	</div>
	);
}
