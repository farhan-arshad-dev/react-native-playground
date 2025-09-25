import React, { createContext } from "react";

// type of the user data need to be taking care of.
type AuthContextType = {
}

const AuthContext = createContext(undefined);

// wraper function so must receved `children`
export function AuthProvider({ children }: { children: React.ReactNode }) {
    return <></>
}


export function useAuth() {

}