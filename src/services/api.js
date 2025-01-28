import axios from "axios"

const BASE_URL = "http://localhost:3001";
const api = axios.create({
    baseURL: BASE_URL,
})

export const getAllUsers = async () => {
    const { data } = await api.get("/users");
    return data;
}

export const registerUser = async (username, password) => {
    const users = await getAllUsers();
    const userExists = users.some(user => user.username === username)

    if(userExists)
        throw new Error("Username já existe!");

    const newUser = { username, password, gameIds: [] };
    const response = await api.post("/users", newUser)
    return response.data
}

export const loginUser = async (username, password) => {
    const { data: users } = await api.get("/users");
    const user = users.find(user => user.username === username);

    if(!username)
        throw new Error("Username não encontrado");

    if(user.password !== password)
        throw new Error("Senha incorreta!")

    return user
}

export const addGame = async (userId, gameData) => {
    const { data: game } = await api.post("/games", gameData);

    const { data: user } = await api.get(`/users/${userId}`);
    const updatedGameIds = [...user.gameIds, game.gameId];

    await api.patch(`/users/${userId}`, {
        gameIds: updatedGameIds,
    })

    return game;
}

export const getUserGames = async (userId) => {
    const { data: user } = await api.get(`/users/${userId}`)
    const gamePromises = user.gameIds.map(id => api.get(`/games/${id}`))
    const gameResponses = await Promise.all(gamePromises)
    return gameResponses.map(response => response.data)
}

export const getAllGames = async () => {
    const { data: games } = await api.get("/games")
    return games;
}