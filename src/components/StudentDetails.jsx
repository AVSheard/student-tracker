/** @format */

import React, { Component } from "react";
import axios from "axios";

export default class StudentDetails extends Component {
	state = { student: [] };
	//example id = 5e5e2ac1ca5ef400176fb0b1

	getStudent = (id) => {
		axios
			.get(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
			.then((res) => {
				console.log(res.data.student);
				this.setState({ student: res.data.student });
			});
	};

	componentDidMount() {
		const id = "5e5e2ac1ca5ef400176fb0b1";
		this.getStudent(id);
	}

	displayStudentInfo = () => {
		const { student } = this.state;
		return <h2>{student.name}'s block hisory</h2>;
	};

	render() {
		console.log(this.state.student);
		return <div>{this.displayStudentInfo()}</div>;
	}
}
