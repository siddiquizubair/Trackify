import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import LandingScreen from './pages/LandingScreen';

function getToken() {
  return new URLSearchParams(window.location.search).get('access_token'); // searches redirect url for access token
}

function App() {
  let token = getToken();

  if (!token) {
    return (
      <HomeScreen />
    );
  } else {
    return (
      <LandingScreen/>
    );
  }
}

export { App, getToken };