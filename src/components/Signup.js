import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
	const [credentials, setCredentials] = useState({name: '', email: '', password: '', cpassword: '' });
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`http://localhost:5000/user/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: credentials.name,
				email: credentials.email,
				password: credentials.password,
			}),
		});
		const json = await response.json();

    if (json.data.authToken) {
			// save token and redirect to home page
			localStorage.setItem("token", json.data.authToken);
			navigate("/");
		} else if(json.msg === "User already exist!") {
			alert("User already exist with this email, Please try with another email!!");
		} else {
      alert("Please enter valid data!!")
    }

	};

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="my-3">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
            name='name'
						aria-describedby="emailHelp"
						placeholder="Enter Name"
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
            name='email'
						aria-describedby="emailHelp"
						placeholder="Enter Email"
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
            name='password'
						placeholder="Password"
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cpassword">Confirm Password</label>
					<input
						type="password"
						className="form-control"
						id="cpassword"
            name='cpassword'
						placeholder="Confirm Password"
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

export default Signup;
