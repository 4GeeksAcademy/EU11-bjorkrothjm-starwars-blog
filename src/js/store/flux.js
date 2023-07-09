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
				for (const category of ["people"]){
					const serverUrl = "https://www.swapi.tech/api/" + category
					const unspecificApiData = await loadData(serverUrl)
					console.log("unspecificApiData", unspecificApiData);


					for (const item of unspecificApiData.results){
						console.log(item.url)
						let temp = await loadData(item.url)
						const urlId = category+"-"+temp.result.uid
						// const myObj = {String(temp.result.uid) :  temp.result.properties}
						tempArrays[category].push( {"urlId" : urlId, "category": category, "uid" : temp.result.uid, "properties" : temp.result.properties} );
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
				

				// WORKING CODE

				// const serverUrl = "https://www.swapi.tech/api/" + item
				// const unspecificApiData = await loadData(serverUrl)
				// console.log("unspecificApiData", unspecificApiData);
				// const peopleArr = []

				// for (const item of unspecificApiData.results){
				// 	console.log(item.url)
				// 	let temp = await loadData(item.url)
				// 	peopleArr.push (temp.result.properties)
				// };
				// console.log("DONE")
				// console.log(peopleArr)
				// setStore({people: peopleArr})

				//

				// const resultArray  = await Promise.all(unspecificApiData.map( async (item) => {
				// 	loadData2(item.url)
				// }));
				// console.log(resultArray)
			


				// const serverUrl = "https://www.swapi.tech/api/people"
				// fetch(serverUrl)
				// .then(res => res.json())
				// // .then(data => console.log(data))
				// .then(data => {
				// 	console.log(data)
				// 	console.log(data.results)
				// 	data.results.forEach( (item) => {
				// 		console.log(item.url)

				// 	})
				// 	setStore({demo: data.results})
				// })
				// .catch(err => console.error(err))

		
			},

			addFavorite: (store, urlId, category, uid, name) => {
				console.log(store.favorites)
				const newFavoritesArray = [...store.favorites, {"urlId" : urlId, "category" : category, "uid" : uid, "name" : name}]
				setStore({...store, favorites: newFavoritesArray})
				console.log(store)
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
