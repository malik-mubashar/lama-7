import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import RootContext from './context/index'

import Home from './Home';

const renderApplication = () => {
	ReactDOM.render(
		<RootContext>
			<Home />
		</RootContext> ,
    document.querySelector('#root')
  );
}

renderApplication(Home);

if (module.hot) {
	module.hot.accept("./Home", () => {
    renderApplication();
  });
}
