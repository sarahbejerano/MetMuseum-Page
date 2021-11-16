import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.scss";
import { Card, Button, Row, Col, Container, Carousel, Navbar } from "react-bootstrap";

export const Home = () => {
	const { data: pieceOne, isValidating } = useSWR("/objects/437654", fetcher);
	const { data: pieceTwo, isValidatingTwo } = useSWR("/objects/459092", fetcher);
	const { data: pieceThree, isValidatingThree } = useSWR("/objects/436526", fetcher);
	const { data: pieceFour, isValidatingFour } = useSWR("/objects/283210", fetcher);
	const { data: pieceFive, isValidatingFive } = useSWR("/objects/732764", fetcher);
	const { data: pieceSix, isValidatingSix } = useSWR("/objects/652152", fetcher);
	return (
		<Container>
			<Carousel className="previewImages" variant="light" fluid="lg">
				{/* /toda la informacion de pieceOne se cargara una vez que la variable pieceOne este definida */}
				{pieceOne && (
					<Carousel.Item className="carouselItem">
						<img
							className="d-block w-100 carousel-img"
							src={pieceOne.primaryImageSmall}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>{pieceOne.title}</h3>
							<p>{pieceOne.artistDisplayName}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
				{pieceTwo && (
					<Carousel.Item className="carouselItem2">
						<img
							className="d-block w-100 carousel-img"
							src={pieceTwo.primaryImageSmall}
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h3>{pieceTwo.title}</h3>
							<p>{pieceTwo.artistDisplayName}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
				{pieceThree && (
					<Carousel.Item className="carouselItem3">
						<img
							className="d-block w-100 carousel-img"
							src={pieceThree.primaryImageSmall}
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h3>{pieceThree.title}</h3>
							<p>{pieceThree.artistDisplayName}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
			</Carousel>
			<>
				<Navbar bg="danger">
					<div className="artName">
						<Navbar.Brand>
							<p>
								<b>ART COLLECTION HIGHLIGHTS</b>
							</p>
						</Navbar.Brand>
					</div>
				</Navbar>
				{/* isValidating es una variable que esta esperando al respuesta de un request */}
				{/* de la linea 40 a la 46 es un render condicional */}
				{isValidating &&
					isValidatingTwo &&
					isValidatingThree &&
					!pieceOne && (
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					)}
				<Row className="firstRow">
					<Col xs="6" sm="4">
						{/* *si la pieceOne esta definida renderea el card */}
						{pieceOne && (
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={pieceOne.primaryImageSmall} />
								<Card.Body>
									<Card.Title>{pieceOne.title}</Card.Title>
									<Card.Text>{pieceOne.artistDisplayName}</Card.Text>
									<Button variant="danger">More Details</Button>
								</Card.Body>
							</Card>
						)}
					</Col>
					<Col xs="6" sm="4">
						{pieceTwo && (
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={pieceTwo.primaryImageSmall} />
								<Card.Body>
									<Card.Title>{pieceTwo.title}</Card.Title>
									<Card.Text>{pieceTwo.artistDisplayName}</Card.Text>
									<Button variant="danger">More Details</Button>
								</Card.Body>
							</Card>
						)}
					</Col>
					<Col xs="6" sm="4">
						{pieceThree && (
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={pieceThree.primaryImageSmall} />
								<Card.Body>
									<Card.Title>{pieceThree.title}</Card.Title>
									<Card.Text>{pieceThree.artistDisplayName}</Card.Text>
									<Button variant="danger">More Details</Button>
								</Card.Body>
							</Card>
						)}
					</Col>
				</Row>
			</>
			<>
				<Navbar bg="danger">
					<div className="photoName">
						<Navbar.Brand>
							<p>
								<b>PHOTOGRAPHY COLLECTION HIGHLIGHTS</b>
							</p>
						</Navbar.Brand>
					</div>
				</Navbar>
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
				<Row className="fourRow">
					<Col xs="6" sm="4">
						{/* *si la pieceOne esta definida renderea el card */}
						{pieceFour && (
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={pieceFour.primaryImageSmall} />

								<Card.Body>
									<Card.Title>{pieceFour.title}</Card.Title>
									<Card.Text>{pieceFour.artistDisplayName}</Card.Text>
									<Button variant="danger">More Details</Button>
								</Card.Body>
							</Card>
						)}
					</Col>
					<Col xs="6" sm="4">
						{pieceFive && (
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={pieceFive.primaryImageSmall} />
								<Card.Body>
									<Card.Title>{pieceFive.title}</Card.Title>
									<Card.Text>{pieceFive.artistDisplayName}</Card.Text>
									<Button variant="danger">More Details</Button>
								</Card.Body>
							</Card>
						)}
					</Col>
					<Col xs="6" sm="4">
						{pieceSix && (
							<Card style={{ width: "18rem" }}>
								<Card.Img variant="top" src={pieceSix.primaryImageSmall} />
								<Card.Body>
									<Card.Title>{pieceSix.title}</Card.Title>
									<Card.Text>{pieceSix.artistDisplayName}</Card.Text>
									<Button variant="danger">More Details</Button>
								</Card.Body>
							</Card>
						)}
					</Col>
				</Row>
			</>
		</Container>
	);
};
