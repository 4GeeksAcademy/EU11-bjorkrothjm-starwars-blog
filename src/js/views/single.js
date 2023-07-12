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
				<div className="row d-flex category-fact-container">
	
					<div className="col-sm-4 col-md-2">
						<p><strong>Name:</strong></p>
						<p className="fact-text">{item.properties.name}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Birth Year:</strong></p>
						<p className="fact-text">{item.properties.birth_year}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Gender:</strong></p>
						<p className="fact-text">{item.properties.gender}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Height:</strong></p>
						<p className="fact-text">{item.properties.height}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Skin color:</strong></p>
						<p className="fact-text">{item.properties.skin_color}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Eye color:</strong></p>
						<p className="fact-text">{item.properties.eye_color}</p>
					</div>
						
					<hr className="my-4" />
				</div>
			);
			case "vehicles":
			return(
				<div className="row d-flex category-fact-container">

					<div className="col-sm-4 col-md-2">
						<p><strong>Name:</strong></p>
						<p className="fact-text">{item.properties.name}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Model:</strong></p>
						<p className="fact-text">{item.properties.model}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Vehicle class:</strong></p>
						<p className="fact-text">{item.properties.vehicle_class}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Length:</strong></p>
						<p className="fact-text">{item.properties.length}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Crew:</strong></p>
						<p className="fact-text">{item.properties.crew}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Passengers:</strong></p>
						<p className="fact-text">{item.properties.passengers}</p>
					</div>
						
					<hr className="my-4" />
				</div>
			);
			case "planets":
			return(
				<div className="row d-flex category-fact-container">

					<div className="col-sm-4 col-md-2">
						<p><strong>Name:</strong></p>
						<p className="fact-text">{item.properties.name}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Climate:</strong></p>
						<p className="fact-text">{item.properties.climate}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Population:</strong></p>
						<p className="fact-text">{item.properties.population}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Orbital period:</strong></p>
						<p className="fact-text">{item.properties.orbital_period}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Rotation period:</strong></p>
						<p className="fact-text">{item.properties.rotation_period}</p>
					</div>
					<div className="col-sm-4 col-md-2">
						<p><strong>Diameter:</strong></p>
						<p className="fact-text">{item.properties.diameter}</p>
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
								<span className="btn btn-primary btn-lg back-to-home-btn" href="#" role="button">
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



