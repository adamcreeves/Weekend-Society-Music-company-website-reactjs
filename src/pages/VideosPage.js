import React from 'react';
import Header from '../components/header/Header';
import VideosBody from '../components/videos/VideosBody';
import Footer from '../components/footer/Footer';
import { c_0014, c_0015, c_0016 } from '../resources/ClassNames';
import '../styling/pages/VideosPage.css';

function VideosPage () {
    return (
        <div className={c_0014}>
            <Header className={c_0015} />
            <VideosBody />
            <Footer className={c_0016} />
        </div>
    );
}

export default VideosPage;
