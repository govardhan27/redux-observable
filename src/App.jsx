import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ping } from './actions/ping';

class App extends Component {

	render() {
		const { pingResult, ping } = this.props;
		const value = pingResult + ' ';
		return (
			<div >
				<h3>is pinging: {value}</h3>
				<button onClick={ping}>
					Start PING
               </button>
			</div>
		);
	}
}

function mapStateToProps({ pingReducer }) {
	return { pingResult: pingReducer.isPinging };
}

export default connect(mapStateToProps, { ping })(App);
