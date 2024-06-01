import {useEffect, useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useIntegration} from '@tma.js/react-router-integration';
import {Navigate, Route, Router, Routes} from "react-router-dom";
import {initNavigator} from "@tma.js/sdk-react";
import {routes} from "./routes.ts";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

function App() {
    // Create new application navigator and attach it to the browser history, so it could modify
    // it and listen to its changes.
    const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
    const [location, reactNavigator] = useIntegration(navigator);


    // Don't forget to attach the navigator to allow it to control the BackButton state as well
    // as browser history.
    useEffect(() => {
        navigator.attach();
        return () => navigator.detach();
    }, [navigator]);

    return (
        <>
            <TonConnectUIProvider manifestUrl="https://paco-enriquez.github.io/nft-tma/tonconnect-manifest.json">
            <Router location={location} navigator={reactNavigator}>
                <Routes>
                    {routes.map((route) => <Route key={route.path} {...route} />)}
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </Router>
            </TonConnectUIProvider>


        </>
    )
}

export default App

export const Vite = () => {
    const [count, setCount] = useState(0)
    return (<>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}