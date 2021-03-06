import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";

import "../../styles/home.scss";
import { ImageCard } from "../component/card";
import { Row, Col, Container, Carousel, Navbar } from "react-bootstrap";

export const Home = () => {
	// TODO: remplazar por swr Infinite
	const { data: pieceOne, isValidating } = useSWR("/objects/437654", fetcher);
	const { data: pieceTwo, isValidatingTwo } = useSWR("/objects/459092", fetcher);
	const { data: pieceThree, isValidatingThree } = useSWR("/objects/436526", fetcher);
	const { data: pieceFour, isValidatingFour } = useSWR("/objects/283210", fetcher);
	const { data: pieceFive, isValidatingFive } = useSWR("/objects/732764", fetcher);
	const { data: pieceSix, isValidatingSix } = useSWR("/objects/652152", fetcher);
	const { data: pieceSeven, isValidatingSeven } = useSWR("/objects/289307", fetcher);
	const { data: pieceEight, isValidatingEight } = useSWR("/objects/283193", fetcher);
	const { data: pieceNine, isValidatingNine } = useSWR("/objects/287985", fetcher);
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
				{pieceFour && (
					<Carousel.Item className="carouselItem4">
						<img
							className="d-block w-100 carousel-img"
							src={pieceFour.primaryImageSmall}
							alt="Fourth slide"
						/>
						<Carousel.Caption>
							<h3>{pieceFour.title}</h3>
							<p>{pieceFour.artistDisplayName}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
				{pieceFive && (
					<Carousel.Item className="carouselItem5">
						<img
							className="d-block w-100 carousel-img"
							src={pieceFive.primaryImageSmall}
							alt="Fifth slide"
						/>
						<Carousel.Caption>
							<h3>{pieceFive.title}</h3>
							<p>{pieceFive.artistDisplayName}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
				{pieceSix && (
					<Carousel.Item className="carouselItem6">
						<img className="d-block w-100 carousel-img" src={pieceSix.primaryImageSmall} alt="Six slide" />
						<Carousel.Caption>
							<h3>{pieceSix.title}</h3>
							<p>{pieceSix.artistDisplayName}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
				{pieceSeven && (
					<Carousel.Item className="carouselItem7">
						<img
							className="d-block w-100 carousel-img"
							src={pieceSeven.primaryImageSmall}
							alt="Seventh slide"
						/>
						<Carousel.Caption>
							<h3>{pieceSeven.title}</h3>
							<p>{pieceSeven.artistDisplayName}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
				{pieceEight && (
					<Carousel.Item className="carouselItem8">
						<img
							className="d-block w-100 carousel-img"
							src={pieceEight.primaryImageSmall}
							alt="Eight slide"
						/>
						<Carousel.Caption>
							<h3>{pieceEight.title}</h3>
							<p>{pieceEight.artistDisplayName}</p>
						</Carousel.Caption>
					</Carousel.Item>
				)}
			</Carousel>
			<>
				<Navbar bg="danger">
					<div className="artName">
						<Navbar.Brand>
							<p>
								<b>PAINTINGS COLLECTION HIGHLIGHTS</b>
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
				<Row>
					<Col xs={12} md={4}>
						{/* *si la pieceOne esta definida renderea el card */}
						{pieceOne && (
							<ImageCard
								imageUrl={pieceOne.primaryImageSmall}
								title={pieceOne.title}
								artist={pieceOne.artistDisplayName}
								id={pieceOne.objectID}
							/>
						)}
					</Col>
					<Col xs={12} md={4}>
						{pieceTwo && (
							<ImageCard
								imageUrl={pieceTwo.primaryImageSmall}
								title={pieceTwo.title}
								artist={pieceTwo.artistDisplayName}
								id={pieceTwo.objectID}
							/>
						)}
					</Col>
					<Col xs={12} md={4}>
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
					<Col xs={12} md={4}>
						{pieceFour && (
							<ImageCard
								imageUrl={pieceFour.primaryImageSmall}
								title={pieceFour.title}
								artist={pieceFour.artistDisplayName}
								id={pieceFour.objectID}
							/>
						)}
					</Col>
					<Col xs={12} md={4}>
						{pieceFive && (
							<ImageCard
								imageUrl={pieceFive.primaryImageSmall}
								title={pieceFive.title}
								artist={pieceFive.artistDisplayName}
								id={pieceFive.objectID}
							/>
						)}
					</Col>
					<Col xs={12} md={4}>
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
