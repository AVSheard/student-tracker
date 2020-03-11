/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class AllStudents extends Component {
	state = { students: [] };
	componentDidMount() {
		axios
			.get("https://nc-student-tracker.herokuapp.com/api/students")
			.then((res) => {
				console.log(res.data.students);
				this.setState({ students: res.data.students });
			});
	}
	render() {
		const { students } = this.state;
		return (
			<div>
				{students && (
					<table>
						<th>Name</th>
						<th>Current Block</th>
						<th>Starting Cohort</th>
						{students.map((student) => {
							return (
								<tr key={student._id}>
									<td>{student.name}</td>
									<td>{student.currentBlock}</td>
									<td>{student.startingCohort}</td>
								</tr>
							);
						})}
					</table>
				)}
			</div>
		);
	}
}
