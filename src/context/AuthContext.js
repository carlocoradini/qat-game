import { createContext, useContext, useState } from "react";
import { loginUser, registerUser } from "../services/api";

const AuthContext = createContext();

export function AuthProvider ({ children }) {
    const [ user, setUser ] = useState(null);
    const [ guestSession, setGuestSession ] = useState(null);

    const login = async (username, password) => {
        try {
            const loggedUser = await loginUser(username, password)
            setUser(loggedUser)
            setGuestSession(null)
        } catch ( err ) {
            throw new Error(err.message)
        }
    }

    const register = async (username, password) => {
        try {
            const newUser = await registerUser(username, password);
            setGuestSession(null)
            setUser(newUser)
        } catch (err) {
            throw new Error(err.message)
        }
    }

    const logout = () => {
        setUser(null)
        setGuestSession(null)
    }

    const startGuestSession = () => {
        setGuestSession({
            id: `guest_${Date.now()}`,
            games: [],
        })
    }

    const addGuestGame = (gameData) => {
        if(guestSession) {
            setGuestSession((prev) => ({
                ...prev,
                games: [...prev.games, gameData]
            }))
        }
    }

    return (
        <AuthContext.Provider 
            value={{
                user,
                guestSession,
                login,
                register,
                logout,
                startGuestSession,
                addGuestGame
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}