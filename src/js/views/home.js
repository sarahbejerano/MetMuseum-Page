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
	return (
		<Container>
			<Carousel className="previewImages" variant="light" fluid="lg">
				{/* /toda la informacion de pieceOne se cargara una vez que la variable pieceOne este definida */}
				{pieceOne && (
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-img"
							src={pieceOne.primaryImageSmall}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h2>{pieceOne.title}</h2>
							<p>{pieceOne.artistDisplayName}</p>
							<p>{pieceOne.objectDate}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
				<Carousel.Item>
					<img
						className="d-block w-100 carousel-img"
						src={pieceTwo ? pieceTwo.primaryImageSmall : "https://picsum.photos/2/1?img=1"}
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 carousel-img"
						src={pieceThree ? pieceThree.primaryImageSmall : "https://picsum.photos/2/1?img=1"}
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
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
									<Button variant="primary">Go somewhere</Button>
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
									<Button variant="primary">Go somewhere</Button>
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
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						)}
					</Col>
				</Row>
			</>
		</Container>
	);
};
