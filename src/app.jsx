import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import RootContext from './context/index'
import "bulma/css/bulma.css";

import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const renderApplication = () => {
	ReactDOM.render(
		<RootContext>
			<BrowserRouter>
			<Home />
			</BrowserRouter>
		</RootContext>,
    document.querySelector('#root')
  );
}

renderApplication();

if (module.hot) {
	module.hot.accept("./Home", () => {
    renderApplication();
  });
}
