/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class AddStudent extends Component {
	state = { studentName: "", studentStartingCohort: 1 };

	handleChange = (text, key) => {
		this.setState({ [key]: text });
	};

	handleSubmit = (res) => {
		res.preventDefault();
		const { studentName, studentStartingCohort } = this.state;
		axios.post("https://nc-student-tracker.herokuapp.com/api/students", {
			studentName,
			studentStartingCohort
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="studentName">Student Name:</label>
					<input
						type="text"
						id="studentName"
						onChange={(res) =>
							this.handleChange(res.target.value, "studentName")
						}
					/>

					<label htmlFor="studentStartingCohort">Starting Cohort:</label>
					<input
						type="number"
						id="studentStartingCohort"
						onChange={(res) =>
							this.handleChange(res.target.value, "studentStartingCohort")
						}
					/>

					<button>Add Student</button>
				</form>
			</div>
		);
	}
}
