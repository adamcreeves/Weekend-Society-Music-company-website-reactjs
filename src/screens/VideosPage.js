import React from "react";
import Header from "../components/head/Header";
import VideosBody from "../components/videosComp/VideosBody";
import Footer from "../components/foot/Footer";
import '../styling/screens/VideosPage.css';

function VideosPage () {
    return (
        <div className='videos__page'>
            <Header className='videos__header' />
            <VideosBody />
            <Footer className='videos__footer' />
        </div>
    );
}

export default VideosPage;