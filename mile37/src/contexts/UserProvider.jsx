import React, { createContext, useState, useEffect } from "react";
const context = createContext(null);

// Added () to all the <something> : <something> statements to appease the DOM
// act as a wrapper to put around all of our components so we can access data
const UserProvider = ({ children }) => {
	// initial state is an empty object
	const [user, setUser] = useState( {} );

	// life-cycle logic
	// useEffect( () -> {
	useEffect(() => {
		fetch("/user")
			.then(res => res.json())
			.then(res => setUser(res))
			.catch(err => {
				console.log(err);
			});
		// empty array should make it that we have no dependencies because \
		// useEffect should only be run once
	}, []);
	//make data that we get from API endpoint available to all children inside the parent wrapper
	return (
		<context.Provider value={user}>
			{children}
		</context.Provider>
	);
};

UserProvider.context = context;

export default UserProvider;
