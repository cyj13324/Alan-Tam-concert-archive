import React from 'react';
import { useNavigate } from 'react-router-dom';
import alanBg from './img/alan.jpg';
import poster1986 from './img/1986.jpg';
import poster1991 from './img/1991.jpg';
import poster1994 from './img/1994.jpg';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const concerts = [
        { id: '1986', title: '1986万众狂欢演唱会', year: '1986', theme: 'red', image: poster1986, tag: '80年代狂热巅峰' },
        { id: '1991', title: '1991梦幻柔情演唱会', year: '1991', theme: 'purple', image: poster1991, tag: '剧院式美学巅峰' },
        { id: '1994', title: '1994香港大球场演唱会', year: '1994', theme: 'green', image: poster1994, tag: '雨中草地传奇' }
    ];

    return (
        <div className="home-container" style={{ backgroundImage: `url(${alanBg})` }}>
            <div className="home-overlay"></div>

            <div className="home-content">
                <header className="home-header">
                    <h1 className="main-logo">ALAN TAM</h1>
                    <div className="logo-divider"></div>
                    <h2 className="main-subtitle">谭咏麟数字档案馆</h2>
                    <p className="archive-desc">CONCERT DIGITAL ARCHIVE • 1986-1994</p>
                </header>

                <div className="poster-grid">
                    {concerts.map((concert) => (
                        <div
                            key={concert.id}
                            className={`poster-card ${concert.theme}-theme`}
                            onClick={() => navigate(`/concert/${concert.id}`)}
                        >
                            <div className="poster-inner">
                                <div className="poster-year">{concert.year}</div>
                                <div className="poster-image-box">
                                    <img src={concert.image} alt={concert.title} className="poster-img" />
                                </div>
                                <div className="poster-info">
                                    <span className="concert-tag">{concert.tag}</span>
                                    <h3>{concert.title}</h3>
                                    <div className="explore-btn">VIEW ARCHIVE →</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="home-footer">
                    <p>© ALAN TAM ARCHIVE | 珍藏光影 永恒记忆</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;