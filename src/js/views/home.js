import React, { useState, useEffect, useContext, useSyncExternalStore } from "react";
import "../../styles/home.css";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import getState from "../store/flux";


export const Home = () => {
	// useContext to be able to use the store and actions inside of the Home.js view 
	const { store, actions } = useContext(Context);

	console.log(store)
	
	// store.demo.forEach( (item, index ) => {
	// 	console.log(item.name, index)
	// });

	return (
	
		<div className="container">

			<div className="category-container">
				<div className="row"  >
					<h2>Characters</h2>
				</div>
				<div className="inline-scroll">
					{store.people.map( (item, index, array) => {
						
						return(
							<div key={item.urlId} className="card" style={{width: "18rem", display: "inline-block", marginRight: "15px"}}>
								<img src="https://via.placeholder.com/400x200?text=400x200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.properties.name}</h5>
									<p className="card-text">Gender: {item.properties.gender}</p>
									<p className="card-text">Hair color: {item.properties.hair_color}</p>
									<p className="card-text">Eye color: {item.properties.eye_color}</p>
									<div className="d-flex justify-content-between">
										<Link to={`/${item.urlId}`}>
											<span className="btn custom-learn-button" href={`/${item.urlId}`} role="button">
												Learn more
											</span>
										</Link>
										<button className="btn custom-heart-button" onClick={() => actions.addFavorite(store, item.urlId, item.category, item.uid, item.properties.name)}>

											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart custom-heart-button-image" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> 
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="category-container">
				<div className="row"  >
					<h2>Vehicles</h2>
				</div>
				<div className="inline-scroll">
					{store.vehicles.map( (item, index, array) => {
						
						return(
							<div key={item.urlId} className="card" style={{width: "18rem", display: "inline-block", marginRight: "15px"}}>
								<img src="https://via.placeholder.com/400x200?text=400x200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.properties.name}</h5>
									<p className="card-text">Model: {item.properties.model}</p>
									<p className="card-text">Vehicle class: {item.properties.vehicle_class}</p>
									<p className="card-text">Manufacturer: {item.properties.manufacturer}</p>
									<div className="d-flex justify-content-between">
										<Link to={`/${item.urlId}`}>
											<span className="btn custom-learn-button" href={`/${item.urlId}`} role="button">
												Learn more
											</span>
										</Link>
										<button className="btn custom-heart-button" onClick={() => actions.addFavorite(store, item.urlId, item.category, item.uid, item.properties.name)}>

											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart custom-heart-button-image" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> 
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="category-container">
				<div className="row"  >
					<h2>Characters</h2>
				</div>
				<div className="inline-scroll">
					{store.planets.map( (item, index, array) => {
						
						return(
							<div key={item.urlId} className="card" style={{width: "18rem", display: "inline-block", marginRight: "15px"}}>
								<img src="https://via.placeholder.com/400x200?text=400x200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.properties.name}</h5>
									<p className="card-text">Terrain: {item.properties.terrain}</p>
									<p className="card-text">Population class: {item.properties.population}</p>
									<p className="card-text">Diameter: {item.properties.diameter}</p>
									<div className="d-flex justify-content-between">
										<Link to={`/${item.urlId}`}>
											<span className="btn custom-learn-button" href={`/${item.urlId}`} role="button">
												Learn more
											</span>
										</Link>
										<button className="btn custom-heart-button" onClick={() => actions.addFavorite(store, item.urlId, item.category, item.uid, item.properties.name)}>

											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart custom-heart-button-image" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg> 
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};