import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import PlayerLayout from "./templates/PlayerLayout";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<PlayerLayout>
			<App />
		</PlayerLayout>
	</Router>
);

serviceWorkerRegistration.register();
