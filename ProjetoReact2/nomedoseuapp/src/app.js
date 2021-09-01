import './App.css';
import React, { useState } from 'react';
import Search from './Search';


export default function App() {
    const [text, setText] = useState('');

    return (
        <div className = 'App'>
            <h1>Cartoons</h1>
            <Search value={text} onChange={(search) => setText(search)} />
        </div>
    );
};