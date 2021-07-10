import {useEffect, useState} from 'react';
import Posts from  '../posts/Posts'
export default function User({item: user}) {
let {id, name} = user;
	return (
		<div>
			<br/>
            {id} - {name}
			<hr/>
            <Posts item={id}/>
		</div>
	);
}
