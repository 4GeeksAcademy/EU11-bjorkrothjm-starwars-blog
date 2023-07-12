import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/single.css";

export const Single = props => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	const category = params.theid.substr(0, params.theid.indexOf("-"));
	const uid = params.theid.substr(params.theid.indexOf("-")+1, params.theid.length);
	console.log(category);
	console.log(uid)

	const propertiesHtml = (item) => {
		console.log(category)
		console.log(item)
		switch (category){
			case "people":
			return(
				<div className="row d-flex">
	
					<div className="col-2">
						<p>Name</p>
						<p>{item.properties.name}</p>
					</div>
					<div className="col-2">
						<p>Birth Year</p>
						<p>{item.properties.birth_year}</p>
					</div>
					<div className="col-2">
						<p>Gender</p>
						<p>{item.properties.gender}</p>
					</div>
					<div className="col-2">
						<p>Gender</p>
						<p>{item.properties.height}</p>
					</div>
					<div className="col-2">
						<p>Skin color</p>
						<p>{item.properties.skin_color}</p>
					</div>
					<div className="col-2">
						<p>Eye color</p>
						<p>{item.properties.eye_color}</p>
					</div>
						
					<hr className="my-4" />
				</div>
			);
			case "vehicles":
			return(
				<div className="row d-flex">

					<div className="col-2">
						<p>Name</p>
						<p>{item.properties.name}</p>
					</div>
					<div className="col-2">
						<p>Model</p>
						<p>{item.properties.model}</p>
					</div>
					<div className="col-2">
						<p>Vehicle class</p>
						<p>{item.properties.vehicle_class}</p>
					</div>
					<div className="col-2">
						<p>Length</p>
						<p>{item.properties.length}</p>
					</div>
					<div className="col-2">
						<p>Crew</p>
						<p>{item.properties.crew}</p>
					</div>
					<div className="col-2">
						<p>Passengers</p>
						<p>{item.properties.passengers}</p>
					</div>
						
					<hr className="my-4" />
				</div>
			);
			case "planets":
			return(
				<div className="row d-flex">

					<div className="col-2">
						<p>Name</p>
						<p>{item.properties.name}</p>
					</div>
					<div className="col-2">
						<p>Climate</p>
						<p>{item.properties.climate}</p>
					</div>
					<div className="col-2">
						<p>Population</p>
						<p>{item.properties.population}</p>
					</div>
					<div className="col-2">
						<p>Orbital period</p>
						<p>{item.properties.orbital_period}</p>
					</div>
					<div className="col-2">
						<p>Rotation period</p>
						<p>{item.properties.rotation_period}</p>
					</div>
					<div className="col-2">
						<p>Diameter</p>
						<p>{item.properties.diameter}</p>
					</div>
						
					<hr className="my-4" />
				</div>
			);
		}
	}




	return(
		store[category].map( (item, index) => {
			console.log(category, "item:", item);
			if (item.urlId === params.theid){
				console.log("Found it");
				return (
						<div key={item.urlId} className="container">
							<div className="row d-flex">
								<div className="col-sm-12 col-md-6">
									<div style={{width: "100%", height: "100%"}}>
										<img src="https://via.placeholder.com/800x600?text=800x600" style={{width:"100%", height:"100%"}}/>
									</div>
								</div>

								<div className="col-sm-12 col-md-6 text-container">
									<h1 key={item.uid} className="">{item.properties.name}</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>

								<hr className="my-4" />	
							</div>

							{propertiesHtml(item)}

							<Link to="/">
								<span className="btn btn-primary btn-lg" href="#" role="button">
									Back home
								</span>
							</Link>
					</div>
				)				
			}
		})
	)
};

Single.propTypes = {
	match: PropTypes.object
};



