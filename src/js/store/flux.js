const getState = ({ getStore, getActions, setStore }) => {
	return {
		// returning un objeto que tiene dentro propiedades: store and action, que a su vez tienen objetos dentro. Action tiene funciones como objetos dentro
		store: {
			favorites: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorites: ({ id, title }) => {
				const { favorites } = getStore();
				const newFavorites = { ...favorites, [id]: title };
				setStore({ favorites: newFavorites });
				// aqui le estoy diciendo al set Store que guarde los new favorites en los favorites/
			},
			removeFavorites: ({ id }) => {
				const { favorites } = getStore();
				const { [id]: remove, ...newFavorites } = favorites;
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
