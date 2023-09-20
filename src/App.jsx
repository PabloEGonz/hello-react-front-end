import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Greeting />,
        },
    ]);
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
export default App
