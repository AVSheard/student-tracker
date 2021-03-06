/** @format */

import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import AddStudent from "./AddStudent";

export default class AllStudents extends Component {
	state = { students: [], reverse: 1 };

	sortNames = () => {
		const { reverse } = this.state;
		const toSort = [...this.state.students];
		toSort.sort(function (a, b) {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1 * reverse;
			}
			if (nameA > nameB) {
				return 1 * reverse;
			}
		});
		const reverseReverse = reverse * -1;
		this.setState({ students: toSort, reverse: reverseReverse });
	};

	generateTable = () => {
		const { students } = this.state;
		return (
			<table>
				<thead>
					<tr>
						<th>
							<button onClick={this.sortNames}>Name</button>
						</th>
						<th>Current Block</th>
						<th>Starting Cohort</th>
					</tr>
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
				this.setState({ students: res.data.students });
			});
	};

	componentDidMount() {
		this.getAllStudents();
	}

	addItem = (item) => {
		this.setState(function (curentState) {
			return { students: [item.student, ...curentState.students] };
		});
	};

	render() {
		return (
			<div>
				<AddStudent addItem={this.addItem} />
				{this.state.students && this.generateTable()}
			</div>
		);
	}
}
