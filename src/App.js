/** @format */

import React from "react";
import "./App.css";
import Header from "./components/Header";
import AllStudents from "./components/AllStudents";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import StudentDetails from "./components/StudentDetails";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Navigation />
			<Router>
				<AllStudents path="/AllStudents" />
				<StudentDetails path="/Student/:id" />
			</Router>
		</div>
	);
};

export default App;
