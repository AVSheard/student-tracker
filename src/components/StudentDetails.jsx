/** @format */

import React, { Component } from "react";
import axios from "axios";

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

	displayStudentInfo = () => {
		const { name, blockHistory } = this.state.student;
		return (
			<>
				<h2>{name}'s block hisory</h2>
				<table>
					<th>Block</th>
					<th>Number</th>
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
