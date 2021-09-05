import React from "react";
import Header from "../components/header/Header";
import VideosBody from "../components/videos/VideosBody";
import Footer from "../components/footer/Footer";
import '../styling/screens/VideosPage.css';

function VideosPage() {
    return (
        <div className='videos__page'>
            <Header className='videos__header' />
            <VideosBody />
            <Footer className='videos__footer' />
        </div>
    );
}

export default VideosPage;