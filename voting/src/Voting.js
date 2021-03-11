import React, { Component } from 'react';
import {Vote} from './Vote'

export class Voting extends Component {

	state = {language_list: ["JavaScript", "Python", "Go", "Java", "TypeScript", "Ruby", "Elixir"]}

	incrementCount = () => {
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		return (
			<div className="languages"> <h1>Vote for a language</h1>
				{ this.state.language_list.map(language => (<Vote name={language} />))}
			</div>

		);
	}
}