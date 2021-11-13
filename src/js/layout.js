import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { artCollection } from "./views/artCollection";
import { exhibitions } from "./views/exhibitions";
import { home } from "./views/home";
import { about } from "./views/about";
import injectContext from "./store/appContext";
import { MetNavbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MetNavbar />
					<Switch>
						<Route exact path="/">
							<home />
						</Route>
						<Route exact path="/Art-Collection">
							<artCollection />
						</Route>
						<Route exact path="/Exhibitions">
							<exhibitions />
						</Route>
						<Route exact path="/About">
							<about />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
