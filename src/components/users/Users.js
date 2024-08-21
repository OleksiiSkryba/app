import {useEffect, useState} from 'react';
// import User from '../user/User';
import {getUsers} from "../../services/api";

export default function Users({setUser}) {

	let [users, setUsers] = useState([]);
	useEffect(() => {
		getUsers().then(value => {
				setUsers([...value.data]);
			});
	}, []);

	return (
		<div >
			{
				users.map((user, index) =>
					<button key={index} onClick={()=>{setUser(user)}}>
						{user.name}
					</button>
				)
			}
		</div>
	);
}
