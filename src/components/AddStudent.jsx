/** @format */

import React, { Component } from "react";

export default class AddStudent extends Component {
	state = { studentName: "", studentStartingCohort: 1 };
	render() {
		return (
			<div>
				<form>
					<label htmlFor="studentName">Student Name:</label>
					<input type="text" id="studentName" />

					<label htmlFor="studentStartingCohort">Starting Cohort:</label>
					<input type="number" id="studentStartingCohort" />

					<button>Add Student</button>
				</form>
			</div>
		);
	}
}
