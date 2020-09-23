import React, { Component } from 'react';
import Navbar from '../navbar/navbar';

const Home = props => {

    return (
        <div>
            <Navbar />
            <p>Click on an emoji to view the emoji short name.</p>
        </div>
    )
}

export default Home;