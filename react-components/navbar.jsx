import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {

	
		
	render () {

		var linkElements = this.props.links.map(function (el, index) {
			console.log('El, Index', el, index);
			return <li> { el } </li>;
		})

		return (

			<nav>
				<ul>
					{ linkElements }
				</ul>
			</nav>

		);
	}
};

ReactDOM.render(<NavBar links={[ 'Home', 'About', 'Contact' ]} />, document.getElementById('navigation'));