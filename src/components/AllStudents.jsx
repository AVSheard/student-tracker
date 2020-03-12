/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class AllStudents extends Component {
	state = { students: [] };

	generateTable = () => {
		const { students } = this.state;
		return (
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
		);
	};

	getAllStudents = () => {
		axios
			.get("https://nc-student-tracker.herokuapp.com/api/students")
			.then((res) => {
				console.log(res.data.students);
				this.setState({ students: res.data.students });
			});
	};

	componentDidMount() {
		this.getAllStudents();
	}

	render() {
		return <div>{this.state.students && this.generateTable()}</div>;
	}
}
