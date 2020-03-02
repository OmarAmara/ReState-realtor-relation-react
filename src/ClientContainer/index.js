import React from 'react'
import { Link } from 'react-router-dom';
import { Segment } from  'semantic-ui-react'

import RealtorList from './RealtorList'

export default function ClientContainer(props) {


	const links = { width: 250, height: 200 }

	return(
		<React.Fragment>
			<Link>
				<Segment circular style={links}>
					<h1>{props.loggedInUser.firstName}'s Profile</h1>
				</Segment>
			</Link>
			<Link to='/clients/realtor-list'>
				<Segment circular size='large' style={links} >
						<h1>(works)Realtor List</h1>
				</Segment>
			</Link>
			<Link>
				<Segment circular style={links}>
					<h1>{props.loggedInUser.firstName}'s Searches!</h1>
				</Segment>
			</Link>
			<Link>
				<Segment circular style={links}>
					<h2>Navigate Area Here</h2>
				</Segment>
			</Link>
			<Link>
				<Segment circular style={links}>
					<h3>Navigate Here</h3>
				</Segment>
			</Link>
		</React.Fragment>
	)
}