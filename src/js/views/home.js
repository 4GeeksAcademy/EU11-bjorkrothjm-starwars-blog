import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);
	
	// store.demo.forEach( (item, index ) => {
	// 	console.log(item.name, index)
	// });

	return (
		<div className="container">
			<div className="row">
				<h2>Characters</h2>
			</div>
			<ul className="list-group list-group-horizontal inline-scroll">
				{store.people.map( (item, index) => {
					return(
						<li key={index}>
							<div className="card" style={{width: "18rem", display: "inline-block", marginRight: "15px"}}>
								<img src="..." className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Gender: {item.gender}</p>
									<p className="card-text">Hair color: {item.hair_color}</p>
									<p className="card-text">Eye color: {item.eye_color}</p>
									<a href="#" className="btn btn-primary">Learn more!</a>
									<a href="#" className="btn btn-primary">Heart</a>
								</div>
							</div>
						</li>
					);
				})}
			</ul>

			{/* <ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<span>Link to: {item.name}</span>
						</li>
					);
				})}
			</ul> */}
		</div>
	);

	
	{/* const { store, actions } = useContext(Context);
	store.demo.forEach( (item, index ) => {
		console.log(item, index)
	}) */}

	{/* return(
		<div>
			<div className="row">
				<h2>Characters</h2>
			</div>
			<div className="row">
				<div className="card" style={{width: "18rem"}}>
					<img src="..." className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
				<div className="card" style={{width: "18rem"}}>
					<img src="..." className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
		</div>
		); */}


};
