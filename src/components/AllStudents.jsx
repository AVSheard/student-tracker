/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default class AllStudents extends Component {
	state = { students: [] };

	generateTable = () => {
		const { students } = this.state;
		return (
			<table>
				<thead>
					<th>Name</th>
					<th>Current Block</th>
					<th>Starting Cohort</th>
				</thead>
				<tbody>
					{students.map((student) => {
						return (
							<tr key={student._id}>
								<td>
									<Link to={`/Student/${student._id}`}>{student.name}</Link>
								</td>
								<td>{student.currentBlock}</td>
								<td>{student.startingCohort}</td>
							</tr>
						);
					})}
				</tbody>
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
