import React from "react";
// import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/photography.scss";
import { ImageCard } from "../component/card";
import { Row, Col, Container, Carousel, Navbar } from "react-bootstrap";

export const Photography = () => {
	// TODO: remplazar por swr Infinite
	const { data: pieceFour, isValidatingFour } = useSWR("/objects/283210", fetcher);
	const { data: pieceFive, isValidatingFive } = useSWR("/objects/732764", fetcher);
	const { data: pieceSix, isValidatingSix } = useSWR("/objects/652152", fetcher);
	return (
		<Container>
			<>
				<Navbar>
					<div>
						<Navbar.Brand className="navname">
							<b>PHOTOGRAPHY COLLECTION</b>
						</Navbar.Brand>
					</div>
				</Navbar>
			</>
			<>
				{/* isValidating es una variable que esta esperando al respuesta de un request */}
				{/* de la linea 40 a la 46 es un render condicional */}
				{isValidatingFour &&
					isValidatingFive &&
					isValidatingSix &&
					!pieceOne && (
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					)}
				<Row>
					<Col>
						{pieceFour && (
							<ImageCard
								imageUrl={pieceFour.primaryImageSmall}
								title={pieceFour.title}
								artist={pieceFour.artistDisplayName}
								id={pieceFour.objectID}
							/>
						)}
					</Col>
					<Col>
						{pieceFive && (
							<ImageCard
								imageUrl={pieceFive.primaryImageSmall}
								title={pieceFive.title}
								artist={pieceFive.artistDisplayName}
								id={pieceFive.objectID}
							/>
						)}
					</Col>
					<Col>
						{pieceSix && (
							<ImageCard
								imageUrl={pieceSix.primaryImageSmall}
								title={pieceSix.title}
								artist={pieceSix.artistDisplayName}
								id={pieceSix.objectID}
							/>
						)}
					</Col>
				</Row>
			</>
		</Container>
	);
};
