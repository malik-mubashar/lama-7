import React, { useContext, useState } from 'react';
import { RootContext } from '../../context/index'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Login = (props) => {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {
		productsCopy, setProductsCopy, products, cart, setCart, cartTotal, setCartTotal, currentUser, setCurrentUser, isSuperUser, setIsSuperUser
	} = useContext(RootContext);

	const handleChange = (e) => {
		if (e.target.name == "email") {
			setEmail(e.target.value);
		}
		if (e.target.name == "password") {
			setPassword(e.target.value);
		}
	}
	function handleSubmit() {
		if (password.length >= 8 && password.length <= 20) {
			debugger;
			if (props.signUp) {
				handleSignUp()
			} else {
				handleSignIn()
			}
		} else if (password.length > 20) {
			alert("password is to long");
		} else {
			alert("password is too short");
		}
	}
	function handleSignIn() {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "*",
				mode: "no-cors",
			},
			body: JSON.stringify({ username: email, password: password })
		};
		fetch('http://localhost:4000/auth/signin', requestOptions)
			.then(response => response.json())
			.then(data => {
				debugger;
				if (data.status == "blocked") {
					if (data.message == "password incorrect") {
						alert("password incorrect")
					}
					if (data.message == "email does not exist") {
						alert("email does not exist")
					}
				} else if (data.status == "approved") {
					setCurrentUser(data.id);
					localStorage.setItem("currentUser", JSON.stringify(data.id));

					setIsSuperUser(data.isSuperUser);
					localStorage.setItem("isSuperUser", JSON.stringify(data.isSuperUser));


					navigate(`/products/`);
				}
			});
	}

	function handleSignUp() {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin": "*",
				mode: "no-cors",
			},
			body: JSON.stringify({ username: email, password: password, isSuperUser: false })
		};
		fetch('http://localhost:4000/auth/signup', requestOptions)
			.then(response => response.json())
			.then(data => {
				debugger;
				console.log(data)
				if (data.statusCode == 409) {
					alert("user already exist")
				} else if (data.status == "approved") {
					setCurrentUser(data.id);
					localStorage.setItem("currentUser", JSON.stringify(data.id));
					navigate(`/products/`);
				}
			});
	}
	// console.log("flag", props.signUp)
	return !currentUser ? (
		<div>
			<div className="hero is-primary ">
				<div className="hero-body container">
					<h4 className="title">{props.signUp ? "SignUp" : "Login"}</h4>
				</div>
			</div>
			<br />
			<br />
			<form
			>
				<div className="columns is-mobile is-centered">
					<div className="column is-one-third">
						<div className="field">
							<label className="label">User Name: </label>
							<input
								className="input"
								// type="email"
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
								onChange={handleChange}
							/>
						</div>
						{/* {this.state.error && (
							<div className="has-text-danger">{this.state.error}</div>
						)} */}
						<div className="field is-clearfix">
							<span
								className="button is-primary is-outlined is-pulled-right"
								onClick={handleSubmit}
							>
								Submit
							</span>
						</div>
					</div>
				</div>
			</form>
		</div>
	) : (
			<div>
				signed in
			{/* Alreadylogged in */}
				{/* {navigate(`/products/`)} */}
		</div>
	);
}
export default Login;