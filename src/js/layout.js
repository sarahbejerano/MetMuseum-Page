import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { PageNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/home";
import { Art } from "./views/art";
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
						<Route exact path="/Art">
							<Art />
						</Route>
						<Route exact path="/Photography">
							<Photography />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
