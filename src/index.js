import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'

const container = document.getElementById("root");
const root = createRoot(container);


const App = () => {

    return <div><h1 style={{
        backgroundColor: color
    }}>Hello From component</h1><input type="color"  /></div>
}

root.render(<App />);
