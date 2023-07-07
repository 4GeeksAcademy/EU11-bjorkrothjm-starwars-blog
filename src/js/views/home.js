import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Home = () => {
	// useContext to be able to use the store and actions inside of the Home.js view 
	const { store, actions } = useContext(Context);

	console.log(store)
	
	// store.demo.forEach( (item, index ) => {
	// 	console.log(item.name, index)
	// });

	const addFavorite = (e) => {
		console.log(e.target.value)
	}

	return (
		<div className="container">

			<div className="category-container">
				<div className="row"  >
					<h2>Characters</h2>
				</div>
				<div className="inline-scroll">
					{store.people.map( (item, index) => {
						return(
							<div key={index} className="card" style={{width: "18rem", display: "inline-block", marginRight: "15px"}}>
								<img src="https://via.placeholder.com/400x200?text=400x200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Gender: {item.gender}</p>
									<p className="card-text">Hair color: {item.hair_color}</p>
									<p className="card-text">Eye color: {item.eye_color}</p>
									<div className="d-flex justify-content-between">
										<button className="btn custom-learn-button" onClick={e => addFavorite(e)}>Learn more</button>
										<button className="btn custom-heart-button"> 
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart custom-heart-button-image" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> 
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			
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

			<div className="category-container">
				<div className="row"  >
					<h2>Vehicles</h2>
				</div>
				<div className="inline-scroll">
					{store.vehicles.map( (item, index) => {
						return(
							<div key={index} className="card" style={{width: "18rem", display: "inline-block", marginRight: "15px"}}>
								<img src="https://via.placeholder.com/400x200?text=400x200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Model: {item.model}</p>
									<p className="card-text">Vehicle class: {item.vehicle_class}</p>
									<p className="card-text">Manufacturer: {item.manufacturer}</p>
									<a href="#" className="btn btn-primary">Learn more!</a>
									<a href="#" className="btn btn-primary">Heart</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="category-container">
				<div className="row"  >
					<h2>Planets</h2>
				</div>
				<div className="inline-scroll">
					{store.planets.map( (item, index) => {
						return(
							<div key={index} className="card" style={{width: "18rem", display: "inline-block", marginRight: "15px"}}>
								<img src="https://via.placeholder.com/400x200?text=400x200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Terrain: {item.terrain}</p>
									<p className="card-text">Population class: {item.population}</p>
									<p className="card-text">Diameter: {item.diameter}</p>
									<a href="#" className="btn btn-primary">Learn more!</a>
									<a href="#" className="btn btn-primary">Heart</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		
		</div>


	);

	

};
