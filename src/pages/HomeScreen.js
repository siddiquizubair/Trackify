import React from 'react';
import '../App.css';

function HomeScreen () {
    const title = {
        color: 'white',
        marginBottom: '10vmin',
        fontFamily: 'Helvetica',
        fontSize: '10vmin'
    }

    const button = {
        cursor: 'pointer',
        borderRadius: '5vmin',
        fontSize: "5vmin",
        padding: '1vmin 6vmin 1vmin 6vmin',
        backgroundColor: '#1DB954',
        color: 'white',
        border: 'none',
        fontFamily: 'Raleway',
        outline: "none"
    }

    return (
        <div className="background">
            <div className="content">
                <h1 style={title}>Trackify</h1>
                <a href="https://backend-trackify.herokuapp.com/login">
                    <button style={button}>Log in with Spotify</button>
                </a>
            </div>
        </div>
    );
}

export default HomeScreen;