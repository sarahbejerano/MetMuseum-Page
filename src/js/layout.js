import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { PageNavbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/home";
import { Art } from "./views/art";
import { DetailPage } from "./views/detail";
import { Photography } from "./views/photography";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";

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
						<Route exact path="/art">
							<Art />
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

export default injectContext(Layout);
