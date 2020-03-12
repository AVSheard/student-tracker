/** @format */

import React from "react";
import "./App.css";
import Header from "./components/Header";
import AllStudents from "./components/AllStudents";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Navigation />
			<Router>
				<AllStudents path="/AllStudents" />
			</Router>
		</div>
	);
};

export default App;
