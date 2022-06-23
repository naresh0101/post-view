import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [postsMasterData, setPostsMasterData] = useState(null)
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // the callback to useEffect can't be async, but you can declare async within
        async function fetchData() {
            // use the await keyword to grab the resolved promise value
            // remember: await can only be used within async functions!
            try {
                let postres = await axios.get('https://jsonplaceholder.typicode.com/posts')
                let userres = await axios.get('https://jsonplaceholder.typicode.com/users')
                setPosts(postres.data)
                setPostsMasterData(postres.data)
                setUsers(userres.data)
                setLoading(false)

            } catch (error) {
                console.log('error to fetch post data')
            }
            // update local state with the retrieved data 
            // setUsers(data);
        }
        // fetchData will only run once after mount as the deps array is empty 
        fetchData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                users, setUsers,
                posts, setPosts,
                loading, setLoading,
                postsMasterData, setPostsMasterData
            }}>
            {children}
        </AppContext.Provider>
    );
};