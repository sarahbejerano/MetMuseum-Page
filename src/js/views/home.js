import React from "react";
// import { Link, useParams } from "react-router-dom";
// import useSWR from "swr";
// // import { fetcher } from "../fetcher";
import { Card, Button } from "react-bootstrap";

export const Home = () => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the card content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};
