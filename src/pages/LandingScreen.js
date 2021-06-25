import React from 'react';
import { Link } from 'react-router-dom';
import { getToken } from '../App';
import '../App.css';

function LandingScreen () {
    const title = {
        color: "white",
        marginBottom: "3vmin",
        fontFamily: "Helvetica",
        fontSize: "10vmin"
    }

    const subTitle = {
        color: "white",
        fontFamily: "Raleway",
        marginBottom: "3vmin"
    }

    const urlTracks = '/tracks/top/?access_token=' + getToken();
    const urlArtists = '/artists/top/?access_token=' + getToken();

    return (
        <div className='background'>
            <div className='select'>
                <h1 style={title}>Trackify</h1>
                <h3 style={subTitle}>Choose what you want to track:</h3>
                <div>
                    <Link to={urlTracks}>
                            <button className='button'>Top Tracks</button>
                    </Link>
                    <div className='divider' />
                    <Link to={urlArtists}>
                        <button className='button'>Top Artists</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingScreen;