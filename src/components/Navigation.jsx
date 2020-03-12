/** @format */

import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
	return (
		<ul>
			<li>
				<Link to="">Home</Link>
			</li>
			<li>
				<Link to="AllStudents">All Students</Link>
			</li>
		</ul>
	);
};

export default Navigation;
