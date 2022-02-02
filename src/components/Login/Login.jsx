import React, { useContext, useState } from 'react';
import { RootContext } from '../../context/index'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Login = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {
		productsCopy, setProductsCopy, products, cart, setCart, cartTotal, setCartTotal, currentUser, setCurrentUser
	} = useContext(RootContext);

	const handleChange = (e) => {
		debugger;
		if (e.target.name = "email") {
			setEmail(e.target.value);
		}
		if (e.target.name = "password") {
			setPassword(e.target.value);
		}
	}
	function handleSubmit() {
		// const requestOptions = {
		// 	method: 'GET',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ username: 'mb-001', password: 'Zxcv789+' })
		// };
		// await fetch('localhost/auth/login', requestOptions)
		// 	.then(response => console.log(response.json()))
		// 	.then(data => console.log("data", data));

		let tempObj = {
			"email": email,
			"password": password
		}
		setCurrentUser(tempObj);
		localStorage.setItem("currentUser", JSON.stringify(tempObj));
		navigate(`/products/`);
	}
	const user = 'null';
	return !currentUser ? (
		<div>
			<div className="hero is-primary ">
				<div className="hero-body container">
					<h4 className="title">Login</h4>
				</div>
			</div>
			<br />
			<br />
			<form
			>
				<div className="columns is-mobile is-centered">
					<div className="column is-one-third">
						<div className="field">
							<label className="label">Email: </label>
							<input
								className="input"
								type="email"
								name="email"
								onChange={handleChange}
							/>
						</div>
						<div className="field">
							<label className="label">Password: </label>
							<input
								className="input"
								type="password"
								name="password"
								onChange={this.handleChange}
							/>
						</div>
						{/* {this.state.error && (
							<div className="has-text-danger">{this.state.error}</div>
						)} */}
						<div className="field is-clearfix">
							<button
								className="button is-primary is-outlined is-pulled-right"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	) : (
		<div>
			{/* Alreadylogged in */}
			{navigate(`/products/`)}
		</div>
	);
}
export default Login;