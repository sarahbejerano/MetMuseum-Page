import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";

export const home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
