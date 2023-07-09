import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
										<li key={item.urlId} className="d-flex align-middle justify-content-between">
											<a className="dropdown-item" href={`/${item.urlId}`}>{item.name}</a>
											<div onClick={e => actions.removeFavorite(e.target.id, store, item.urlId)}>
												<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
											</div>
										</li>
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
