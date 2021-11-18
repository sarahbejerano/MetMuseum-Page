import React from "react";
// import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/photography.scss";
import { ImageCard } from "../component/card";
import { Row, Col, Container, Placeholder } from "react-bootstrap";

export const Photography = () => {
	// TODO: remplazar por swr Infinite
	const { data: pieceOne, isValidatingOne } = useSWR("/objects/686256", fetcher);
	const { data: pieceTwo, isValidatingTwo } = useSWR("/objects/268577", fetcher);
	const { data: pieceThree, isValidatingThree } = useSWR("/objects/271513", fetcher);
	const { data: pieceFour, isValidatingFour } = useSWR("/objects/283210", fetcher);
	const { data: pieceFive, isValidatingFive } = useSWR("/objects/732764", fetcher);
	const { data: pieceSix, isValidatingSix } = useSWR("/objects/652152", fetcher);
	const { data: pieceSeven, isValidatingSeven } = useSWR("/objects/289307", fetcher);
	const { data: pieceEight, isValidatingEight } = useSWR("/objects/283193", fetcher);
	const { data: pieceNine, isValidatingNine } = useSWR("/objects/287985", fetcher);
	return (
		<Container>
			<>
				<Placeholder size="lg" />
			</>
			<p className="navname">PHOTOGRAPHY COLLECTION</p>
			<>
				{/* isValidating es una variable que esta esperando al respuesta de un request */}
				{/* de la linea 40 a la 46 es un render condicional */}
				{isValidatingOne &&
					isValidatingTwo &&
					isValidatingThree &&
					isValidatingFour &&
					isValidatingFive &&
					isValidatingSix &&
					isValidatingSeven &&
					isValidatingEight &&
					isValidatingNine &&
					!pieceFour && (
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					)}
				<Row>
					<Col>
						{pieceOne && (
							<ImageCard
								imageUrl={pieceOne.primaryImageSmall}
								title={pieceOne.title}
								artist={pieceOne.artistDisplayName}
								id={pieceOne.objectID}
							/>
						)}
					</Col>
					<Col>
						{pieceTwo && (
							<ImageCard
								imageUrl={pieceTwo.primaryImageSmall}
								title={pieceTwo.title}
								artist={pieceTwo.artistDisplayName}
								id={pieceTwo.objectID}
							/>
						)}
					</Col>
					<Col>
						{pieceThree && (
							<ImageCard
								imageUrl={pieceThree.primaryImageSmall}
								title={pieceThree.title}
								artist={pieceThree.artistDisplayName}
								id={pieceThree.objectID}
							/>
						)}
					</Col>
				</Row>
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
				<Row>
					<Col>
						{pieceSeven && (
							<ImageCard
								imageUrl={pieceSeven.primaryImageSmall}
								title={pieceSeven.title}
								artist={pieceSeven.artistDisplayName}
								id={pieceSeven.objectID}
							/>
						)}
					</Col>
					<Col>
						{pieceEight && (
							<ImageCard
								imageUrl={pieceEight.primaryImageSmall}
								title={pieceEight.title}
								artist={pieceEight.artistDisplayName}
								id={pieceEight.objectID}
							/>
						)}
					</Col>
					<Col>
						{pieceNine && (
							<ImageCard
								imageUrl={pieceNine.primaryImageSmall}
								title={pieceNine.title}
								artist={pieceNine.artistDisplayName}
								id={pieceNine.objectID}
							/>
						)}
					</Col>
				</Row>
			</>
		</Container>
	);
};
