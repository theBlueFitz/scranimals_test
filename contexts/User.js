import {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [currUser,setCurrUser] = useState({});
    const [currUserId, setCurrUserId] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{currUser, setCurrUser, isLoggedIn, setIsLoggedIn, currUserId, setCurrUserId}}>
            {children}
        </UserContext.Provider>
    )
}