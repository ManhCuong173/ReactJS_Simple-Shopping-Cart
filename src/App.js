import React, { Component } from 'react';
import Header from './components/header'
import ContainerProducts from './containers/containerProduct'
import ContainerCart from './containers/containerCart'
import ContainerMessage from './containers/containerMessage';
import Cart from './components/cart'
import Footer from './components/footer'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="hidden-sn animated deep-purple-skin">
				<div>
					<Header />
					<main id="mainContainer">
						<div className="container">
							<ContainerProducts />
							<ContainerMessage />
							<ContainerCart />
						</div>
					</main>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
