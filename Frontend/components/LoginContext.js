import React, { createContext, useContext, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const LoginContext = createContext();

//call if trying to login to existing account
async function validateUser(newLoginState) {
    var isValidUser = false;
    try {
        const endpoint = 'http://localhost:8080/getUser';
        const data = {
            username : newLoginState.username,
            password : newLoginState.password
        };
        const headers = {
            'Content-Type': 'application/json',
        }
        //const getResponse = 
        await axios.post(endpoint, data, headers);
        isValidUser = true;
    } catch (err) {
        console.log(err);
        isValidUser = false;
    }

    console.log("isValidUser: " + isValidUser);
    return isValidUser;
}

//call if adding a new user
async function newAccount(newLoginState) {
    userAdded = false;
    try {
        const endpoint = 'http://localhost:8080/add-user';
        const data = { 
            user : {
                username : newLoginState.username,
                password : newLoginState.password
            }
        };
        const getResponse = await axios.post(endpoint, data);
        userAdded = true;
    } catch (err) {
        userAdded = false;
    }

    return userAdded;
}

export const LoginProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(false);

    const updateLoginState = async (newLoginState, isnewUser) => {
        // determine if isValidUser (if user exists in database)
        canLogin = false;
               
        if (!isnewUser) {
            canLogin = await validateUser(newLoginState);
        } else {
            canLogin = await newAccount(newLoginState);
        }
        console.log("canLogin: " + canLogin); 

        if (canLogin) {
            try {
                await SecureStore.setItemAsync('username', newLoginState.username);
                await SecureStore.setItemAsync('password', newLoginState.password);
            } catch (err) {
                console.log(err);
            }
        }
        
        setLoginState(canLogin);
        return canLogin;
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