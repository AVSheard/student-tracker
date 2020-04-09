/** @format */

import React, { Component } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default class StudentDetails extends Component {
	state = { student: {} };

	getStudent = (id) => {
		axios
			.get(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
			.then((res) => {
				this.setState({ student: res.data.student });
			})
			.catch((err) => console.dir(err));
	};

	componentDidMount() {
		this.getStudent(this.props.id);
	}

	removeStudent = (id) => {
		axios
			.delete(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
			.then((res) => {
				navigate("../AllStudents");
			});
	};

	displayStudentInfo = () => {
		const { name, blockHistory } = this.state.student;
		return (
			<>
				<h2>{name}'s block hisory</h2>
				<button onClick={() => this.removeStudent(this.props.id)}>
					Remove Student
				</button>
				<table>
					<thead>
						<tr>
							<th>Block</th>
							<th>Number</th>
						</tr>
					</thead>
					<tbody>
						{blockHistory.map((block) => {
							return (
								<tr key={block._id}>
									<td>{block.name}</td>
									<td>{block.number}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</>
		);
	};

	render() {
		return (
			<div>{this.state.student.blockHistory && this.displayStudentInfo()}</div>
		);
	}
}
