import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light" style={{flexWrap:"nowrap"}}>
			<div className="container-item-left">
				<img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" style={{width:"100%", height: "100%"}} />
			</div>
			<div className="container-item-right">		
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.length === 0
							? (
								<div>
									<li>(empty)</li>
								</div>
							)
							:
							store.favorites.map( (item) => {
								return(
									<div>
										<li key={item.urlId}><a className="dropdown-item" href={`/${item.urlId}`}>{item.name}</a></li>
									</div>
								);
							})
						}
					</ul>
				</div>			
			</div>
		</nav>
	);
};
