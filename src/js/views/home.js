import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.scss";
import { Card, Button, Row, Col, Container, Carousel } from "react-bootstrap";

export const Home = () => {
	return (
		<Container>
			<Carousel className="previewImages" variant="light" fluid="sm">
				<Carousel.Item>
					<img className="d-block w-100" src="https://picsum.photos/500/300?img=1" alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="https://picsum.photos/500/300?img=2" alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="https://picsum.photos/500/300?img=3" alt="Third slide" />
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<>
				<h2 className="art">ART</h2>
				<Row className="firstRow">
					<Col xs="6" sm="4">
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of the card
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs="6" sm="4">
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of the card
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col sm="4">
						{" "}
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of the card
									content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</>
		</Container>
	);
};
