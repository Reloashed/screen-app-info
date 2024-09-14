import React from 'react';
import ReactDOM from 'react-dom';
import AppCard from './components/AppCard'
import './global.css';

function App() {
    return (
        <div>
            <h1>Hello from React inside Electron!</h1>
            <p>This is a JSX-based React component running in an Electron app.</p>
            <AppCard name={"Netflix"} />
            <AppCard name={"Youtube"} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
