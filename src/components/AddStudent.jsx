/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class AddStudent extends Component {
	state = { name: "", startingCohort: 1 };

	handleChange = (text, key) => {
		this.setState({ [key]: text });
	};

	handleSubmit = (res) => {
		res.preventDefault();
		const { name, startingCohort } = this.state;
		console.log({ name, startingCohort });
		axios
			.post("https://nc-student-tracker.herokuapp.com/api/students", {
				name,
				startingCohort
			})
			.then(({ data }) => {
				this.props.addItem(data);
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Student Name:</label>
					<input
						type="text"
						id="name"
						onChange={(res) => this.handleChange(res.target.value, "name")}
					/>

					<label htmlFor="startingCohort">Starting Cohort:</label>
					<input
						type="number"
						id="startingCohort"
						onChange={(res) =>
							this.handleChange(res.target.value, "startingCohort")
						}
					/>

					<button>Add Student</button>
				</form>
			</div>
		);
	}
}
