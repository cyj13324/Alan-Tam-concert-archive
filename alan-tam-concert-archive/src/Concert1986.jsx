import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Concert1986.css';

const Concert1986 = () => {
    const navigate = useNavigate();

    const fullTimeline = [
        { time: "00:12", title: "01. 序曲【旧信纸】", sec: 12 },
        { time: "02:31", title: "02. 暴风女神LORELEI", sec: 151, desc: "震撼开场，动感舞曲巅峰。" },
        { time: "06:39", title: "03. 午夜骑士", sec: 399 },
        { time: "11:44", title: "04. 情是永愿着迷", sec: 704 },
        { time: "15:32", title: "05. 夏日寒风", sec: 932, desc: "全场沸腾，标志性互动曲目。" },
        { time: "19:33", title: "06. 刺客", sec: 1173 },
        { time: "23:33", title: "07. 爱的根源", sec: 1413 },
        { time: "27:19", title: "08. MEDLEY (组曲)", sec: 1639, desc: "包含：都市恋歌/爱意怎挡/我爱Disco Queen等。" },
        { time: "37:25", title: "09. 第一滴泪", sec: 2245 },
        { time: "41:22", title: "10. 世界停顿", sec: 2482 },
        { time: "44:39", title: "11. 幻影", sec: 2679, desc: "情感深沉，校长唱功的极致展现。" },
        { time: "49:15", title: "12. 雨夜的浪漫", sec: 2955 },
        { time: "53:23", title: "13. 雾之恋", sec: 3203 },
        { time: "59:24", title: "14. 爱情陷阱", sec: 3564, desc: "将狂欢推向最高潮！全场跳动。" },
        { time: "1:03:17", title: "15. 爱在深秋", sec: 3797 },
        { time: "1:10:38", title: "16. 傲骨", sec: 4238 },
        { time: "1:16:27", title: "17. 忘不了您", sec: 4587 },
        { time: "1:22:23", title: "18. 无言感激", sec: 4943, desc: "深情谢幕，经典的告白。" },
    ];

    const concertArchives = [
        { tag: "🔥 巅峰起点", text: "1986年是“谭张争霸”开启年，校长在大馆展现了无与伦比的统治力。" },
        { tag: "🎸 万众狂欢", text: "这一年演唱会的主题就是狂欢，舞台编排极具动感与侵略性。" },
        { tag: "🎤 嗓音状态", text: "修复版还原了校长最为清亮、穿透力最强的黄金嗓音。" },
        { tag: "🌟 时代记忆", text: "《爱情陷阱》的舞步在这一年成为了全港模仿的教科书。" }
    ];

    const baseSrc = "https://player.bilibili.com/player.html?bvid=BV1vm4y147uT&page=1&high_quality=1&autoplay=1";
    const [currentSrc, setCurrentSrc] = useState(baseSrc);
    const [activeDesc, setActiveDesc] = useState("1986年万众狂欢，感受校长巅峰时期的舞台能量！");

    return (
        <div className="concert-page red-neon-theme">
            {/* 动态背景层 */}
            <div className="bg-container">
                <div className="aurora-red aurora-1"></div>
                <div className="aurora-red aurora-2"></div>
                <div className="aurora-red aurora-3"></div>

                {/* 空间穿梭粒子 */}
                {[...Array(50)].map((_, i) => (
                    <span key={i} className="neon-particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        animationDuration: `${Math.random() * 5 + 4}s`,
                        animationDelay: `${Math.random() * -10}s`
                    }}></span>
                ))}
            </div>

            <div className="top-nav">
                <button className="back-home-btn-premium red-btn" onClick={() => navigate('/')}>
                    <span className="btn-icon">←</span>
                    <span className="btn-text">返回数字档案馆</span>
                    <div className="btn-glow-effect"></div>
                </button>
            </div>

            <header className="main-header">
                <h1 className="red-text flicker-text shine-text">ALAN TAM 1986</h1>
                <p className="sub-title">万众狂欢演唱会 · THE PEAK ERA</p>
            </header>

            <div className="content-container">
                <div className="left-panel">
                    {/* 视频扫光外框 */}
                    <div className="video-box-wrapper">
                        <div className="video-box">
                            <iframe src={currentSrc} allowFullScreen title="Alan86Video"></iframe>
                        </div>
                    </div>

                    <div className="active-info-bar glass red-border">
                        <span className="info-icon pulse-fire">🔥</span>
                        <p>{activeDesc}</p>
                    </div>

                    <div className="archive-card glass hover-glow">
                        <h3 className="section-title red-line">🏛️ 1986 幕后档案</h3>
                        <div className="archives-grid-86">
                            {concertArchives.map((item, i) => (
                                <div key={i} className="trivia-item-box-86">
                                    <span className="trivia-tag-86">{item.tag}</span>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="right-panel">
                    <div className="timeline-box glass">
                        <div className="list-title red-text">跳转歌单 (Timeline)</div>
                        <div className="list-scroll">
                            {fullTimeline.map((item, idx) => (
                                <div key={idx} className="track-item-86" onClick={() => {
                                    setCurrentSrc(`${baseSrc}&t=${item.sec}`);
                                    setActiveDesc(item.desc || "感受 1986 的狂欢节奏！");
                                }}>
                                    <span className="track-time-86">{item.time}</span>
                                    <span className="track-name-86">{item.title}</span>
                                    <div className="track-hover-light"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Concert1986;