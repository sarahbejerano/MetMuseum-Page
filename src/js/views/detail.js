import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import "../../styles/detail.scss";
import { Container, Col, Row, Card, Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";

export const DetailPage = () => {
	// useParams se refiere a la url de la pagina
	const params = useParams();
	const { data, isValidating } = useSWR("/objects/" + params.id, fetcher);
	console.log(params);
	return (
		<div>
			{/* si esta validando y no hay data muestra el el loading */}
			{isValidating &&
				!data && (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
			<Container fluid="md" className="detailContent">
				<Row>
					<Col className="imageContainer">{data && <Image src={data.primaryImage} fluid />}</Col>
					<Col className="imageContainer">{data && <Image src={data.additionalImages} fluid />}</Col>
				</Row>
				<Row className="bg-secondary border">
					<Col>TITLE</Col>
					<Col>ARTIST NAME</Col>
					<Col>DATE</Col>
				</Row>
				<Row className="bg-light border">
					{data && <Col>{data.title}</Col>}
					{data && <Col>{data.artistDisplayName}</Col>}
					{data && <Col>{data.objectDate}</Col>}
				</Row>
				<Row className="bg-secondary border">
					<Col>CLASSIFICATION</Col>
					<Col>MEDIUM</Col>
					<Col>DIMENSIONS</Col>
				</Row>
				<Row className="bg-light border">
					{data && <Col>{data.classification}</Col>}
					{data && <Col>{data.medium}</Col>}
					{data && <Col>{data.dimensions}</Col>}
				</Row>
			</Container>
		</div>
	);
};
