import axios from "axios";
import React, {createContext, useCallback, useEffect, useState} from "react";
import Game from "../model/Game";
import {API__GAMES_URL} from "../constants";

interface GameContextType {
    games: Game[];
    gamesPreviousPage: string;
    gamesNextPage: string;
    currentPage: number;
    setCurrentPage: (value: number) => void;
}

export const GameContext = createContext<GameContextType | any>({});


const useGames = (page: number) => {
    const [games, setGames] = useState([]);
    const [gamesPreviousPage, setGamesPreviousPage] = useState("");
    const [gamesNextPage, setGamesNextPage] = useState("");

    const fetchGames = useCallback(async () => {
        const {data: games} = await axios.get(API__GAMES_URL("6da1197e200a4c87b6e5bcc217e42509", page));
        setGames(games.results);
        setGamesPreviousPage(games.previous);
        setGamesNextPage(games.next);
    }, [page]);

    useEffect(() => {
        fetchGames();
    }, [page, fetchGames]);

    return {games, gamesPreviousPage, gamesNextPage};
}

interface GameContextProviderProps {
    children: React.ReactNode;
}

export const GameContextProvider: React.FC<GameContextProviderProps> = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {games, gamesPreviousPage, gamesNextPage} = useGames(currentPage);

    return (
        <GameContext.Provider
            value={{
                games,
                gamesPreviousPage, gamesNextPage,
                currentPage,
                setCurrentPage
            }}
        >
            {children}
        </GameContext.Provider>
    )
}