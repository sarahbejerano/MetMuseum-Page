import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { PageNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/home";
import { Painting } from "./views/painting";
import { DetailPage } from "./views/detail";
import { Photography } from "./views/photography";
import injectContext from "./store/appContext";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<PageNavbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/painting">
							<Painting />
						</Route>
						<Route exact path="/photography">
							<Photography />
						</Route>
						{/* :id es un parametro que te permite que te permite que la url sea dinamica */}
						<Route exact path="/detail/:id">
							<DetailPage />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

// aqui se esta devolviendo la funcion de appContext.js con el layout como propiedad
export default injectContext(Layout);
