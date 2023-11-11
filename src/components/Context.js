import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
    const { user, isLoggedIn, login, logout } = useContext(UserContext);
    return { user, isLoggedIn, login, logout };
};

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
