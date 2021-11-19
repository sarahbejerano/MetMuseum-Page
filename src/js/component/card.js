import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.scss";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { ids } from "webpack";

export const ImageCard = ({ imageUrl, title, artist, id }) => {
	const { store, actions } = useContext(Context);
	const isFavorite = store.favorites.hasOwnProperty(id);
	// te va a decir si ese id es una propiedad dentro de los favoritos
	function handleFavoriteButton() {
		if (isFavorite) {
			actions.removeFavorites({ id });
		} else {
			actions.addFavorites({ id, title });
		}
	}
	return (
		<Card className="cardFull">
			<Card.Img
				className="cardImage"
				variant="top"
				src={imageUrl}
				style={{ position: "center", padding: "20px" }}
			/>

			<Card.Body className="cardBody">
				<Card.Title>{title}</Card.Title>
				<Card.Text>{artist}</Card.Text>
				{/* lo ques estoy diciendo es al boton que me dirija a la ruta /detail + el id de la obra(en este caso) */}
				<Button href={`detail/${id}`} variant="danger">
					More Details
				</Button>

				<Button onClick={() => handleFavoriteButton()}>
					{/* isFavorite es un boleano, que si es true entonces tenemos el corazon fill sino empty */}

					{isFavorite ? <HeartFill size={20} /> : <Heart size={20} />}
				</Button>
			</Card.Body>
		</Card>
	);
};

// aqui se definen  los propTypes que voy a necesitar para el card

ImageCard.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	artist: PropTypes.string,
	id: PropTypes.string
};
