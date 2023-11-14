import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(false);

    const updateLoginState = async (newLoginState) => {
        // TODO: Validate username and password are actually ok by checking the backend database
        isValidUser = false;
        try {
            const endpoint = 'http://localhost:8080/getUser';
            const data = {
                username : newLoginState.username,
                password : newLoginState.password
            };
            const headers = {
                'Content-Type': 'application/json',
            }
            const getResponse = await axios.post(endpoint, data, headers);
            isValidUser = true;
        } catch (err) {
            isValidUser = false;
            //console.log(err);
        }
        
        //const isValidUser = true; // REPLACE WITH BACKEND CALL
        
        if (isValidUser) {
            try {
                await SecureStore.setItemAsync('username', newLoginState.username);
                await SecureStore.setItemAsync('password', newLoginState.password);
            } catch (err) {
                console.log(err);
            }
        }
        setLoginState(isValidUser);
        return isValidUser;
    };
  
    return (
      <LoginContext.Provider value={{ loginState, updateLoginState }}>
        {children}
      </LoginContext.Provider>
    );
};

export const useLoginContext = () => {
    return useContext(LoginContext);
};