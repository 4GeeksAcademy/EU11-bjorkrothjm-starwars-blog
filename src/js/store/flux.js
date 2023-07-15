import { array, oneOf } from "prop-types";
import { useState } from "react";

const { json } = require("react-router");

const getState = ({ getStore, getActions, setStore }) => {

	// Function to fetch from API 
	const loadData = async (serverUrl) => {
		try{
			const response = await fetch(serverUrl)
			if (!response.ok){
				console.log(response.ok)
			}else{
				const jsonData = await response.json();
				console.log(jsonData)
				return jsonData
			}
		}catch (error) {
			console.log(error);
		};
	};

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people : [],
			vehicles : [],
			planets : [],
			favorites : []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// NOTE create a smoother solution later by using the store values (need to remove demo first?)
			loadSomeData:async () => {
				let tempArrays = {
					people : [],
					vehicles : [],
					planets : [],
					favorites : []
				};
				// , "vehicles", "planets"
				for (const category of ["people", "vehicles", "planets"]){
					const serverUrl = "https://www.swapi.tech/api/" + category
					const unspecificApiData = await loadData(serverUrl)
					console.log("unspecificApiData", unspecificApiData);


					for (const item of unspecificApiData.results){
						console.log(item.url)
						let temp = await loadData(item.url)
						const urlId = category+"-"+temp.result.uid
						// const myObj = {String(temp.result.uid) :  temp.result.properties}
						// const [toggle, setToggle] = useState("0");
						tempArrays[category].push( {"urlId" : urlId, "category": category, "uid" : temp.result.uid, "properties" : temp.result.properties, likeToggle: "0"} );
						// tempArrays[category].push(temp.result.properties)
						//tempArrays[category].push(temp.result)
						//peopleArr.push (temp.result.properties) // OLD CODE - TO BE REMOVED
					};
					console.log("DONE")
					// console.log(peopleArr)
					// setStore({people: peopleArr})
					console.log(tempArrays[category]);
			
				}
				// setStore({people: tempArrays[people], })
				setStore(tempArrays)
				
			},

			handleFavorite: (urlId, category, uid, name) => {
				const store = getStore();
				const actions = getActions()
				for (const index of store[category].keys()){
					if (urlId === store[category][index].urlId){
						console.log(store[category][index].likeToggle)
						const arrayToUpdate = store[category][index]
						arrayToUpdate.likeToggle === "0"
							? arrayToUpdate.likeToggle = "1" 
							: arrayToUpdate.likeToggle = "0" 
						//const updatedCategoryArray = store[category][index] = arrayToUpdate;
						//console.log("updatedFavoritesArray", updatedCategoryArray);
						//setStore({...store, category : updatedCategoryArray})
						console.log("store after Update: ", store);
					}
				};
				const idArray = store.favorites.map( (item) => {
					return item.urlId
				});
				console.log(idArray);
				if (!idArray.includes(urlId)){
					console.log(urlId + " not in favorites array:"+ idArray);
					console.log("Adding...")
					actions.addFavorite(urlId, category, uid, name)
				}
				else{
					console.log(urlId + " in favorites array: "+ idArray);
					console.log("Removing...");
					actions.removeFavorite(urlId)
				}
				
			},
			addFavorite: (urlId, category, uid, name) => {
				const store = getStore();
				const newFavoritesArray = [...store.favorites, {"urlId" : urlId, "category" : category, "uid" : uid, "name" : name}]
				setStore({...store, favorites: newFavoritesArray});

			},
			removeFavorite: (urlId) => {
				const store = getStore();
				console.log("Current favorites array", store.favorites)
				const updatedFavoritesArray = store.favorites.filter( (item) => {
					if(item.urlId != urlId){
						return true
					}
				})
				console.log("Updated favorites array:", updatedFavoritesArray)
				setStore({...store, favorites: updatedFavoritesArray});
				console.log(store);
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
