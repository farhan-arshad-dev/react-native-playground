import React, { createContext, useContext, useEffect, useState } from "react";
import { ID, Models } from "react-native-appwrite";
import { account } from "./appwrite";

// type of the user data need to be taking care of.
type AuthContextType = {
    user: Models.User<Models.Preferences> | null;
    isLoadingUser: boolean;
    signUp: (email: string, password: string) => Promise<string | null>;
    signIn: (email: string, password: string) => Promise<string | null>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// wraper function so must receved `children`
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

    useEffect(() => {
        getUser();
    }, [])  // should be empty array cuz want to check session infinitely.

    const getUser = async () => {
        try {
            const session = await account.get();   //  means session is acive
            setUser(session);
        } catch {
            setUser(null)
        } finally {
            setIsLoadingUser(false);
        }
    }

    const signUp = async (email: string, password: string) => {
        try {
            await account.create({ userId: ID.unique(), email: email, password: password });
            signIn(email, password);
            return null;
        } catch (error) {
            if (error instanceof Error) {
                return error.message;
            }
            return "An error occured during SignUp"
        }
    }

    const signIn = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession({ email: email, password: password });
            getUser();
            return null;
        } catch (error) {
            if (error instanceof Error) {
                return error.message;
            }
            return "An error occured during SignIn"
        }
    }

    const signOut = async () => {
        try {
            await account.deleteSessions();
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    // component that supplies a value to descendants. not the Consumer
    return <AuthContext.Provider value={{ user, isLoadingUser, signIn, signUp, signOut }}>
        {children}
    </AuthContext.Provider>;
}


export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw Error("userAuth must be inside of the AuthProvider");
    }
    return context;
}
