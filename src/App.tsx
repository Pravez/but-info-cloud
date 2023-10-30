import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import {GameContextProvider} from "./context/GameContext";
import Home from "./pages/Home";
import {Loading} from "./components/Loading";

function App() {
    return (
        <>
            <GameContextProvider>
                <Suspense fallback={<Loading/>}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Suspense>
            </GameContextProvider>
        </>
    );
}

export default App;
