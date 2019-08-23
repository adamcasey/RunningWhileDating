import React, { createContext, useState, useEffect } from "react";
const context = createContext((defaultValue: null));

// Added () to all the <something> : <something> statements to appease the DOM
// act as a wrapper to put around all of our components so we can access data
const UserProvider = ({ children }) => {
	// initial state is an empty object
	const [user, setUser] = useState( (initialState: {}));

	// life-cycle logic
	// useEffect( () -> {
	useEffect( (effect: ()) => {
		fetch( (input: "/user"))
			.then( (onfulfilled: res) => res.json())
			.then( (onfulfilled: res) => setUser(res))
			.catch( (onrejected: err) => {
				console.log(err);
			});
		// empty array should make it that we have no dependencies because \
		// useEffect should only be run once
	}, (deps: []));
	//make data that we get from API endpoint available to all children inside the parent wrapper
	return (
		<context.Provider value={user}>
			{children}
		</context.Provider>
	);
};

UserProvider.context = context;

export default UserProvider;
