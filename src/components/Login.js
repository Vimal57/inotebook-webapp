import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const [credentials, setCredentials] = useState({email: "", password: ""});
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: credentials.email, password: credentials.password }),
		});
		const json = await response.json();
		if (json.data.authToken) {
			// save token and redirect to home page
			localStorage.setItem("token", json.data.authToken);
			navigate("/");
		} else {
			alert("Invalid Credentials!!!");
		}
    };

    const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<div className="container my-3">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						aria-describedby="emailHelp"
						placeholder="Enter email"
                        value={credentials.email}
                        onChange={onChange}
					/>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password"
						placeholder="Password"
                        value={credentials.password}
                        onChange={onChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Login;
