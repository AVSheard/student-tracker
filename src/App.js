/** @format */

import React from "react";
import "./App.css";
import Header from "./components/Header";
import AllStudents from "./components/AllStudents";
import { Router } from "@reach/router";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Router>
				<AllStudents path="/AllStudents" />
			</Router>
		</div>
	);
};

export default App;
