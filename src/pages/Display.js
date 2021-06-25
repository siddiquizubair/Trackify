import React from 'react';
import Tracks from '../components/Tracks';
import Artists from '../components/Artists';
import { getToken } from '../App';

const spotify = require('spotify-web-api-js');
const spotifyApi = new spotify();
spotifyApi.setAccessToken(getToken());

export default class Display extends React.Component {
    constructor () {
        super();
        this.state = {
            shortTracks: [],
            medTracks: [],
            longTracks: [],
            shortArtists: [],
            medArtists: [],
            longArtists: []
        }

        this.getTopTracks = this.getTopTracks.bind(this);
        this.getTopArtists = this.getTopArtists.bind(this);
    }

    
    getTopTracks() {
        let query = {
            time_range: 'short_term',
            limit: 50
        }

        spotifyApi.getMyTopTracks(query)
            .then((response) => {
                let tracks = [];
                for (let i = 0; i < response.items.length; i++)
                    tracks.push(response.items[i]);
                
                this.setState({
                    shortTracks: tracks
                });
                
            })
            .catch(error => console.log(error.message));
        
        query.time_range = 'medium_term';

        spotifyApi.getMyTopTracks(query)
            .then((response) => {
                let tracks = [];
                for (let i = 0; i < response.items.length; i++)
                    tracks.push(response.items[i]);
                
                this.setState({
                    medTracks: tracks
                });
                
            })
            .catch(error => console.log(error.message));

        query.time_range = 'long_term';

        spotifyApi.getMyTopTracks(query)
            .then((response) => {
                let tracks = [];
                for (let i = 0; i < response.items.length; i++)
                    tracks.push(response.items[i]);
                
                this.setState({
                    longTracks: tracks
                });
                
            })
            .catch(error => console.log(error.message));
    }

    getTopArtists() {
        let query = {
            time_range: 'short_term',
            limit: 50
        }

        spotifyApi.getMyTopArtists(query)
            .then((response) => {
                let artists = [];
                for (let i = 0; i < response.items.length; i++)
                    artists.push(response.items[i]);
                
                this.setState({
                    shortArtists: artists
                });
                
            })
            .catch(error => console.log(error.message));
        
        query.time_range = 'medium_term';

        spotifyApi.getMyTopArtists(query)
            .then((response) => {
                let artists = [];
                for (let i = 0; i < response.items.length; i++)
                    artists.push(response.items[i]);
                
                this.setState({
                    medArtists: artists
                });
                
            })
            .catch(error => console.log(error.message));

        query.time_range = 'long_term';

        spotifyApi.getMyTopArtists(query)
            .then((response) => {
                let artists = [];
                for (let i = 0; i < response.items.length; i++)
                    artists.push(response.items[i]);
                
                this.setState({
                    longArtists: artists
                });
                
            })
            .catch(error => console.log(error.message));
    }

    componentDidMount () {
        this.getTopArtists();
        this.getTopTracks();
    }

    render () {
        const {match: {params}} = this.props;
        const {type} = params;

        if (type === 'tracks')
            return (
                <Tracks short={this.state.shortTracks} med={this.state.medTracks} long={this.state.longTracks} />
            );
        else if (type === 'artists')
            return (
                <Artists short={this.state.shortArtists} med={this.state.medArtists} long={this.state.longArtists} />
            );
        else
            return (
                <p>Error 404, Page not found :(</p>
            );
    }
}