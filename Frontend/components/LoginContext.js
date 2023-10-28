import React, { createContext, useContext, useState } from 'react';


const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(false);

    
    const updateLoginState = async (newLoginState) => {
        // TODO: Validate username and password are actually ok by checking the backend database
        const isValidUser = true; // REPLACE WITH BACKEND CALL

        if (isValidUser) {
            try {
                await SecureStore.setItemAsync('username', newLoginState.username);
                await SecureStore.setItemAsync('password', newLoginState.password);
            } catch (err) {
                console.log(err);
            }
            
        }
        setLoginState(isValidUser);
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